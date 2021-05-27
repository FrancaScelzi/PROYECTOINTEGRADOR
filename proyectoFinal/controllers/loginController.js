const bcrypt = require('bcryptjs');
const db = require('../database/models');

const op = db.Sequelize.Op;

let loginController = {
    
    index:(req,res)=>   res.render('login', { title: 'Ingresá | The Union Winery' }),

    login: function(req, res){
        // Buscar el usuario que se quiere loguear.
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then( user => {
            console.log('en login controller');
            console.log(req.session.user);
            
            if (bcrypt.compareSync(req.body.password, user.password)) {
                
                req.session.name = user.name;
                req.session.lastname = user.lastname;
                req.session.cosa = user.id;
                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5})
                }
            }
            // Si tildó recordame => creamos la cookie.
           
            return res.redirect('/');
            
        })
        .catch( e => {console.log(e)})

    },
    logout: function(req,res){
        //Destruir la sessión
            req.session.destroy();

        //Destruir la cookie
         res.clearCookie('userId');
        
        //redireccionar a hone
        return res.redirect('/')
    }
    
}

module.exports = loginController;