CREATE DATABASE prueba;
USE prueba;
CREATE TABLE prueba (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    servicios VARCHAR(100) NOT NULL,
    mensaje TEXT NOT NULL
);
