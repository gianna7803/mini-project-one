// API key for Anthropic
const API_KEY = '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';

// Store the last input for regeneration
let lastInput = null;

// DOM elements
const form = document.getElementById('playlistForm');
const loadingState = document.getElementById('loadingState');
const results = document.getElementById('results');
const errorState = document.getElementById('errorState');
const generateBtn = document.getElementById('generateBtn');
const regenerateBtn = document.getElementById('regenerateBtn');
const copyBtn = document.getElementById('copyBtn');

// Form inputs
const moodInput = document.getElementById('mood');
const activityInput = document.getElementById('activity');
const timeOfDayInput = document.getElementById('timeOfDay');
const genreInput = document.getElementById('genre');

// Result elements
const playlistName = document.getElementById('playlistName');
const playlistDescription = document.getElementById('playlistDescription');
const songsList = document.getElementById('songsList');

// Form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await generatePlaylist();
});

// Regenerate button
regenerateBtn.addEventListener('click', async () => {
    if (lastInput) {
        await generatePlaylist(lastInput);
    }
});

// Copy button
copyBtn.addEventListener('click', () => {
    copyToClipboard();
});

// Start Over button
const startOverBtn = document.getElementById('startOverBtn');
startOverBtn.addEventListener('click', () => {
    // Reset form
    form.reset();
    
    // Hide results
    results.classList.add('hidden');
    
    // Show form again
    form.style.display = 'block';
    
    // Clear last input
    lastInput = null;
});

async function generatePlaylist(inputs = null) {
    // Get form values or use stored inputs
    const mood = inputs ? inputs.mood : moodInput.value;
    const activity = inputs ? inputs.activity : activityInput.value;
    const timeOfDay = inputs ? inputs.timeOfDay : timeOfDayInput.value;
    const genre = inputs ? inputs.genre : genreInput.value;

    // Store inputs for regeneration
    lastInput = { mood, activity, timeOfDay, genre };

    // Show loading state
    form.style.display = 'none';
    results.classList.add('hidden');
    errorState.classList.add('hidden');
    loadingState.classList.remove('hidden');

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mood,
                activity,
                timeOfDay,
                genre
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `API Error: ${response.status}`);
        }

        const data = await response.json();
        const content = data.content;
        
        // Parse and display the result
        displayResult(content);

    } catch (error) {
        showError(error.message);
    }
}

function displayResult(content) {
    try {
        // Remove any markdown code blocks if present
        let cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        
        const data = JSON.parse(cleanContent);

        // Update the UI
        playlistName.textContent = data.name;
        playlistDescription.textContent = data.description;
        
        // Clear and populate songs list
        songsList.innerHTML = '';
        data.songs.forEach(song => {
            const li = document.createElement('li');
            li.textContent = song;
            songsList.appendChild(li);
        });

        // Show results
        loadingState.classList.add('hidden');
        results.classList.remove('hidden');
        
    } catch (error) {
        showError('Failed to parse response. Please try again.');
    }
}

function showError(message) {
    loadingState.classList.add('hidden');
    form.style.display = 'block';
    errorState.classList.remove('hidden');
    document.getElementById('errorMessage').textContent = `Error: ${message}`;
    
    // Hide error after 5 seconds
    setTimeout(() => {
        errorState.classList.add('hidden');
    }, 5000);
}

function copyToClipboard() {
    const name = playlistName.textContent;
    const description = playlistDescription.textContent;
    const songs = Array.from(songsList.children).map(li => li.textContent);
    
    const textToCopy = `${name}\n\n${description}\n\nSongs:\n${songs.map((song, i) => `${i + 1}. ${song}`).join('\n')}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied! ✓';
        copyBtn.style.background = '#4CAF50';
        copyBtn.style.color = 'white';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
            copyBtn.style.color = '';
        }, 2000);
    }).catch(err => {
        alert('Failed to copy to clipboard');
    });
}
