const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public'); 
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views locations
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'JL',
        footer: 'Created by JL'
    });
});

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About',
        name: 'JL',
        footer: 'Created by JL'
    });
});

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        msg: 'JL',
        footer: 'Created by JL'
    });
});

app.get('/weather', (req, res) => {
    res.send([{
        location: 'Manila',
        forecast: 'Party Cloudy'
    }]);
});

app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: 'Help',
        message: 'Help Article Not Found',
        footer: 'Created by JL'
    });
});

app.get('*', (req, res)=>{
    res.render('404', {
        title: '404',
        message: 'Page Not Found',
        footer: 'Created by JL'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});