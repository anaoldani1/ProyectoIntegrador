module.export=function (sequalize,dataTypes) {
    let alias = "Product"
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        imagen: {
            type : dataTypes.STRING
        },
        nombreProducto: {
            type : dataTypes.STRING
        },
        descripcion: {
            type : dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
        usuarioId: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "products",
        timestamps: false,
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.User,{
            as:"User",
            foreignKey: "usuarioId"
        })
    }


}