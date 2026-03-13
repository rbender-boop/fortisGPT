# fortisgpt.com — Session Handover B
**Date:** March 13, 2026
**Session:** Nav, Expansion Page, Letter Revisions, Form Wiring

---

## Site Status
- **fortisgpt.com** — LIVE ✅ (DNS resolved this session)
- **Vercel project:** fortis-gpt.vercel.app — auto-deploys on push to master
- **Repo:** rbender-boop/fortisgpt (branch: master)
- **Local:** `C:\Users\rbend\Desktop\fortisgpt\`

---

## File Structure (current)

```
C:\Users\rbend\Desktop\fortisgpt\
├── index.html          — Platform infographic (main page)
├── letter.html         — Founders' letter (Rob's voice)
├── expansion.html      — Six verticals + Steve Chaben + recruiting form (NEW)
├── api/
│   └── contact.js      — Vercel serverless function → Resend email API (NEW)
├── public/
│   └── org-chart.png   — Copy of "New Org Chart - 6 Verticals.png"
├── vercel.json         — Routes: /, /letter, /expansion, /api/*
├── HANDOVER-2026-03-13.md
└── HANDOVER-2026-03-13-B.md  ← this file
```

---

## What Was Built This Session

### 1. letter.html — Major Revisions
- **Pull quote** updated to Rob's exact words verbatim
- **Date** updated to March 2026
- **Pull quote edit:** "all of them— and that's exactly what we did. The genie is out of the bottle here at Fortis."
- **Removed** "selling your asset" from pull quote
- **Closing paragraphs** — text set to white + font-weight:500
- **"Big Brokerage Houses"** bolded (font-weight:800, white)
- **Max-width** expanded from 860px → 1075px (+25%)
- **Removed** expansion section (moved to expansion.html)
- **Added** teaser card → expansion.html ("Six Verticals. Steve Chaben. One Platform.")
- **Nav** added: 3-tab pill nav (active = Founders' Letter)
- **Bullet label** "Verified Scale, Not Inflated Claims" → removed "Claims"

### 2. expansion.html — NEW PAGE
- Standalone page, same design system, max-width 1075px
- **Eyebrow/headline:** "THE EXPANSION" / "SIX VERTICALS. ONE PLATFORM."
- **Steve Chaben card** — gold top border, avatar monogram, 30-year M&M credential
- **Hub & spoke SVG** — FCS gold center, 6 spokes: Net Lease (gold/heritage), Multifamily, Retail, Medical, Office, Industrial
- **2 body paragraphs** — recruiting pitch, disruption copy
- **Recruiting form** — asset class dropdown (not experience), sends via /api/contact
- **3-tab nav** — The Expansion active
- **Footer** — all 6 verticals listed

### 3. index.html — Hero CTA Updates
- **Ghost button** → solid gold gradient with pulse animation
- **Pulse animation** — `pulse-gold` keyframe, 2.4s ease-in-out glow
- **"A Message From the Founders"** renamed to **"Founders' Message"**
- **Arrow removed** from gold button
- **Two hero CTAs:** gold "Founders' Message" → letter.html + ghost "The Expansion" → expansion.html (turns solid gold on hover)
- **Section header font** 9px → 13px
- **No top nav on index** — navigation is via the two hero CTAs only

### 4. api/contact.js — NEW
- Vercel serverless function
- Receives POST from either form
- Sends via **Resend API** to rob@fortiscsg.com, doug@fortiscsg.com, steve@fortiscsg.com
- Reply-to set to prospect's email
- Branded HTML email template (navy/gold)
- **PENDING:** RESEND_API_KEY must be set in Vercel environment variables
- **PENDING:** fortisgpt.com domain must be verified in Resend dashboard (for `from: inquiries@fortisgpt.com`)

### 5. vercel.json
- Routes: `/` → index.html, `/letter` → letter.html, `/expansion` → expansion.html, `/api/*` → serverless

---

## Navigation Architecture

```
index.html
  ├── "Founders' Message" (gold, pulsing) → letter.html
  └── "The Expansion" (ghost → gold hover) → expansion.html

letter.html
  ├── 3-tab nav: The Platform | [Founders' Letter] | The Expansion
  ├── Teaser card at bottom → expansion.html
  └── CTA → index.html#recruit

expansion.html
  ├── 3-tab nav: The Platform | Founders' Letter | [The Expansion]
  └── Recruiting form (submits via /api/contact)
```

---

## Pending / Next Session

- [ ] **Resend setup** — add `RESEND_API_KEY` to Vercel env vars (Settings → Environment Variables)
- [ ] **Resend domain verify** — add DNS records for fortisgpt.com in Resend dashboard → GoDaddy
- [ ] **Test form submission** — verify emails arrive at all 3 recipients
- [ ] **301 forwards** — fortisedge.com / fortisedge.ai / thefortisedge.com → fortisgpt.com (GoDaddy, still pending)
- [ ] **Letter copy** — Rob to review and refine further if needed
- [ ] **index.html recruiting form** — consider removing (form now lives on expansion.html) or keep as second entry point

---

## Design System (unchanged)
```css
--navy: #1A1D38 | --gold: #C9A55A | --gold-lt: #E8C87A | --gold-dim: #5C4820
--white: #FFFFFF | --muted: #7481A6 | --muted-lt: #A8B4CC
--green: #2ECC8F | --border: #303570 | --border-br: #3E4480
Fonts: Bebas Neue (headers) / IBM Plex Mono (badges) / Manrope (body)
```

## Key Stats (verified, do not change)
- **$9.7B** transaction volume
- **177,000** verified buyer contacts
- **68** proprietary FortisEDGE tools
- **~14** competitor average (7 competitors, 97 tools total)
- **17** best single competitor (Buildout/Rethink)
- **~5×** more capability than industry average

## Absolute Rules (carry forward)
- FortisEDGE: NOT for sale, NOT a subscription, NOT available to outside brokers
- No "Walled Lake, MI" on public site
- No "net lease" or "NNN" in headlines (net lease is listed as a vertical only)
- No Manager Portal references
- Always: **FortisEDGE powered by FortisGPT.com**
- Stats: $9.7B / 177,000 / 68 tools — never round or alter
