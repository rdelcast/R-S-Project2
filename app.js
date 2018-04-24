const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser());

app.use(express.static('public')); 

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const mainRoutes = require('./routes/index');
const userRoutes = require('./routes/usersRoutes');
const projectsRoutes = require('./routes/projectsRoutes');

app.use(projectsRoutes);
app.use(mainRoutes);
app.use('/landing',userRoutes);


app.use((err, req, res, next) => {
  res.locals.error = err;
  console.log(err)
  res.status(404).send(err);

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})


