const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser())

app.set('view engine', 'pug');


app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  res.cookie('username', req.body.username);
  console.dir(req.body);
  res.render('login',{name: req.body.username });
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.listen(3000, () => {
  console.log('The best project is running, heck ya!!')
});
