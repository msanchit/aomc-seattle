# Setup Guide for Web Developers

This document explains how to deploy this site and point the aomcseattle.com domain to it.

## What This Is

A modern rebuild of aomcseattle.com built with Next.js and Tailwind CSS. Currently live at:
https://aomcseattle.vercel.app/

Source code: https://github.com/msanchit/aomc-seattle

## How to Deploy

1. Go to https://vercel.com and sign up with GitHub
2. Click "Add New Project" → import the `aomc-seattle` repository
3. Click Deploy (all defaults are fine)
4. Site will be live in ~60 seconds

## How to Point the Domain

The domain aomcseattle.com is registered at **Network Solutions**.

Login: https://www.networksolutions.com/manage-it
Support: 1-866-803-2769

### In Vercel:
1. Project → Settings → Domains
2. Add `www.aomcseattle.com`
3. Add `aomcseattle.com`

### In Network Solutions:
1. Log in → Account Manager → click aomcseattle.com
2. Go to DNS Settings / Advanced DNS / Manage DNS
3. Set these records:

| Type  | Name | Value                |
|-------|------|----------------------|
| A     | @    | 76.76.21.21          |
| CNAME | www  | cname.vercel-dns.com |

Replace any existing A or CNAME records for @ and www. Leave everything else.

4. Save. Takes minutes to 24 hours to propagate. Vercel handles HTTPS automatically.

## How to Make Changes

Edit files in `src/app/` — each folder is a page. Push to GitHub and Vercel auto-deploys.

### Project Structure

```
src/app/
  page.tsx            → Homepage
  tcm/page.tsx        → Traditional Chinese Medicine
  conditions/page.tsx → Conditions Treated
  staff/page.tsx      → Physician Profiles
  clinics/page.tsx    → Specialty Clinics
  education/page.tsx  → Continuing Education
  testimonials/page.tsx
  faqs/page.tsx
  gallery/page.tsx    → Facility & Pharmacy Photos
  contact/page.tsx    → Contact & Insurance Info
src/components/
  Header.tsx          → Navigation bar
  Footer.tsx
  MobileCallBar.tsx   → Sticky phone button (mobile only)
```

## Local Development

```bash
npm install
npm run dev    # runs on localhost:3000
npm run build  # production build
```

## Contact

Built by Sanchit — m.sanchit@gmail.com
