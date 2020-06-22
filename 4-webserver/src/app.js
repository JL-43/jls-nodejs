const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public'); 
app.use(express.static(publicDirectoryPath));

app.get('/help', (req, res) => {
    res.send([{
        name: 'JL',
        age: 23
    }]);
});

app.get('/about', (req, res) => {
    res.send('<h1>This is the about page</h1>');
});

app.get('/weather', (req, res) => {
    res.send([{
        location: 'Manila',
        forecast: 'Party Cloudy'
    }]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});