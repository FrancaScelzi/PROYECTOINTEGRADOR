let products = require('../data/productsData');

let controller = {
    index:(req,res)=>   res.render('index', { title: 'Proyecto X' }),
    show:(req,res)=>    res.render('product', { title: 'Productos Proyecto X' , products: products }),
} 

module.exports = controller