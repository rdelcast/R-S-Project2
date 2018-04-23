function sendUsers(req, res) {
  console.log('I send successful responses');
  res.render('students/index', {
    students: res.locals.user
  })
} 

function sendCreateUsers(req, res) {
  student = res.locals.newUser
  res.redirect(`user/${user.id}`);
}

module.exports = {
  sendCreateUsers,
}
