-- /database/init.sql

CREATE DATABASE IF NOT EXISTS finanzas;

USE finanzas;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
