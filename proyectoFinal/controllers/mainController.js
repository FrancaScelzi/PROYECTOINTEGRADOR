let products = require('../data/productsData');

let controller = {
    index:(req,res)=>   res.render('index', { title: 'Proyecto X' }),
    
} 

module.exports = controller