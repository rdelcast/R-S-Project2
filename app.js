const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}))

app.set('view engine', 'pug');


app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.listen(3000, () => {
  console.log('The best project is running, heck ya!!')
});
