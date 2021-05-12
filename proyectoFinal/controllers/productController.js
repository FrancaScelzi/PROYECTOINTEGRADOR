let products = require('../data/productsData');
let users = require('../data/usersData');

let controller = {
    show:(req,res)=>    res.render('product', { title: 'Productos | The Union Winery' , products: products , id: req.params.id , users:users}),
    edit:(req,res)=>    res.render('product-add', {title: 'Editar | The Union Winery', products: products, id: req.params.id , users:users}),
    search:(req,res)=>  res.render('searchResults', { title: 'Resultados | The Union Winery' , products: products , result: req.query.search}) ,
    create: function(req, res){
        //Mostrar formulario de carga de películas
        db.User.findAll()
            .then( data => {
                return res.render('', {users:data});
            })
            .catch(error => {
                console.log(error);
            })
    },
    store: function(req, res){
        //Método para guardar nueva película.
        //1) Obtener datos del formulario
        let data = req.body;
        
        //2)Crear pelicula nueva.
        let wine = {
            wineName: data.wineName,            
            wineType: data.rating,
            wineDescription: data.wineDescription,
            wineVariety: data.wineVariety,
            wineYear: data.wineYear,
            wineImage: data.wineImage
        }
        //3)Guardar película
        db.Product.create(wine)
            .then( (wineCreado) => {
        //4)Redirección
                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })
    },
} 

module.exports = controller