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
            imagen: "images/products/ferrari.jpg",
            precio: 950000000,
            descripcion: "Auto Ferrari"

        },
        {
            id: 2,
            nombre: "mclaren",
            imagen: "images/products/mclaren.jpg",
            precio: 990000000,
            descripcion: "Auto mclaren"

        },
        {
            id: 3,
            nombre: "mercedes",
            imagen: "images/products/mercedes.jpg",
            precio: 870000000,
            descripcion: "Auto mercedes"

        },
        {
            id: 4,
            nombre: "Red Bull",
            imagen: "images/products/red-bull.jpg",
            precio: 860000000,
            descripcion: "Auto Red Bull"

        },
        {
            id: 5,
            nombre: "Haas",
            imagen: "images/products/haas.jpg",
            precio: 50000000,
            descripcion: "Auto Haas"

        },
        {
            id: 6,
            nombre: "Aston Martin",
            imagen: "images/products/aston-martin.jpg",
            precio: 820000000,
            descripcion: "Aston Martin"

        },
        {
            id: 7,
            nombre: "Kick Sauber",
            imagen: "images/products/kick-sauber.jpg",
            precio: 70000000,
            descripcion: "Kick Sauber"

        },
        {
            id: 8,
            nombre: "Racing Bulls",
            imagen: "images/products/racing-bulls.jpg",
            precio: 840000000,
            descripcion: "Racing Bulls"

        },
        {
            id: 9,
            nombre: "Alpine",
            imagen: "images/products/alpine.jpg",
            precio: 830000000,
            descripcion: "Alpine"


        },
        {
            id: 10,
            nombre: "Williams",
            imagen: "images/products/wiliams.jpg",
            precio: 790000000,
            descripcion: "Williams"

            
        },
        comentarios= [
                {
                    nombreUsuario: "brian123",
                    fotoUsuario: "brian.png",
                    comentario: "Me encanta este modelo, siempre quise uno."
                },
                {
                    nombreUsuario: "tati123",
                    fotoUsuario: "tati.png",
                    comentario: "No es de mi estilo, pero tiene buen diseño."
                },
                {
                    nombreUsuario: "ana123",
                    fotoUsuario: "ana.png",
                    comentario: "¡Se ve espectacular! ¿Qué año es?"
                },
                {
                    nombreUsuario: "carlos87",
                    fotoUsuario: "carlos.png",
                    comentario: "No me convence el color, pero seguro es rápido."
                },
                {
                    nombreUsuario: "marco22",
                    fotoUsuario: "marco.png",
                    comentario: "Lo vi en la calle y suena increíble."
                },
                {
                    nombreUsuario: "luli99",
                    fotoUsuario: "luli.png",
                    comentario: "Mi hermano tenía uno igual, nostalgia pura."
                },
                {
                    nombreUsuario: "pepe77",
                    fotoUsuario: "pepe.png",
                    comentario: "Muy buen auto, pero seguro es carísimo."
                },
                {
                    nombreUsuario: "sofia_love",
                    fotoUsuario: "sofia.png",
                    comentario: "Se ve muy elegante, me gusta el diseño."
                },
                {
                    nombreUsuario: "dani_pro",
                    fotoUsuario: "dani.png",
                    comentario: "¿Alguien sabe qué motor tiene?"
                },
                {
                    nombreUsuario: "fercho",
                    fotoUsuario: "fercho.png",
                    comentario: "Yo tuve uno similar y era una joya."
                }
            ] 
    ],
    
    filtrarPorSearch: function(busqueda){
        let listaBusqueda=[]
        for (let index = 0; index < this.productos.length; index++) {
            const element = this.productos[index];

            if (toLowerCase(busqueda) in toLowerCase(element.nombre)) {
                listaBusqueda.push(element)
                
            }
        return listaBusqueda
            
        }},


    /////esto es para detalle--> punto 10, detalle estatico
    filtrarId: function (id) {
        if(informacion.productos[0].id==id){
            return informacion.productos[0]
        }
    }
    }
    

module.exports = informacion;
