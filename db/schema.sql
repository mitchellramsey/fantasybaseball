### Schema

CREATE DATABASE players_db;
USE players_db;

CREATE TABLE players (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    position VARCHAR(5) NOT NULL,
    team VARCHAR(5) NOT NULL,
    drafted BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);