const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.User;

let registerController = {
    index: (req, res) => res.render('register', {
        title: 'Registrate | The Union Winery'
    }),

    store: function (req, res) {
        let creada = {}
        let errors = {}

        if (req.body.email == "") {
            errors.message = "El email es obligatorio"
            res.locals.errors = errors
            return res.render('register', {title: 'Registrate | The Union Winery'})

        } else if (req.body.password == "") {

            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors;
            return res.render('register', {title: 'Registrate | The Union Winery'})

        } else {

            db.User.findOne({
                    where: [{
                        email: req.body.email
                    }]
                })
                .then(user => {
                    if (user != null) {
                        errors.message = "El email ya está registrado por favor elija otro.";
                        res.locals.errors = errors;
                        return res.render('register', {title: 'Registrate | The Union Winery'})
                    } else {

                        let user = {
                            name: req.body.name,
                            lastname: req.body.lastname,
                            document: req.body.document,
                            username: req.body.username,
                            birthday: req.body.birthday,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            img: req.file.filename
                        }
                        creada.message = 'Tu cuenta fue creada con exito'
                        res.locals.creada = creada

                        users.create(user)
                            .then(user => {
                                return res.redirect('/login')
                            })
                            .catch(e => {
                                console.log(e)
                            });
                    }
                })
            // Guardar un usuario en la db
            .catch( error => { console.log(error) })


        }
    }
}

module.exports = registerController;