const projectsRouter = require('express').Router();
const projectsController = require('../controller/projects/projects-controller');
const projectsViewController = require('../controller/projects/projectsViewController');

const projectsDb = require('../models/projects')

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}


projectsRouter.route('/projects')
  .get(projectsController.getAll, projectsViewController.sendProjects, sendError)

projectsRouter.route('/:id')
  .get(projectsController.getOne, projectsViewController.sendOneProject)
  .put(projectsController.update)

module.exports = projectsRouter;

