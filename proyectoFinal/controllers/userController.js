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
    edit: (req, res) => res.render('profile-edit', {
        title: 'Editar Perfil | The Union Winery',
        id: req.params.id,
        users: users
    }),

    destroy: (req, res) => {
        req.session.destroy()
        res.clearCookie('userId')

        return res.redirect('/')
    }

}

module.exports = controller