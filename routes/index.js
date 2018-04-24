const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('landing');
});

router.get('/aboutus', (req, res) => {
  res.render('aboutus');
});

router.get('/postProject', (req, res) => {
  res.render('postProject');
});

router.get('/login', (req, res) => {
  res.render('login', { name: req.cookies.username });
});

router.get('/signup', (req, res) => {
  res.render('signup', { name: req.cookies.username });
});

router.get('/projects', (req, res) => {
  res.render('projects');
});

router.get('/edit', (req, res) => {
  res.render('edit');
});

router.post('/goodbye', (req,res) => {
  res.clearCookie('username');
  res.redirect('/');
})

module.exports = router;
