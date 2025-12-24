const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from current directory
app.use(express.static(__dirname));

// Route for main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🎄 Magic Christmas server is running on http://localhost:${PORT}`);
    console.log(`✨ Open your browser and visit the URL above`);
});
