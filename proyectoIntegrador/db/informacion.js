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
            imagen: "",
            precio: 1200000000,
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
            imagen: "",
            precio: 870000000,
            descripcion: "Auto mercedes"

        },
        {
            id: 4,
            nombre: "Red Bull Racing",
            imagen: "",
            precio: 870000000,
            descripcion: "Auto Red Bull Racing"

        },
        {
            id: 5,
            nombre: "Red Bull Racing",
            imagen: "",
            precio: 870000000,
            descripcion: "Auto Red Bull Racing"

        },
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
