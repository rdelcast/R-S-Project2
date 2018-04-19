DROP TABLE IF EXISTS projects;


CREATE TABLE users (
  projectsId SERIAL PRIMARY KEY,
  Name VARCHAR(255),
  goal INT,
  current INT;

);
