module.exports = function(sequelize, dataTypes) {
    let alias = "Product";
  
    let cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
      },
      imagen: {
        type:dataTypes.STRING
      },
      nombreProducto:{
        type: dataTypes.STRING
      },
      descripcion: {
        type:dataTypes.STRING
      },
      createdAt: {
        type:dataTypes.DATE
      },
      updatedAt: {
        type:dataTypes.DATE
      }, 
      deletedAt: {
        type: dataTypes.DATE
      },
      usuarioId: {
        type:dataTypes.INTEGER
      },
    };
  
    let config = {
      tableName: "productos",
      timestamps: true,
      underscored: false
    };
  
    const Product = sequelize.define(alias, cols, config);
  
    Product.associate = function(models) {
      Product.belongsTo(models.User, {
        as: "usuario",
        foreignKey: "usuarioId"
      });
      
      Product.hasMany(models.Comment, {
        as: "comentarios",
        foreignKey: "productosId"
      });
    };

    
  
    return Product;
  };
  