# 🚀 Scrolla Deployment Guide

## Quick Start (5 minutes)

### 1. Get Your OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Copy the key (starts with `sk-proj-...`)

### 2. Deploy to Vercel (Recommended)

#### Option A: One-Click Deploy
1. Click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/scrolla)
2. Connect your GitHub account
3. Add environment variable: `OPENAI_API_KEY` = your API key
4. Click "Deploy"
5. Done! Your app will be live in ~2 minutes

#### Option B: Manual Deploy
```bash
# 1. Clone and setup
git clone https://github.com/yourusername/scrolla.git
cd scrolla
npm install

# 2. Configure environment
cp .env.local.example .env.local
# Edit .env.local and add your OpenAI API key

# 3. Test locally
npm run dev
# Visit http://localhost:3000

# 4. Deploy to Vercel
npx vercel
# Follow the prompts
```

### 3. Alternative Deployment Options

#### Netlify
```bash
# Build the app
npm run build

# Deploy to Netlify
npx netlify deploy --prod --dir=.next
```

#### Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway init
railway up
```

#### Docker
```dockerfile
# Dockerfile included in project
docker build -t scrolla .
docker run -p 3000:3000 scrolla
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `OPENAI_API_KEY` | Your OpenAI API key | `sk-proj-abc123...` |
| `NEXT_PUBLIC_APP_URL` | Your app's URL | `https://scrolla.vercel.app` |

## Post-Deployment Checklist

- [ ] App loads successfully
- [ ] Video upload works
- [ ] YouTube URL processing works
- [ ] AI transcription generates
- [ ] Chat functionality responds
- [ ] Search returns results

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### API Errors
- Check OpenAI API key is correct
- Verify API usage limits not exceeded
- Check Vercel function logs

### Performance Issues
- Videos over 500MB may timeout
- Long videos (>1 hour) may need chunking
- Consider upgrading Vercel plan for higher limits

## Customization

### Branding
- Update `src/app/page.tsx` for logo/title
- Modify `tailwind.config.ts` for colors
- Edit `src/app/globals.css` for fonts

### Features
- Add new API routes in `src/app/api/`
- Create components in `src/components/`
- Extend functionality in main page

## Monitoring

### Vercel Analytics
```bash
npm install @vercel/analytics
```

### Error Tracking
```bash
npm install @sentry/nextjs
```

## Scaling

### Database Integration
- Add PostgreSQL for production
- Implement user authentication
- Store video metadata persistently

### File Storage
- Integrate AWS S3 or Cloudinary
- Add video thumbnail generation
- Implement file cleanup

### Performance
- Add Redis caching
- Implement video streaming
- Optimize AI processing

## Support

- **Documentation**: See README.md
- **Issues**: GitHub Issues
- **Community**: GitHub Discussions

---

**🎉 Congratulations! Scrolla is now live and ready to transform video learning!**

