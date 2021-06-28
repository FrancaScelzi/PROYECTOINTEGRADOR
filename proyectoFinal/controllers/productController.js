
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
                    }, // Relación comentario producto y relación comentario usuario
                    {
                        association: 'user'
                    }, // Relación producto usuario

                ],
                order: [
                    ['comment', 'id', 'desc']
                ], //Acá le decimos que queremos que los comentarios vengan ordenados por id descendente. Podemos ordenar por cualquiera de las columnas de la tabla.
            })
            .then(data => {
                if (!data) {
                    res.redirect('/')
                }
                return res.render('product', {
                    products: data,
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

                if (!data) {
                    res.redirect('/')
                } else if (req.session.user.id != data.user_id) {
                    res.redirect('/users/' + req.session.user.id)
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
        if (req.file != undefined) {
            var wine = {
                wine_name: data.wineName,
                wine_type: data.wineType,
                wine_description: data.wineDescription,
                wine_variety: data.wineVariety,
                wine_year: data.wineYear,
                wine_image: req.file.filename,

            }
        } else {
            var wine = {
                wine_name: data.wineName,
                wine_type: data.wineType,
                wine_description: data.wineDescription,
                wine_variety: data.wineVariety,
                wine_year: data.wineYear,

            }
        }
        // Actualizando los datos del vino | Datos del vino luego de la edición de campos
        db.Product.update(wine, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (productUpdated) {
                // 4) Redirección
                console.log(productUpdated)

                return res.redirect('/')
            })
            .catch(error => {
                console.log(error);
            })
    },

    search: (req, res) => {

        let infoABuscar = req.query.search; // Obtengo la info de la querystring.

        db.Product.findAll({

            include: [{
                association: 'user'
            }, {
                association: 'comment',
                include: {
                    association: 'user'
                }
            }],

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
                        {
                            wine_variety: {
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
        // Renderizar la vista de Product Add
        if (req.session.user != undefined) {

            return res.render('product-add', {
                title: 'Agregar | The Union Winery',
            });
        } else {
            res.redirect('/')
        }
    },

    store: function (req, res) {
        // Método para guardar nuevo Vino.
        //1) Obtener datos del formulario

        let data = req.body;

        //2) Crear vino nuevo.
        let wine = {
            wine_name: data.wineName,
            wine_type: data.wineType,
            wine_description: data.wineDescription,
            wine_variety: data.wineVariety,
            wine_year: data.wineYear,
            wine_image: req.file.filename,
            wine_comments: 0,
            user_id: res.locals.user.id

        }
        //3) Guardar Vino
        db.Product.create(wine)
            .then((wineCreado) => {
                //4)Redirección
                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })
    },

    createComment: function (req, res) {
        let data = req.body;
        let errors = {}

        if (req.session.user != undefined) {

            let createComment = {
                product_id: data.idProduct,
                user_id: data.idUser,
                texto_comentario: data.comment,
            }

            db.Comment.create(createComment)
                .then(data => {


                    db.Product.findByPk(data.product_id)
                        .then(result => {
                            result.wine_comments += 1;
                            result.save()
                                .then(info => {

                                    return res.redirect("/product/detail/" + createComment.product_id)
                                })
                            
                        })


                })
        } else {
            errors.message = 'Para ingresar un comentario debe iniciar sesión'
            res.locals.errors = errors
            return res.render('login', {
                title: 'Login | The Union Winery'
            });
        }
    },

    destroy: function (req, res) {

        let vinoBorrar = req.params.id;
        db.Product.destroy({
                where: [{
                    id: vinoBorrar
                }]
            })
            .then((data) => {

               
                
                return res.redirect('/');

            })
            .catch(error => {
                console.log(error);
            })
    },
    destroyComment: function (req, res) {

        let comentarioId = req.params.id;
        db.Comment.destroy({
                where: [{
                    id: comentarioId
                }]
            })
            .then(() => {
                db.Product.findByPk(req.body.idProduct)
                .then(result => {
                    result.wine_comments -= 1
                    result.save()
                    .then(info=>{

                        return res.redirect('/product/detail/' + req.body.idProduct);
                    })
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}

module.exports = controller