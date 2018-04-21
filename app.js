const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser());


app.set('view engine', 'pug');

const mainRoutes = require('./routes/index');
const projectRoutes = require('./routes/projects')

app.use(mainRoutes);
app.use('/projects', projectRoutes)


app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(500).send(err);

});

app.listen(3000, () =>{
  console.log('the server is running')
});


