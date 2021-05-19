const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.User;

let registerController = {
    index:(req,res)=>   res.render('register', { title: 'Registrate | The Union Winery' }),
    
    store: function(req, res){ 
        // Guardar un usuario en la db
        let user = {
           name : req.body.name,
           lastname: req.body.lastname,
           dni: req.body.document,
           username: req.body.username,
           birthday: req.body.birthday,
           email: req.body.email,
           password: bcrypt.hashSync(req.body.password, 10), 
       }
       
       users.create(user)
       .then( user => {
        return res.redirect('/login')
       })
       .catch(e => {console.log(e)});

    }
}

module.exports = registerController;