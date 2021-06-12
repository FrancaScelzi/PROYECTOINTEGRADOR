let products = require('../data/productsData');
let users = require('../data/usersData');

const db = require('../database/models')

const op = db.Sequelize.Op

let controller = {
    show: (req, res) => {
        let id = req.params.id;

        db.Product.findByPk(id, {
                include: [{
                        association: 'comment',
                        include: {
                            association: 'user'
                        }
                    }, //relacion comentario producto
                    // {association: 'userComment'}, // relacion comentario usuario
                    {
                        association: 'user'
                    }, // relacion producto comentario

                ]
            })
            .then(data => {
                console.log(data);

                // return res.send(data)

                return res.render('product', {
                    products: data,
                    users: users,
                    title: 'Productos | The Union Winery'
                });
            })
            .catch(error => {
                console.log(error);
            })

    },

    edit: (req, res) => {


        db.Product.findByPk(req.params.id)
            .then((data) => {
                if (req.session.user.id != data.user_id) {
                    res.redirect('/users/'+ req.session.user.id)
                }
                return res.render('product-edit', {
                    title: 'Editar | The Union Winery',
                    product: data,
                    id: req.params.id,
                })

            })
    },


    editForm: (req, res) => {


        let data = req.body;

        //2)Crear vino nueva.
        let wine = {
            wineName: data.wineName,
            wineType: data.rating,
            wineDescription: data.wineDescription,
            wineVariety: data.wineVariety,
            wineYear: data.wineYear,
            wineImage: data.wineImage

        }
        //3)Guardar Vino
        db.Product.update(wine , {
            where: { id: data.id}
        })
            .then(() => {
                //4)Redirección
                return res.redirect('/')
            })
            .catch(error => {
                console.log(error);
            })
    },

    search: (req, res) => {

        let infoABuscar = req.query.search; //obtengo la info de la querystring.

        db.Product.findAll({
                //SELECT * FROM movies
                //WHERE title LIKE "%potter%"
                where: {
                    [op.or]: [{
                            wine_name: {
                                [op.like]: '%' + infoABuscar + '%'
                            }
                        },
                        {
                            wine_type: {
                                [op.like]: '%' + infoABuscar + '%'
                            }
                        },
                        {
                            wine_year: {
                                [op.like]: '%' + infoABuscar + '%'
                            }
                        },
                    ]
                },

            })
            .then(data => {
                console.log(data);
                if (data == null || data == [] || data.length == 0) {
                    console.log('No hay resultados');
                    return res.render('searchResults', {
                        title: 'Resultados | The Union Winery',
                        products: data,
                        result: infoABuscar,
                        respuesta: 'No se encontraron resultados para '
                    });

                }
                return res.render('searchResults', {
                    title: 'Resultados | The Union Winery',
                    products: data,
                    result: infoABuscar,
                    respuesta: ''
                });
            })
            .catch(error => {
                console.log(error);
            })

    },




    create: (req, res) => {
        //Renderizar la vista de Product Add

        return res.render('product-add', {
            title: 'Editar | The Union Winery',
            products: products,
            id: req.params.id,
            users: users
        });


    },

    store: function (req, res) {
       
       
       
        //Método para guardar nuevo Vino.
        //1) Obtener datos del formulario

        let data = req.body;

        //2)Crear vino nueva.
        let wine = {
            wine_name: data.wineName,
            wine_type: data.wineType,
            wine_description: data.wineDescription,
            wine_variety: data.wineVariety,
            wine_year: data.wineYear,
            wine_image: req.file.filename,
            user_id: res.locals.user.id

        }
        //3)Guardar Vino
        db.Product.create(wine)
            .then((wineCreado) => {
                //4)Redirección
                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })
    },

    destroy: function (req, res) {

        let vinoBorrar = req.params.id;


        db.Product.destroy({
                where: [{
                    id: vinoBorrar
                }]
            })
            .then(() => {
                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })
    }
}

module.exports = controller