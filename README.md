# Vibe-Based Playlist Generator

Get the perfect playlist name and song recommendations for any moment.

## Product Brief

The Vibe-Based Playlist Generator solves the common problem of not knowing what music to listen to based on your current mood and activity. Instead of endlessly scrolling through Spotify trying to find the right vibe, users simply input how they're feeling, what they're doing, and optional preferences like time of day or genre. The tool uses AI to generate a creative, personality-filled playlist name along with 6-10 perfectly curated song recommendations that match the specified mood.

This approach is effective because it combines the emotional intelligence of understanding mood with practical music curation. The target user is anyone who loves music but experiences decision fatigue when choosing what to listen to—students studying, people working out, or anyone wanting their music to match their current energy. The creative playlist names make the experience fun and shareable, while the song recommendations provide immediate value.

## How to Use

1. **Select your mood** from the dropdown (nostalgic, hype, chill, etc.)
2. **Choose your activity** (studying, working out, driving, etc.)
3. **Select time of day** for more specific vibes
4. **Add genre preferences** in the text field
5. Click **"Generate Playlist"** and wait for your custom playlist
6. Review your playlist name, description, and song recommendations
7. Click **"Regenerate"** if you want a different result with the same inputs
8. Click **"Copy Song List"** to copy the playlist to your clipboard for easy adding to Spotify

## Tech Stack

**AI API:** Anthropic Claude API (Claude Sonnet 4)
- Chosen for its strong creative writing capabilities and ability to understand nuanced prompts about mood and vibes
- Provides consistent JSON-formatted responses that are easy to parse
- Accessed via Vercel serverless function to avoid CORS issues and keep API key secure

**AI Coding Assistant:** Claude (Anthropic)
- Used to generate initial HTML structure, CSS styling, and JavaScript functionality
- Helped with API integration, error handling, and deployment troubleshooting

**Technologies:**
- HTML5
- CSS3 (responsive design with mobile-first approach)
- Vanilla JavaScript (no frameworks)
- Anthropic Claude API (via Vercel serverless function)

**Deployment:** Vercel
- Serverless function handles API calls to avoid CORS issues
- Environment variables keep API key secure
- Easy deployment from GitHub repository

## Reflection

[Write your reflection here - 100-150 words about what worked well with AI assistance, what was challenging, and what you'd improve in version 2.0]

---

## Setup Instructions

### For Local Development:
1. Clone this repository
2. Get an API key from [Anthropic](https://console.anthropic.com/)
3. Create a `.env` file in the root directory:
   ```
   ANTHROPIC_API_KEY=your-api-key-here
   ```
4. Run a local server: `python3 -m http.server 8000`
5. Open `http://localhost:8000` in your browser

### For Vercel Deployment:
1. Push this repository to GitHub
2. Sign up at [Vercel](https://vercel.com) and connect your GitHub
3. Import your repository
4. Add environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add: `ANTHROPIC_API_KEY` = `your-api-key-here`
5. Deploy!

⚠️ **Important:** Never commit your actual API key to GitHub! Use environment variables.

---

**Live Demo:** https://mini-project-one-topaz.vercel.app/

**GitHub Repository:** https://github.com/gianna7803/mini-project-one
