\c rands

DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR (256),
  img_url VARCHAR (256),
  goal INTEGER,
  current INTEGER,
  description VARCHAR (256)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR (256),
  lname VARCHAR (256),
  email VARCHAR (256),
  project_id INTEGER REFERENCES projects(id)
);

CREATE TABLE usersprojects (
  userProject SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  project_id INTEGER REFERENCES projects(id)
);

INSERT INTO projects
  (name, img_url, goal, current, description)
VALUES
 ('Kanali', null, 6000000, 40000000, 'A residential building in Puerto Cancun.'),
 ('Fuentes De Las Lomas', null, 20000000, 18000000, 'A blend of residential and commercial in Mexico City.');

INSERT INTO users
(name,lname,email)
 VALUES
 ('Ricardo', 'Del Castillo', 'rchbussines@gmail.com'),
 ('Santiago', 'Cordero', 'corderog@gmail.com');

