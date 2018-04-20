const express = require ('expresss');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('landing', { prompt: "who is burried in grant´s tumb?"});
});

router.get('/projects', (req, res) => {
   const name = req.cookies.username;
   if (name) {
    res.render('projects', {name});
   } else {
    res.redirect('login');
   }
});

router.get('/aboutus', (req, res) => {
  res.render('aboutus', { prompt: "who is burried in grant´s tumb?"});
});


router.get('/login', (req, res) => {
  res.render('login', { name: req.cookies.username });
});

router.post('/login', (req, res) => {
  res.cookie('username', req.body.username);
  console.dir(req.body);
  res.redirect('/projects');
});

router.post('/goodbye', (req,res) => {
  res.clearCookie('username');
  res.redirect('/');
})
