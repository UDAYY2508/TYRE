# Local Development Setup

## ⚠️ Important: API Routes Require Vercel CLI

The Gmail API routes are serverless functions that only work properly when:
1. **Deployed to Vercel** (production)
2. **Running with Vercel CLI** (local development)

## Local Development Options

### Option 1: Use Vercel CLI (Recommended)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Run development server:
   ```bash
   npx vercel dev
   ```

3. This will:
   - Start Vite dev server for frontend
   - Execute API routes as serverless functions
   - Handle environment variables properly

### Option 2: Deploy to Vercel Preview

1. Push your code to GitHub
2. Vercel will automatically create preview deployments
3. Test on the preview URL

### Option 3: Use EmailJS Fallback (Quick Testing)

If you just want to test the frontend without setting up Gmail API:

1. The old EmailJS code is still available
2. You can temporarily switch back to EmailJS for local testing
3. See `src/config/emailjs.ts` for EmailJS configuration

## Troubleshooting

### Error: "Unexpected token '/', '/**' is not valid JSON"

**Cause:** API routes are being served as static files instead of executed as serverless functions.

**Solutions:**
1. Use `npx vercel dev` instead of `npm run dev`
2. Deploy to Vercel and test on the deployed URL
3. Check that `vercel.json` is configured correctly

### API Routes Not Working Locally

**Solution:** Always use `npx vercel dev` for local development when testing Gmail API features.

### Environment Variables Not Loading

**Solution:** 
- For Vercel CLI: Create `.env.local` file
- For Vercel deployment: Add variables in Vercel Dashboard

## Quick Start (Local Dev)

```bash
# Install dependencies
npm install

# Install Vercel CLI (if not already installed)
npm install -g vercel

# Start development server with API routes
npx vercel dev

# Or just frontend (API routes won't work)
npm run dev
```

## Production Deployment

When deployed to Vercel, API routes work automatically. No special configuration needed!

