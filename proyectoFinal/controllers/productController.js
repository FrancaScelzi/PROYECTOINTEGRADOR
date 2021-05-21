let products = require('../data/productsData');
let users = require('../data/usersData');

const db = require('../database/models')

const op = db.Sequelize.Op

let controller = {
    show:(req,res)=>{   
        let id = req.params.id;

        db.Product.findByPk(id)
            .then(data =>{
                console.log(data);
                return res.render('product', { products: data, users:users, title:'Productos | The Union Winery'});
            })
            .catch(error =>{
                console.log(error);
            })
    
    
    },
    // edit:(req,res)=>    res.render('product-add', {title: 'Editar | The Union Winery', products: products, id: req.params.id , users:users}),
    search:(req,res)=>{
       
        let infoABuscar = req.query.search; //obtengo la info de la querystring.

        db.Product.findAll({
            //SELECT * FROM movies
            //WHERE title LIKE "%potter%"
            where: {[op.or]:[
                { wineName: {[op.like]: '%'+infoABuscar+'%'}},
                { wineType: {[op.like]: '%'+infoABuscar+'%'}},

            ]}
        })
            .then( data => {
                return res.render('searchResults',{ title: 'Resultados | The Union Winery', products: data, result:infoABuscar});
            })
            .catch( error => {
                console.log(error);
            })

    },



    
    create: (req, res)=>{
                //Renderizar la vista de Product Add
       
                return res.render('product-add', {title: 'Editar | The Union Winery', products: products, id: req.params.id , users:users});
            
           
    },
    store: function(req, res){
        //Método para guardar nuevo Vino.
        //1) Obtener datos del formulario
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