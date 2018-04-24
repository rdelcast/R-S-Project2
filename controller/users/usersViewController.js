function sendUsers(req, res) {
  console.log('I send successful responses');
  res.render('/index', {
    users: res.locals.user
  })
} 

function sendCreateUsers(req, res) {
  student = res.locals.newUser
  res.redirect('/projects');
}

module.exports = {
  sendCreateUsers,
}
