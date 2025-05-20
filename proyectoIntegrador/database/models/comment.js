module.exports=function (sequalize,dataTypes) {
    let alias = "Comment"

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        productosid: {
            type: dataTypes.INTEGER
        },
        usuariosid: {
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
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    };

    const Comment = sequelize.define(alias, cols, config);
    Comment.associate = function(models){
        Comment.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "id"
        })
        Comment.belongsTo(models.Product, {
            as: "productos",
            foreignKey: "id"
        })
    }
    return Comment
}