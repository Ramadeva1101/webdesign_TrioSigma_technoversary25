const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Handle clean URLs - rewrite to .html
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/journey', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'journey.html'));
});

app.get('/recycle', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'recycle.html'));
});

app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'data.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Redirect .html to clean URLs
app.get('/about.html', (req, res) => {
    res.redirect(301, '/about');
});

app.get('/journey.html', (req, res) => {
    res.redirect(301, '/journey');
});

app.get('/recycle.html', (req, res) => {
    res.redirect(301, '/recycle');
});

app.get('/data.html', (req, res) => {
    res.redirect(301, '/data');
});

app.get('/contact.html', (req, res) => {
    res.redirect(301, '/contact');
});

app.get('/index.html', (req, res) => {
    res.redirect(301, '/');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${path.join(__dirname, 'public')}`);
});

