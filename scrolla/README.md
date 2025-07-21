# Scrolla - AI Video Learning Assistant

A powerful AI-driven platform that transforms YouTube videos and MP4 files into interactive learning experiences with transcription, summarization, semantic search, and intelligent Q&A.

![Scrolla Interface](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Scrolla+AI+Video+Learning)

## ✨ Features

- **🎥 Video Processing**: Upload MP4 files or paste YouTube URLs
- **📝 AI Transcription**: Precise timestamped transcripts using OpenAI Whisper
- **📊 Smart Summarization**: Key insights and takeaways powered by GPT-4
- **🔍 Semantic Search**: Find specific content instantly across video timeline
- **🎬 Study Clips**: Generate focused learning segments with TTS narration
- **💬 AI Tutor Chat**: Ask questions about video content with timestamp references
- **🎨 Clean Design**: Minimal, professional interface inspired by ElevenLabs and Apple

## 🚀 Quick Deploy to Vercel

### One-Click Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/scrolla)

### Manual Deployment

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/scrolla.git
   cd scrolla
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app
   ```

4. **Deploy to Vercel**
   ```bash
   npx vercel
   ```

## 🛠️ Local Development

1. **Prerequisites**
   - Node.js 18+ 
   - OpenAI API key

2. **Setup**
   ```bash
   npm install
   cp .env.local.example .env.local
   # Add your OpenAI API key to .env.local
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key for AI features | ✅ |
| `NEXT_PUBLIC_APP_URL` | Your app's public URL | ✅ |

## 🎯 How to Use

### 1. Upload Video
- **YouTube**: Paste any YouTube URL
- **File Upload**: Drag & drop MP4 files (up to 500MB)

### 2. AI Processing
- Automatic transcription with timestamps
- Smart summarization and key topic extraction
- Semantic search index creation

### 3. Interactive Learning
- **Search**: Find specific topics instantly
- **Navigate**: Click timestamps to jump to moments
- **Chat**: Ask questions about the content
- **Clips**: Generate study segments with narration

## 🏗️ Architecture

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Components** for UI

### Backend
- **Next.js API Routes** for serverless functions
- **OpenAI APIs** for AI processing
- **Edge Runtime** for global performance

### AI Features
- **Whisper API** for transcription
- **GPT-4** for summarization and chat
- **Text Embeddings** for semantic search
- **TTS API** for narration

## 📦 Project Structure

```
scrolla/
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── globals.css    # Global styles
│   │   └── page.tsx       # Main application
│   └── components/        # React components
├── public/                # Static assets
├── .env.local            # Environment variables
└── package.json          # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Success**: Green (#10B981)
- **Text**: Gray scale (#1F2937 to #6B7280)
- **Background**: White (#FFFFFF)

### Typography
- **Font**: Inter
- **Weights**: 400 (regular), 500 (medium), 600 (semibold)

### Components
- Clean, minimal design
- Subtle shadows and borders
- Consistent spacing and typography
- Accessible focus states

## 🔧 Customization

### Adding New Features
1. Create API routes in `src/app/api/`
2. Add components in `src/components/`
3. Update main page in `src/app/page.tsx`

### Styling Changes
- Modify `tailwind.config.ts` for design tokens
- Update `src/app/globals.css` for global styles
- Use Tailwind classes in components

## 📈 Performance

- **Serverless Functions**: Auto-scaling backend
- **Edge Runtime**: Global CDN distribution
- **Optimized Assets**: Automatic image and code optimization
- **Streaming**: Real-time AI processing updates

## 🔒 Security

- **API Key Protection**: Server-side only
- **Input Validation**: All user inputs sanitized
- **CORS Configuration**: Secure cross-origin requests
- **Rate Limiting**: Built-in Vercel protection

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
npm run build
# Check for TypeScript errors
```

**API Failures**
- Verify OpenAI API key is correct
- Check API usage limits
- Review Vercel function logs

**Video Processing Issues**
- Ensure video files are under 500MB
- Check YouTube URL format
- Verify network connectivity

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/scrolla/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/scrolla/discussions)
- **Email**: support@scrolla.ai

---

**Built with ❤️ using Next.js, OpenAI, and Vercel**

