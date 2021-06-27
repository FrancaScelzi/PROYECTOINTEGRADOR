let products = require("../data/productsData")
const bcrypt = require('bcryptjs');

const db = require('../database/models')

const op = db.Sequelize.Op

let users = require("../data/usersData")
let controller = {
    profile: (req, res) => {

        db.User.findByPk(req.params.id, {

                include: [{
                    association: 'products'
                },{
                    association: 'comments'
                }
           ]
            })
            .then(user => {
                if (!user) {
                    res.redirect('/')
                }
                // res.send(user)
                res.render('profile', {
                    title: 'Perfil | The Union Winery',
                    usuario: user,
                })

            })
            .catch(error => {
                console.log(error);
            })

    },
    edit: (req, res) => {

        // Mostrar el formulario de edición
        let userId = req.params.id;

        // Evitar que el usuario cambie el id en la url
        if (req.session.user && userId != req.session.user.id) {
            // Redireccionar a la ruta del usuario logueado
            return res.redirect(`/users/${req.session.user.id}`)
        }else if (!req.session.user) {
            return res.redirect('/')
        } else {
            // Recuperar los datos del usuario y pasarlo al form de edición
            db.User.findByPk(userId)
                .then(function (user) {
                    return res.render('profile-edit', {
                        usuario: user,
                        title: 'Editar Perfil | The Union Winery'
                    })
                })
                .catch(e => {
                    console.log(e)
                })
        }
        
    },


    update: function (req, res) {
        // Vamos a actualizar un usuario
        console.log(req.session.user);

        let user = {
            username: req.body.username,
            img: '',
            password: '',
        }

        // Tenemos que pensar cómo completar password y avatar
        if (!req.body.password) {
            user.password = req.session.user.password;
        } else {
            user.password = bcrypt.hashSync(req.body.password, 10);
        }
        if (!req.file) {
            user.img = req.session.user.img;
        } else {
            user.img = req.file.filename;
        }

        db.User.update(user, {
                where: {
                    id: req.body.id
                }
            })

            .then(function () {
                // Actualizar los datos de session y redirecciona a la home
                
                return res.redirect('/users/'+req.body.id)
            })

            .catch(e => {
                console.log(e)
            })
    },

    destroy: (req, res) => {
        req.session.destroy()
        res.clearCookie('userId')

        return res.redirect('/')
    }

}

module.exports = controller