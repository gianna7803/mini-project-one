export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { mood, activity, timeOfDay, genre } = req.body;

    // Build the prompt
    let prompt = `Create a creative playlist for someone who is feeling ${mood} and is ${activity}.`;
    
    if (timeOfDay) {
        prompt += ` It's ${timeOfDay}.`;
    }
    
    if (genre) {
        prompt += ` They prefer ${genre} music.`;
    }

    prompt += `

Please respond ONLY with a JSON object in this exact format (no additional text, no markdown):
{
    "name": "Creative Playlist Name",
    "description": "1-2 sentence description of the vibe and when to use this playlist.",
    "songs": [
        "Song Title - Artist Name",
        "Song Title - Artist Name",
        "Song Title - Artist Name",
        "Song Title - Artist Name",
        "Song Title - Artist Name",
        "Song Title - Artist Name",
        "Song Title - Artist Name",
        "Song Title - Artist Name"
    ]
}

Make the playlist name creative and vibe-based (like "3am Existential Crisis Anthems" or "Confidence Walking to Get Coffee"). Include 6-10 songs that perfectly match the mood. The description should capture the vibe in a fun, relatable way.`;

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 1024,
                messages: [{
                    role: 'user',
                    content: prompt
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return res.status(response.status).json({ 
                error: errorData.error?.message || 'API request failed' 
            });
        }

        const data = await response.json();
        const content = data.content[0].text;

        // Return the response
        res.status(200).json({ content });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
}
