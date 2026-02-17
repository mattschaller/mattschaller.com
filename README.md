# mattschaller.com

Personal portfolio website. Clean, modern, scrollable single-page design with subtle retro touches.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router with Static Export)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: IBM Plex Sans + IBM Plex Mono (via `next/font/google`)
- **Icons**: [Lucide React](https://lucide.dev/) (404 page)
- **Analytics**: Google Tag Manager (GTM) with Google Analytics 4
- **Deployment**: AWS S3 + CloudFront via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mattschaller.com/
├── app/
│   ├── page.tsx           # Client component orchestrator (theme + easter eggs)
│   ├── not-found.tsx      # 404 page
│   ├── layout.tsx         # Root layout (fonts, metadata, analytics)
│   ├── globals.css        # CSS variables (dark/light themes)
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/
│   ├── header.tsx         # Name, title, status indicator
│   ├── nav.tsx            # Section anchor links
│   ├── about.tsx          # Bio paragraphs
│   ├── experience.tsx     # Career timeline (9 positions)
│   ├── skills.tsx         # Skill category grid
│   ├── contact.tsx        # Contact links
│   └── footer.tsx         # Footer with easter eggs
├── lib/
│   └── utils.ts           # Helper functions
└── public/
    └── humans.txt         # humans.txt easter egg
```

## Building for Production

Build and export static site:
```bash
npm run build
```

This generates a static site in the `out/` directory.

## Deployment

The site automatically deploys to AWS S3 + CloudFront when pushing to the `master` branch via GitHub Actions.

### Required GitHub Secrets

- `AWS_ACCESS_KEY_ID` - AWS access key
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `S3_BUCKET` - S3 bucket name
- `CLOUDFRONT_ID` - CloudFront distribution ID

### Manual Deployment

1. Build the static site:
```bash
npm run build
```

2. Deploy to S3:
```bash
aws s3 sync out/ s3://your-bucket-name --delete
```

3. Invalidate CloudFront cache:
```bash
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## Security

### Production Security Checklist

This site implements best-in-class security practices:

✅ **Zero Vulnerabilities** - All dependencies regularly audited and updated  
✅ **Static Site Architecture** - No server-side attack surface  
✅ **XSS Protection** - React's built-in sanitization + secure link handling  
✅ **Modern Analytics** - Google Tag Manager (GTM) with GA4 implementation  
✅ **Secure Deployment** - S3 + CloudFront with security headers

### CloudFront Security Configuration

**Important**: Since Next.js static export doesn't support runtime headers, security headers must be configured at the CloudFront level.

**📋 Complete Configuration Guide:** See [docs/security/cloudfront-configuration.md](docs/security/cloudfront-configuration.md) for detailed step-by-step instructions.

**Required Security Headers:**
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- Strict-Transport-Security (HSTS)

**Additional CloudFront Requirements:**
- HTTPS redirect enabled
- TLS 1.2+ minimum
- Origin Access Control (OAC) configured
- S3 bucket policy restricting access to CloudFront only

### Security Maintenance

Run these commands regularly:

```bash
# Check for vulnerabilities
npm audit

# Update dependencies
npm update

# Fix security issues
npm audit fix
```

## Features

- Dark/light theme switching via CSS variables (`data-theme` attribute)
- Static site generation for optimal performance
- TypeScript throughout
- Tailwind CSS with custom color tokens
- SEO optimized (metadata, sitemap, robots.txt)
- Google Tag Manager (GTM) with GA4 integration
- Security headers via CloudFront
- Responsive design
- Easter eggs (view source, keyboard shortcuts, URL params, humans.txt)

## Easter Eggs

- `Ctrl+Shift+L` (or `Cmd+Shift+L`) — toggle dark/light theme
- `?legacy=true` URL parameter — legacy mode alert
- View page source — ASCII art message
- `/humans.txt` — site credits
- Footer — "Best viewed in Netscape Navigator 4.0 or higher"

## License

MIT

## Contact

matt@mattschaller.com
