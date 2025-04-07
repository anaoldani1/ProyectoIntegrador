CREATE SCHEMA proyectoIntegrador;
USE proyectoIntegrador;

CREATE TABLE usuarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(250) NOT NULL UNIQUE,
    contrasenia VARCHAR(500) NOT NULL,
    fechaNac DATE,
    documento INT,
    foto VARCHAR(300),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios VALUES(
	DEFAULT,
    "luis.navas1@digitalhouse.com",
    "12345",
    "2005-12-15",
    47031883,
    "/fotoPerfil1.png",
    null,
    null,
    null
),
(
	DEFAULT,
    "luis.navas12@digitalhouse.com",
    "56789",
    "1999-10-26",
    42237968,
    "/foto.png",
    null,
    null,
    null
),
(
	DEFAULT,
    "luis.navas25@digitalhouse.com",
    "12345",
    "2007-05-12",
    24662805,
    "/foto.png",
    null,
    null,
    null),
(
	DEFAULT,
    "luis.navas45@digitalhouse.com",
    "12345",
    "1990-10-03",
    24662925,
    "/foto.png",
    null,
    null,
    null),
(
	DEFAULT,
    "luis.navas56@digitalhouse.com",
    "12345",
    "1890-12-24",
    12334567,
    "/foto.png",
    null,
    null,
    null)
