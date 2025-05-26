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
    "fotoPerfil.jpg",
    null,
    null,
    null
),
(
	DEFAULT,
    "Ana.Oldani334@digitalhouse.com",
    "56789",
    "1999-10-26",
    42237968,
    "fotoPerfil.jpg",
    null,
    null,
    null
),
(
	DEFAULT,
    "Tatii00@digitalhouse.com",
    "12345",
    "2007-05-12",
    24662805,
    "fotoPerfil.jpg",
    null,
    null,
    null),
(
	DEFAULT,
    "Nicole.deleone44@digitalhouse.com",
    "12345",
    "1990-10-03",
    24662925,
    "fotoPerfil.jpg",
    null,
    null,
    null),
(
	DEFAULT,
    "JuanPablo236@digitalhouse.com",
    "12345",
    "1890-12-24",
    12334567,
    "fotoPerfil.jpg",
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
"ferrari.jpg",
"Auto Ferrari",
"Exterior Blanco",
null,
null,
null,
1
),
(
DEFAULT,
"mclaren.jpg",
"Auto Mclaren",
"Exterior negro",
null,
null,
null,
1
),
(
DEFAULT,
"mercedes.jpg",
"Auto mercedes",
"Exterior brillante",
null,
null,
null,
2
),
(
DEFAULT,
"red-bull.jpg",
"Auto Red Bull",
"Exterior azul",
null,
null,
null,
2
),
(
DEFAULT,
"haas.jpg",
"Auto Haas",
"Exterior gris",
null,
null,
null,
3
),
(
DEFAULT,
"aston-martin.jpg",
"Auto Aston Martin",
"Exterior opaco",
null,
null,
null,
3
),
(
DEFAULT,
"kick-sauber.jpg",
"Auto kick-sauber",
"Exterior opaco",
null,
null,
null,
4
),
(
DEFAULT,
"racing-bulls.jpg",
"Auto racing-bulls",
"Exterior brillante",
null,
null,
null,
4
),
(
DEFAULT,
"alpine.jpg",
"Auto Alpine",
"Exterior opaco",
null,
null,
null,
5
),
(
DEFAULT,
"williams.jpg",
"Auto williams",
"Exterior azul",
null,
null,
null,
5
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
productosId INT UNSIGNED,
usuariosId INT UNSIGNED,
comentario TEXT,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP, 
FOREIGN KEY (productosId) REFERENCES productos(id),
FOREIGN KEY (usuariosId) REFERENCES usuarios(id)
);

INSERT INTO comentarios VALUES (
DEFAULT, 
1, 
1, 
"¡Increíble!", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
1, 
2, 
"Me encanta el diseño.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
1, 
3, 
"¿Es nuevo o usado?", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
2, 
2, 
"Muy buen estado.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
2, 
3, 
"El color le queda excelente.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
2, 
4, 
"¿Se puede financiar?", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
3,
1, 
"Me gusta este modelo.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
3, 
4, 
"Siempre quise uno.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
3, 
5, 
"¿Cuál es el kilometraje?", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
4, 
2, 
"Muy elegante.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
4, 
3, 
"El color le da un estilo clásico.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
4, 
5, 
"¿Cuánto cuesta?", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
5, 
1, 
"el color es el nuevo negro.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
5, 
3, 
"Se ve único.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
5, 
4, 
"Interesado. ¿Dónde lo puedo ver?", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
6, 
2, 
"Muy buen precio.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
6, 
4, 
"Se ve cómodo para manejar.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
6, 
5, 
"Ideal para la ciudad.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
7, 
1, 
"ese color, me encanta.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
7, 
3, 
"esa marca nunca falla.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
7, 
5, 
"Lo quiero para mí.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
8,
2, 
"¡Clásico!", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
8, 
4, 
"Ese tono es hermoso.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
8, 
1, 
"¿Tiene algún daño?", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
9, 
3, 
"Siempre soñé con uno.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
9,
4, 
"Violeta, wow.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
9, 
2, 
"¿Lo tenés disponible todavía?", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
10, 
5, 
"Esa marca es otra liga.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
10, 
1, 
"Perfecto para viajar.", 
NULL, 
NULL, 
NULL
),
(
DEFAULT, 
10, 
2, 
"¿Cuál es el consumo?", 
NULL, 
NULL, 
NULL
);







