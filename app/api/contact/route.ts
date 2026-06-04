import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Fallback simulation for development when RESEND_API_KEY is not configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_placeholder" || process.env.RESEND_API_KEY.startsWith("re_...")) {
      console.log("DEV SIMULATION: Resend API Key is missing. Form Submission Details:", {
        name,
        email,
        company,
        budget,
        message
      });
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return NextResponse.json({ success: true, simulated: true });
    }

    const { data, error } = await resend.emails.send({
      from: "website@vishnupradeep.in",
      to: "vishnu@vishnupradeep.in",
      subject: `New Strategy Inquiry from ${name} (${company || "No Company"})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #222; background-color: #0A0A0A; color: #FFFFFF;">
          <h2 style="color: #E8202A; font-family: serif; border-bottom: 1px solid #222; padding-bottom: 10px; margin-top: 0;">New Consulting Inquiry</h2>
          <p style="color: #BBBBBB; font-size: 14px;">A new strategy inquiry has been submitted from the website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px; color: #888888; font-size: 14px;">Full Name:</td>
              <td style="padding: 8px 0; color: #FFFFFF; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #888888; font-size: 14px;">Email Address:</td>
              <td style="padding: 8px 0; color: #FFFFFF; font-size: 14px;"><a href="mailto:${email}" style="color: #E8202A; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #888888; font-size: 14px;">Company:</td>
              <td style="padding: 8px 0; color: #FFFFFF; font-size: 14px;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #888888; font-size: 14px;">Monthly Budget:</td>
              <td style="padding: 8px 0; color: #FFFFFF; font-size: 14px;">${budget || "Not Specified"}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 15px; background-color: #111111; border-left: 3px solid #E8202A;">
            <h4 style="margin-top: 0; color: #E8202A; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Primary Challenge:</h4>
            <p style="white-space: pre-wrap; margin-bottom: 0; line-height: 1.6; color: #FFFFFF; font-size: 14px;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Contact Form Server Error:", error);
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
