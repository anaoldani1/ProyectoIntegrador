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
            imagen: "default-image.png",
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
    filtrarPorId: function(busqueda){
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
