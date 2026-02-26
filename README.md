# AOMC Seattle — Modern Website

A modern rebuild of [aomcseattle.com](http://www.aomcseattle.com) for the Acupuncture & Oriental Medicine Center in Seattle.

Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com). Designed for readability and accessibility, with an emphasis on the clinic's older patient demographic.

---

## For Dr. Duan & Staff: How to Get This Live

There are two steps: **deploy the site** (free hosting), and **point your domain** to it.

### Step 1: Deploy to Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and click **Sign Up** → **Continue with GitHub**
2. Once logged in, click **Add New Project**
3. Find this repository in the list and click **Import**
4. Leave all settings as default and click **Deploy**
5. In ~60 seconds you'll get a live URL like `aomc-seattle.vercel.app`

That's it — the site is now live on the internet at that URL.

### Step 2: Point Your Domain (aomcseattle.com)

To make `www.aomcseattle.com` show this new site:

1. In Vercel, go to your project → **Settings** → **Domains**
2. Type `www.aomcseattle.com` and click **Add**
3. Vercel will show you DNS records to set up. You need to go to wherever your domain is registered (GoDaddy, Namecheap, Google Domains, etc.) and update the DNS:

   | Type  | Name  | Value                    |
   |-------|-------|--------------------------|
   | CNAME | www   | cname.vercel-dns.com     |
   | A     | @     | 76.76.21.21              |

4. Save the DNS changes. It may take up to 24–48 hours to propagate, but usually works within minutes.
5. Vercel will automatically set up HTTPS (SSL) for you — no extra steps.

> **Tip:** If you're unsure who your domain registrar is, try searching "whois aomcseattle.com" on Google. The registrar name will appear in the results.

### Step 3: Future Updates

To update the website content:

1. Edit the files in `src/app/` — each folder is a page (e.g., `src/app/contact/page.tsx` is the Contact page)
2. Push changes to GitHub
3. Vercel automatically rebuilds and deploys within ~30 seconds

---

## For Developers: Local Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The site runs at `http://localhost:3000`.

### Project Structure

```
src/
  app/
    page.tsx          # Homepage
    tcm/page.tsx      # Traditional Chinese Medicine
    conditions/page.tsx
    staff/page.tsx    # Physician profiles
    clinics/page.tsx  # Specialty clinics
    education/page.tsx
    testimonials/page.tsx
    faqs/page.tsx
    gallery/page.tsx  # Facility & pharmacy photos
    contact/page.tsx
    layout.tsx        # Shared layout (header, footer)
    globals.css       # Global styles & color variables
  components/
    Header.tsx        # Navigation bar
    Footer.tsx
    MobileCallBar.tsx # Sticky phone button on mobile
public/
  images/             # All site images
    generated/        # AI-generated images (hero, logo, etc.)
    images/           # Original scraped images (doctor photos, etc.)
  gallery/            # Facility and pharmacy photos
    facility/
    pharmacy/
```

### Key Information

- **Phone:** (206) 782-2126
- **Email:** aomcseattle@gmail.com
- **Ballard:** 9015 Holman Rd. NW, Suite 1, Seattle, WA 98117
- **Belltown:** 2701 Western Ave., Seattle, WA 98121
- **Hours:** Mon–Fri 9am–6:30pm, Sat 9am–1pm

---

Built with care by Sanchit.
