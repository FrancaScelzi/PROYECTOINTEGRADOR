let products = require('../data/productsData');
let users = require('../data/usersData');

let controller = {
    show:(req,res)=>    res.render('product', { title: 'Productos | The Union Winery' , products: products , id: req.params.id , users:users}),
    edit:(req,res)=>    res.render('product-add', {title: 'Editar | The Union Winery', products: products}),
    search:(req,res)=>  res.render('searchResults', { title: 'Resultados | The Union Winery' , products: products , result: req.query.search}) ,

} 

module.exports = controller