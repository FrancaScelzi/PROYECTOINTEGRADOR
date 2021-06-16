let products = require("../data/productsData")

const db = require('../database/models')

const op = db.Sequelize.Op

let users = require("../data/usersData")
let controller = {
    profile: (req, res) => {

        db.User.findByPk(req.params.id, {

                include: [{
                    association: 'products'
                }]
            })
            .then(user => {
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
        if (userId != req.session.user.id) {
            // Redireccionar a la ruta del usuario logueado
            return res.redirect(`/users/edit/${req.session.user.id}`)
        } else {
            // Recuperar los datos del usuario y pasarlo al form de edición
            db.User.findByPk(userId)
                .then(function (user) {
                    return res.render('profile-edit', {
                        user: user,
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

        let user = {
            username: req.body.username,
            userImage: '',
            email: req.body.email,
            password: '',
        }

        // Tenemos que pensar cómo completar password y avatar
        if (req.body.password == '') {
            user.paswword = req.session.user.password;
        } else {
            user.password = bcrypt.hashSync(req.body.password, 10);
        }
        if (req.file == undefined) {
            user.UserImage = req.session.user.userImage;
        } else {
            user.imagen = req.file.filename;
        }

        db.User.update(user, {
                where: {
                    id: req.session.user.id
                }
            })

            .then(function (id) {
                // Actualizar los datos de session y redirecciona a la home
                user.id = req.session.user.id;
                req.session.user = user;
                return res.redirect('/')
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