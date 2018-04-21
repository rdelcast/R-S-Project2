const db = require('../config/connection');

function getAllProjects() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM projects`);
  return queryPromise;
}

function getOneHouse(id) {
  const queryPromise = db.one(`
    SELECT * FROM projects
    WHERE id = $1`, id);
  return queryPromise;
}

module.exports = {
  getAllHouses,
  getOneHouse,
  getStudentHouse
}
