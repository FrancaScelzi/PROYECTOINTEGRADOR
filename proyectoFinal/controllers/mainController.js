let products = require('../data/productsData');
const db = require('../database/models');
// const op = db.Sequelize.Op

let controller = {
    index: function(req, res){
        db.Product.findAll({
            order: [
                ['wine_year', 'ASC']
            ],
            limit: 10,
            include: [
                {association: 'user'}
            ]
         })
            
         .then( wines => {
                console.log(wines)
                return res.render('index', { productos: wines , title: 'Home | The Union Winery'})
            })
            .catch(error =>{
                console.log(error);
            })
    }   
}


module.exports = controller

