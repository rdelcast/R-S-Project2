const express = require ('express');
const router = express.Router();
const {data} = require('../database/seed.sql')

router.get('/', (req, res) => {
   const name = req.cookies.username;
   if (name) {
    res.render('projects', {name});
   } else {
    res.redirect('login');
   }
});

router.post('/login', (req, res) => {
  res.cookie('username', req.body.username);
  console.dir(req.body);
  res.redirect('/projects');
});

module.exports = router;
