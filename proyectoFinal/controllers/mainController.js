let products = require('../data/productsData');
const db = require('../database/models');
// const op = db.Sequelize.Op

let controller = {
    index: function (req, res) {
        db.Product.findAll({
                order: [
                    ['wine_year', 'ASC']
                ],
                limit: 10,
                include: [{
                    association: 'user'
                }, {
                    association: 'comment',
                    include: {
                        association: 'user'
                    }
                }]
            })
            .then(nuevos => {
                db.Product.findAll({
                    order: [
                        ['wine_comments', 'DESC']
                    ],
                    limit: 10,
                    include: [{
                        association: 'user'
                    }, {
                        association: 'comment',
                        include: {
                            association: 'user'
                        }
                    }]
                }).then(comentados => {
                    return res.render('index', {
                        productos: nuevos,
                        comentados: comentados,
                        title: 'Home | The Union Winery'
                    })
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}


module.exports = controller