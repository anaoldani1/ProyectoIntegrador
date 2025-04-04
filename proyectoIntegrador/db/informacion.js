

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
            nombre: "Notebook HP",
            imagen: "notebook.jpg",
            precio: 120000,
            descripcion: "Notebook HP de última generación."

        },
        {
            id: 2,
            nombre: "Auriculares Sony",
            imagen: "auriculares.jpg",
            precio: 25000,
            descripcion: "Auriculares Sony con cancelación de ruido."
        },
        {
            id: 3,
            nombre: "Mouse Logitech",
            imagen: "mouse.jpg",
            precio: 8000,
            descripcion: "Mouse ergonómico para gaming."
        }
    ],
    }


module.exports = informacion;
