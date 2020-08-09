const path = require('path');
const express = require('express');

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public'); 
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views locations
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'JL'
    });
});

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About',
        name: 'JL'
    });
});

app.get('/help', (req, res)=>{
    res.render('help', {
        msg: 'This is a really long help message wow',
    });
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