module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Product'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_id:{
            type: dataTypes.INTEGER,
        },
        wine_name:{
            type: dataTypes.STRING,
        },
        wine_type:{
            type: dataTypes.STRING,
        },
        wine_description:{
            type: dataTypes.STRING,
        },
        wine_variety:{
            type: dataTypes.STRING,
        },
        wine_year: {
            type: dataTypes.INTEGER,
        },
        wine_image: {
            type: dataTypes.STRING,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        }
    }

    let config = {
        tableName: 'products', 
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const Product = sequelize.define(alias, cols, config);

   return Product;
}