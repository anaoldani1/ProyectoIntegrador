module.exports=function (sequelize,dataTypes) {
    let alias = "User"; 
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        email: {
            type: dataTypes.string
        },
        contrasenia:{
            type: dataTypes.string
        },
        fechaNac:{
            type: dataTypes.DATE
        },
        documento:{
            type: dataTypes.DECIMAL
        },
        foto:{
            type:dataTypes.string
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        deleted_at:{
            type:dataTypes.DATE
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        //underscored: true, //No es necesario si timestamps es false.
    }
    let User = sequelize.define(alias, cols, config);
    User.associate= function(models){
        User.hasMany(models.Product, {
            as:'products',
            foreignKey: 'user_id'
        }); 

        User.hasMany(models.Comment,{
            as:'comments', 
            foreignKey:'user_id'
        });
    };
    return User; 
}