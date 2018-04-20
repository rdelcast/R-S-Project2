const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser());


app.set('view engine', 'pug');

app.use((req,res, next) => {
  console.log('world');
  next();
})

app.get('/', (req, res) => {
  res.render('landing', { prompt: "who is burried in grant´s tumb?"});
});

app.get('/projects', (req, res) => {
   const name = req.cookies.username;
   if (name) {
    res.render('projects', {name});
   } else {
    res.redirect('login');
   }
});

app.get('/aboutus', (req, res) => {
  res.render('aboutus', { prompt: "who is burried in grant´s tumb?"});
});


app.get('/login', (req, res) => {
  res.render('login', { name: req.cookies.username });
});

app.post('/login', (req, res) => {
  res.cookie('username', req.body.username);
  console.dir(req.body);
  res.redirect('/projects');
});

app.post('/goodbye', (req,res) => {
  res.clearCookie('username');
  res.redirect('/');
})

app.use((req,res,next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
  });

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () =>{
  console.log('the server is running')
});


