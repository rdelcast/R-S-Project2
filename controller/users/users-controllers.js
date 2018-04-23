const studentsDb = require('../../models/users');

function create(req, res, next) {
  studentsDb.createUsers(req.body)
    .then(data => {
      res.locals.newUser = data;
      console.log('controller works')

      next();
    })
    .catch(err=> {
      next(err);
      console.log('hello user controller')
    })
}

function update(req, res, next) {
  req.body.id = req.params.id;
  studentsDb.updateUsers(req.body)
    .then(data => {
      res.redirect(`/users/${req.body.id}`)
    })
    .catch(err=> {
      next(err);
    })
}

function getAll(req, res, next) {
  console.log('About to query the DB');
  usersDb.getAllUsers()
    .then(data => {
      console.log('Queried DB and got' + data.length + 'results');
      res.locals.users = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

module.exports = {
  getAll,
  create,
}
