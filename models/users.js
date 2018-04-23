const db = require('../config/connection');
const express = require ('express');



function createUser(users) {
  const query = db.one(`
    INSERT INTO users
    (name, lname, email,)
    VALUES ($/name/, $/lname/, $/email/,)
    RETURNING *`,
    student);
  return query;
}

function updateUsers(users) {
  const query = db.one(`
    UPDATE users
    SET name = $/name/, lname = $/lname/, email = $/email/,
    WHERE id = $/id/
    RETURNING *`,
    users );
  return query;
}

function deleteUsers(id) {
  const query = db.none(`
    DELETE FROM users
    WHERE id = $1`, id);
  return query;
}

module.exports = {
  createUser,
  updateUsers,
  deleteUsers,
}
