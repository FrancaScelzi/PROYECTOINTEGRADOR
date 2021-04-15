let products = require('../data/productsData');

let controller = {
    show:(req,res)=>    res.render('product', { title: 'Productos de The Union Winery' , products: products , id: req.params.id}),
    edit:(req,res)=>    res.render('product-add', {title: 'Editar Productos de The Union Winery', products: products}),
    search:(req,res)=>   res.render('search-results', { title: 'Resultados de The Union Winery' , result: req.params.search}) ,

} 

module.exports = controller