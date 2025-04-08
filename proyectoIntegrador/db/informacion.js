const informacion = {
    usuarios: {
        email: "pepeluis1@gmail.com",
        usuario: "pepeluis1",
        password: "pepeluis1",
        fechaNacimiento: "10/01/2006",
        documento: 11111111,
        fotoPerfil: "fotoPerfil.png"   
    },
    productos: [
        {
            id: 1,
            nombre: "Ferrari",
            imagen: "ferrari.jpg",
            precio: 950000000,
            descripcion: "Auto Ferrari"

        },
        {
            id: 2,
            nombre: "mclaren",
            imagen: "mclaren.jpg",
            precio: 990000000,
            descripcion: "Auto mclaren"

        },
        {
            id: 3,
            nombre: "mercedes",
            imagen: "mercedes.jpg",
            precio: 870000000,
            descripcion: "Auto mercedes"

        },
        {
            id: 4,
            nombre: "Red Bull",
            imagen: "red-bull.jpg",
            precio: 860000000,
            descripcion: "Auto Red Bull"

        },
        {
            id: 5,
            nombre: "Haas",
            imagen: "haas.jpg",
            precio: 50000000,
            descripcion: "Auto Haas"

        },
        {
            id: 6,
            nombre: "Aston Martin",
            imagen: "aston-martin.jpg",
            precio: 820000000,
            descripcion: "Auto Aston Martin"

        },
        {
            id: 7,
            nombre: "Kick Sauber",
            imagen: "kick-sauber.jpg",
            precio: 70000000,
            descripcion: "Auto Kick Sauber"

        },
        {
            id: 8,
            nombre: "Racing Bulls",
            imagen: "racing-bulls.jpg",
            precio: 840000000,
            descripcion: "Auto Racing Bulls"

        },
        {
            id: 9,
            nombre: "Alpine",
            imagen: "alpine.jpg",
            precio: 830000000,
            descripcion: "Auto Alpine"


        },
        {
            id: 10,
            nombre: "Williams",
            imagen: "williams.jpg",
            precio: 790000000,
            descripcion: "Auto williams",
            comentarios: [
                {
                    nombreUsuario: "brian123",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "Me encanta este modelo, siempre quise uno."
                },
                {
                    nombreUsuario: "tati123",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "No es de mi estilo, pero tiene buen diseño."
                }
            ]
            
        }
    ],
        
        comentarios: [
                {
                    nombreUsuario: "brian123",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "Me encanta este modelo, siempre quise uno."
                },
                {
                    nombreUsuario: "tati123",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "No es de mi estilo, pero tiene buen diseño."
                },
                {
                    nombreUsuario: "ana123",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "¡Se ve espectacular! ¿Qué año es?"
                },
                {
                    nombreUsuario: "nicky87",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "No me convence el color, pero seguro es rápido."
                },
                {
                    nombreUsuario: "marco22",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "Lo vi en la calle y suena increíble."
                },
                {
                    nombreUsuario: "luli99",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "Mi hermano tenía uno igual, nostalgia pura."
                },
                {
                    nombreUsuario: "pepe77",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "Muy buen auto, pero seguro es carísimo."
                },
                {
                    nombreUsuario: "sofia_love",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "Se ve muy elegante, me gusta el diseño."
                },
                {
                    nombreUsuario: "dani_pro",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "¿Alguien sabe qué motor tiene?"
                },
                {
                    nombreUsuario: "fercho",
                    fotoUsuario: "/images/users/default-image.png",
                    comentario: "Yo tuve uno similar y era una joya."
                }
            ] ,

    // esto es para mas adelante search, no se usa en esta entrega
    filtrarPorSearch: function(busqueda){
        let listaBusqueda=[]
        for (let index = 0; index < this.productos.length; index++) {
            const element = this.productos[index];

            if (toLowerCase(busqueda) in toLowerCase(element.nombre)) {
                listaBusqueda.push(element)
                
            }
        return listaBusqueda
            
        }},


    /////esto es para detalle
    filtrarId: function (id) {
        if(this.productos[0].id==id){
            return this.productos[0]
        }
    }
    }
    

module.exports = informacion;

