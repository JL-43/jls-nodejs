const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Welcome to the homepage');
});

app.get('/help', (req, res) => {
    res.send('This is the help page');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.get('/weather', (req, res) => {
    res.send('This is the weather page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});