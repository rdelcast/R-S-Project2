const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('landing', { prompt: "who is burried in grant´s tumb?"});
});



router.get('/aboutus', (req, res) => {
  res.render('aboutus', { prompt: "who is burried in grant´s tumb?"});
});


router.get('/login', (req, res) => {
  res.render('login', { name: req.cookies.username });
});



router.post('/goodbye', (req,res) => {
  res.clearCookie('username');
  res.redirect('/');
})

module.exports = router;
