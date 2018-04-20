const express = require ('expresss');
const router = express.router();

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
