const db = require('../config/connection');

function getAllProjects() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM projects`);
  return queryPromise;
}
function updateProjects(projects) {
  const query = db.one(`
    UPDATE projects
    SET name = $/name/, lname = $/lname/, image = $/image/,
    house_id = $/house_id/
    WHERE id = $/id/
    RETURNING *`,
    project );
  return query;
}

function getOneProject(id) {
  const queryPromise = db.one(`
    SELECT * FROM projects
    WHERE id = $1`, id);
  return queryPromise;
}
module.exports = {
  getAllProjects,
  updateProjects,
  getOneProject
  }
