module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Comment'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        productId:{
            type: dataTypes.INTEGER,
        },
        userId:{
            type: dataTypes.INTEGER,
        },
        textoComentario:{
            type: dataTypes.STRING,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },
    
    }

    let config = {
        tableName: 'comments', 
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const Comment = sequelize.define(alias, cols, config);

   return Comment;
}