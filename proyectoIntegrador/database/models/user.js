module.exports = function(sequelize, dataTypes) {
    let alias = "User"; //defino el nombre del modelo 

    let cols = {  //defino las columnas de la tabla usuarios 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        }, 
        contrasenia:{
            type:  dataTypes.STRING
        },
        fechaNac: {
            type:dataTypes.DATE
        }, 
        documento: {
            type: dataTypes.INTEGER
        }, 
        foto: {
            type:dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        }, 
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
    };

    let config = {   // le doy configuraciones extra 
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };

    let User = sequelize.define(alias, cols, config);  //crea el modelo User con toda la información que defini

    User.associate = function(models) {   //defino las relaciones de user con los otros mdoelos 
        User.hasMany(models.Product, {   //un usuario teien muchos productos 
            as: 'productos',
            foreignKey: 'usuarioId'
        });

        User.hasMany(models.Comment, {
            as: 'comentarios',
            foreignKey: 'usuariosId'
        });
    };

    return User;
};
