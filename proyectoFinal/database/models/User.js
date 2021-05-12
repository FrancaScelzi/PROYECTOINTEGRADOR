module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'User'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name:{
            type: dataTypes.STRING,
        },
        lastname:{
            type: dataTypes.STRING,
        },
        document:{
            type: dataTypes.INTEGER,
        },
        username:{
            type: dataTypes.STRING,
        },
        birthday:{
            type: dataTypes.DATE,
        },
        email:{
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'users', 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const User = sequelize.define(alias, cols, config);

   return User;
}