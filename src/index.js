const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { useralbum} = require('./utils/utils');

const publicDir = path.join(__dirname, '../public');
const viewsDir = path.join(__dirname, '../templates/views');
const partialsDir = path.join(__dirname, '../templates/partials');

const app = express();

app.use(express.static(publicDir));

app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialsDir);

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Weather App',
        name: 'Xhoi',
        surname: 'Sadaj',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Xhoi',
        surname: 'Sadaj'
    });
});

app.get('/about/*' , (req, res) => {
    res.render('about', {
        name: 'Xhoi',
        surname: 'Sadaj'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        name: 'Xhoi',
        surname: 'Sadaj'
    });
});

app.get('/weather', ((req, res) => {
    if (!req.query.userId) {

        return res.send({ error: req.query });
    }

    useralbum(req.query.userId, (error, data, message) => {
        if (error) {
            return res.send({error: error, message: message});

        }else{
            return  res.send({album: data})
        }


    });
}));

app.get('*' , (req, res) => {
    res.send('Not found');
});

const port=process.env.PORT||3000;

app.listen(port, () => {
    console.log('Server running at port 3000');
});
