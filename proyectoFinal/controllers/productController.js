let products = require('../data/productsData');

let controller = {
    show:(req,res)=>    res.render('product', { title: 'Productos Proyecto X' , products: products }),
    edit:(req,res)=>    res.render('product-add', {title: 'Editar Productos Proyecto X', products: products})
} 

module.exports = controller