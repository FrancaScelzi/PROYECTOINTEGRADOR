let products = require('../data/productsData');

let controller = {
    show:(req,res)=>    res.render('product', { title: 'Productos Proyecto X' , products: products }),
    edit:(req,res)=>    res.render('product-add', {title: 'Editar Productos Proyecto X', products: products}),
    search:(req,res)=>   res.render('search-results', { title: 'Resultados Proyecto X' , result: req.params.search}) ,

} 

module.exports = controller