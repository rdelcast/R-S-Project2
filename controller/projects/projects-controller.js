const projectsDb = require('../../models/projects');

function getAll(req, res, next) {
  console.log('About to query the DB');
  projectsDb.getAllProjects()
    .then(data => {
      console.log('Queried DB and got' + data.length + 'results');
      res.locals.projects = data;
      next();
    })
    .catch(err=> {
      next(err);
    });
}

function edit(req, res) {
  projectsDb.getOneProject(req.params.id)
    .then(data=> {
      res.locals.projects = data;
      next();
    })
    .catch(err=> {
      err:err.message
    })
}

function update(req, res, next) {
  req.body.id = req.params.id;
  projectsDb.updateProjects(req.body)
    .then(data => {
      res.redirect(`/projects/${req.body.id}`)
    })
    .catch(err=> {
      err:err
    })
}

function getOne(req, res, next) {
  projectsDb.getOneProject(req.params.id)
    .then(data=> {
      res.locals.Project = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

   module.exports = {
  getAll,
  update,
  edit,
  getOne,

}
