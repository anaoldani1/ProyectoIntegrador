module.exports=function(sequelize,dataTypes) {
    let alias = "Comment";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        productosId: {
            type: dataTypes.INTEGER
        },
        usuariosId: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    };

    const Comment = sequelize.define(alias, cols, config);
    Comment.associate = function(models){
        Comment.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "usuariosId"
        })
        Comment.belongsTo(models.Product, {
            as: "productos",
            foreignKey: "productosId"
        })
    };
    return Comment;
}