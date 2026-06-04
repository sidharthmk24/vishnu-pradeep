# CLAUDE.md — Vishnu Pradeep Personal Brand Website
 
This file is the single source of truth for Claude (or any AI assistant) working
on this codebase. Read this before touching anything.
 
---
 
## What This Project Is
 
A personal brand website for **Vishnu Pradeep** — Marketer & Creative Strategist.
Built with **Next.js 14 (App Router)** and **Tailwind CSS**.
 
**One goal**: get serious founders and business leaders to fill in the contact form
and start a consulting inquiry. Every decision — design, copy, layout, CTA placement
— must serve that goal.
 
---
 
## Skills to Load
 
Two custom skills live in `/skills/`. Always read them before building:
 
| Skill | When to use |
|---|---|
| `skills/nextjs-brand-website/SKILL.md` | Any page, component, routing, SEO, animation, or Tailwind config work |
| `skills/dark-ui-components/SKILL.md` | Any specific UI component, section pattern, or visual element |
 
**Rule**: if you're about to write a component and haven't read both skills, stop and read them first.
 
---
 
## Tech Stack
 
| Layer | Choice |
|---|---|
| Framework | Next.js 14, App Router, TypeScript strict |
| Styling | Tailwind CSS + theme extension |
| Animation | Framer Motion (minimal — see skill) |
| Fonts | next/font/google (Playfair Display, DM Sans, DM Mono) |
| Icons | lucide-react |
| Images | next/image, placeholder="blur" |
| Forms | Controlled React state (useState) — no form library |
| Form backend | /app/api/contact/route.ts using Resend |
| SEO | generateMetadata() per page + Open Graph |
 
---
 
## Pages
 
| Route | File | Purpose |
|---|---|---|
| `/` | app/page.tsx | Home — hero, about, values, services preview, work, speaking teaser, CTA |
| `/services` | app/services/page.tsx | 4 services, who it's for, CTA |
| `/portfolio` | app/portfolio/page.tsx | 4 featured projects, alternating layout |
| `/speaking` | app/speaking/page.tsx | 4 topics + speaking inquiry form |
| `/contact` | app/contact/page.tsx | Primary conversion page — contact form |
 
No blog. No case study detail pages. No CMS. Keep it lean.
 
---
 
## Design System — Quick Reference
 
### Colors (memorise these, nothing else exists)
```
#0A0A0A  → bg everywhere          (brand-black)
#111111  → cards + inputs          (brand-card)
#E8202A  → red accents + CTAs      (brand-red)
#c01820  → red hover state         (brand-red-hv)
#FFFFFF  → all text                (brand-white)
```
 
### Fonts
```
font-display  → Playfair Display  → headlines
font-body     → DM Sans           → body, nav, buttons
font-mono     → DM Mono           → overlines, tags, labels (UPPERCASE, tracking-widest)
```
 
### Hard Rules
1. **No border-radius** — every corner is sharp. `rounded-none` is global default.
2. **No colors outside the palette** — not even Tailwind's default grays
3. **No Lorem Ipsum** — copy must sound like a senior brand strategist
4. **No centered body text** — left-align always; center only in hero sections
5. **No external UI libraries** — Tailwind only, no shadcn/MUI/Chakra
6. **No stock photography** — image areas use `bg-brand-card` placeholders
7. **No heavy animations** — subtle fade-up reveals only (see FadeUp component)
8. **No inline styles** — Tailwind classes only (exception: `clamp()` for fluid type)
---
 
## Component Conventions
 
### Always `'use client'` on:
- Any component using Framer Motion (`motion.*`, `useScroll`, `useInView`)
- Any component using React hooks (`useState`, `useEffect`, `useRef`)
- Navbar (scroll-aware), ContactForm, SpeakingForm
### Server components (no directive needed):
- All page.tsx files
- SectionHeader, Tag, Divider, CTABanner (if no animation)
- Footer
### FadeUp usage:
```tsx
// Wrap any section content that should animate on scroll
<FadeUp delay={0}> ... </FadeUp>
<FadeUp delay={0.1}> ... </FadeUp>
// For card grids, wrap each card with increasing delay (0, 0.08, 0.16...)
```
 
