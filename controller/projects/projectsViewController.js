function sendProjects(req, res) {
  console.log('I send successful responses');
  res.render('../views/projects', {
    projects: res.locals.projects
  })
}

function sendOneProject(req, res) {
  res.render('views/edit', {
    project: res.locals.project
  })
}

function editProjects(req, res) {
  project = res.locals.project;
  res.render(`students/edit`, {
    student: res.locals.student
  })
}
module.exports = {
  sendProjects,
  sendOneProject,
  editProjects
}

