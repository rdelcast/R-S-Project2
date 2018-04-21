/c R&S_crud

DROP TABLE IF EXISTS houses CASCADE;
DROP TABLE IF EXISTS students CASCADE;

CREATE TABLE projects (
  projectsId SERIAL PRIMARY KEY,
  Name VARCHAR(255),
  img_url TEXT,
  goal INT,
  current INT;
  description TEXT;
);

CREATE TABLE users (
  userId SERIAL PRIMARY KEY,
  Name VARCHAR(255),
  lname VARCHAR(255),
  email VARCHAR(255);
  house_id INTEGER REFERENCES houses(id),
);

INSERT INTO projects
  (name, img_url, goal, current, description)
VALUES
 (Kanali, , 6000000, 40000000, A residential bulding in Puerto Cancun.),
 (Fuentes De Las Lomas, 20000000, 18000000, A blend of residential and comercial in Mexico City.),

INSERT INTO users
(name,lname,email)
 VALUES
 (Ricardo,Del Castillo,rchbussines@gmail.com)
 (Santiago, Cordero, corderog@gmail.com)

