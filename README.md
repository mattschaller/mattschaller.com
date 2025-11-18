# mattschaller.com

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router with Static Export)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
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
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage (GitHub-style portfolio)
│   ├── not-found.tsx      # 404 page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   └── github-portfolio.tsx  # Main portfolio component
├── lib/                   # Utilities
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Building for Production

Build and export static site:
```bash
npm run export
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
npm run export
```

2. Deploy to S3:
```bash
aws s3 sync out/ s3://your-bucket-name --delete
```

3. Invalidate CloudFront cache:
```bash
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## Features

- ✅ GitHub-style dark theme design
- ✅ Interactive tabbed portfolio interface
- ✅ Static site generation for optimal performance
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Markdown blog with syntax highlighting
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Google Analytics integration
- ✅ Contact form with validation
- ✅ Responsive design
- ✅ Dark mode support

## License

MIT

## Contact

matt@mattschaller.com
