# Vibe-Based Playlist Generator

Get the perfect playlist name and song recommendations for any moment.

## Product Brief

The Vibe-Based Playlist Generator helps solve that annoying moment when you know the vibe you want but can't figure out what to actually listen to. Instead of scrolling endlessly through Spotify or Apple Music, you just tell it your mood, what you're doing, and add the time of day and a genre you're feeling. The app then generates a creative playlist name and gives you 6-10 songs that actually match what you're looking for.

This works because it understands music is more than just genre and artists - it's about matching or changing how you feel in that moment. My target user is anyone who loves listening music throughout their but gets decision fatigue trying to pick the right songs. Think students studying, people at the gym, or just anyone who wants their music to match their energy. The creative playlist names make it shareable too, and you get actual song recommendations you can use right away. Finally, its easy to find new artists this way - and users might just find their next favorite song!

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

Claude was great for assisting me throughout this project. I was able to input all my desired ideas and suggestions, and it gave me downloadable files ready for Github upload. When I was having trouble with my API key, it suggested I go to Vercel and connect my repository through there. I honestly had no Ai troubles, my only difficulty came from the API key. Professor Bierman had to create one for me, and I was then able to see the Vibe-Based Playlist Generator in action. 

To improve this current version, I would likely try to figure out how to connect the generated playlist to peoples Spotify accounts. This would make it much easier for them to copy it over, rather than having to search for the songs on Spotify after the fact. I would likely need a Spotofy-specific API inetegration for this to work, but I think it would streamline the playlist-making process even further. 

---

**Live Demo:** https://mini-project-one-topaz.vercel.app/

**GitHub Repository:** https://github.com/gianna7803/mini-project-one