### Form success state:
```tsx
// Always replace the entire form (not just show a toast) on success
// Use: lucide Check icon (red) + Playfair headline + DM Sans sub-copy
{submitted ? <SuccessState /> : <FormFields />}
```
 
---
 
## Copy Voice — Brand Rules
 
Every word on this site must sound like Vishnu Pradeep wrote it.
 
**He is**: a senior practitioner speaking to peers. Not a coach. Not a motivational
speaker. A strategist who has built things and shares what works.
 
| ✅ Write like this | ❌ Never write like this |
|---|---|
| "Built from 15+ years of real work" | "Unlock your brand's potential" |
| "Strategy grounded in experience" | "Take your brand to the next level" |
| "For founders making serious decisions" | "For anyone who wants to grow" |
| "I'll get back to you in 48 hours" | "We'd love to hear from you!" |
| "What's the business challenge you're facing?" | "Tell us about yourself" |
 
---
 
## File Naming Conventions
 
```
Components:     PascalCase     → Hero.tsx, ContactForm.tsx, FadeUp.tsx
Pages:          lowercase      → page.tsx (Next.js convention)
Utilities:      camelCase      → formatDate.ts, cn.ts
CSS:            kebab-case     → globals.css
```
 
---
 
## Tailwind Class Order Convention
 
Follow this order within className strings:
1. Layout (flex, grid, block)
2. Positioning (relative, absolute, sticky)
3. Sizing (w-, h-, max-w-, aspect-)
4. Spacing (p-, m-, gap-)
5. Typography (font-, text-, leading-, tracking-)
6. Colors (bg-, text-, border-color)
7. Border (border, border-l-, border-t-)
8. Effects (shadow, opacity, transition)
9. State variants (hover:, focus:, group-hover:)
10. Responsive (sm:, md:, lg:, xl:)
---
 
## Common Tasks
 
### Add a new section to a page
1. Read `skills/dark-ui-components/SKILL.md` — find the closest pattern
2. Create component in `/components/[page]/SectionName.tsx`
3. Import and place in page.tsx
4. Wrap content in `<FadeUp>` for scroll reveal
5. Ensure copy sounds like Vishnu, not a template
### Update copy
- Never make it generic — keep it direct, practitioner-led, outcome-focused
- Check: does this sentence connect to a business result for the reader?
### Add a new page
- Create `/app/[page]/page.tsx`
- Add `generateMetadata()` with title, description, OG tags
- Add route to Navbar links and Footer
- Use `max-w-7xl mx-auto px-6 lg:px-12` on all section wrappers
### Fix a component that looks "off"
- Check: is the border-radius zero? → `rounded-none`
- Check: is copy left-aligned? → `text-left`
- Check: is the color in the brand palette? → only #0A0A0A / #111111 / #E8202A / #FFFFFF
- Check: is the overline in DM Mono, uppercase, red, tracking-widest?
---
 
## What Done Looks Like
 
A page is done when:
- [ ] All Tailwind classes use brand tokens (brand-black, brand-red, etc.)
- [ ] No border-radius on any element (except lucide icons if needed)
- [ ] FadeUp is on every section (not the hero — that uses entrance animation)
- [ ] generateMetadata() is exported
- [ ] Mobile layout is tested (stacked, readable, tap targets ≥ 44px)
- [ ] Copy sounds like Vishnu, not a generic template
- [ ] No inline styles (except clamp() for fluid type)
- [ ] 'use client' is on every component that needs it
---
 
## Contact Form Backend (when ready to wire up)
 
```ts
// app/api/contact/route.ts
import { Resend } from 'resend'
 
const resend = new Resend(process.env.RESEND_API_KEY)
 
export async function POST(req: Request) {
  const body = await req.json()
  await resend.emails.send({
    from: 'website@vishnupradeep.in',
    to: 'vishnu@vishnupradeep.in',
    subject: `New inquiry from ${body.name}`,
    html: `...`
  })
  return Response.json({ success: true })
}
```
 
Set `RESEND_API_KEY` in `.env.local`. Never commit this file.
 
---
 
## Environment Variables
 
```bash
# .env.local (never commit)
RESEND_API_KEY=re_...
NEXT_PUBLIC_SITE_URL=https://vishnupradeep.in
```
 
---
 
*Last updated: 2025 | Version 1.0*
*For: Vishnu Pradeep Personal Brand Website*
