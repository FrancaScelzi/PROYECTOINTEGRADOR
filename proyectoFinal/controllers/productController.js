let products = require('../data/productsData');

let controller = {
    show:(req,res)=>    res.render('product', { title: 'Productos | The Union Winery' , products: products , id: req.params.id}),
    edit:(req,res)=>    res.render('product-add', {title: 'Editar | The Union Winery', products: products}),
    search:(req,res)=>   res.render('searchResults', { title: 'Resultados | The Union Winery' , result: req.query.search}) ,

} 

module.exports = controller