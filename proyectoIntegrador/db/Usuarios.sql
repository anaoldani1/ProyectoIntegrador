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
    null);

CREATE TABLE productos(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    imagen VARCHAR (300),
    nombreProducto VARCHAR(250),
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    usuarioId INT UNSIGNED,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
    
);

INSERT INTO productos VALUES(
DEFAULT,
"/foto.png",
"Auto Ferrari",
"Exterior Blanco",
null,
null,
null,
1
),
(
DEFAULT,
"/foto.png",
"Auto Mclaren",
"Exterior negro",
null,
null,
null,
1
),
(
DEFAULT,
"/foto.png",
"Auto mustang",
"Exterior gris",
null,
null,
null,
2
),
(
DEFAULT,
"/foto.png",
"Auto BM",
"Exterior marron",
null,
null,
null,
2
),
(
DEFAULT,
"/foto.png",
"Auto Toyota",
"Exterior rosa",
null,
null,
null,
3
),
(
DEFAULT,
"/foto.png",
"Auto fiat",
"Exterior celeste",
null,
null,
null,
3
),
(
DEFAULT,
"/foto.png",
"Auto mercedes",
"Exterior rojo",
null,
null,
null,
4
),
(
DEFAULT,
"/foto.png",
"Auto alfa romeo",
"Exterior azul",
null,
null,
null,
4
),
(
DEFAULT,
"/foto.png",
"Auto audi",
"Exterior violeta",
null,
null,
null,
5
),
(
DEFAULT,
"/foto.png",
"Auto Land Rover",
"Exterior amarillo",
null,
null,
null,
5
);





