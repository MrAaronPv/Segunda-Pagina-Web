-- Ejecutar en MySql estando activo en xamp
-- Crear DB 
DROP DATABASE IF EXISTS  coffe_time;
CREATE DATABASE coffe_time;
USE coffe_time;

-- Creación de Tablas
-- TABLA CLIENTES
DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- TABLA PRODUCTOS
DROP TABLE IF EXISTS productos;
CREATE TABLE productos(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL
);

-- Creacion de datos prueba clientes
INSERT INTO clientes (nombre, email)
VALUES
('Juan Carlos', 'juancarlos@gmail.com'),
('Martín Guzmán', 'martin.guzman@email.com'),
('Lucía Ramírez', 'lucia.ramirez@email.com'),
('Pedro Torres', 'pedro.torres@email.com');

-- Creacion de datos prueba productos
INSERT INTO productos (nombre, cantidad, precio)
VALUES
('Capuchino', 150, 20.00),
('Espresso', 100, 15.00),
('Latte', 120, 18.50),
('Americano', 80, 14.00),
('Moka', 90, 19.00);

