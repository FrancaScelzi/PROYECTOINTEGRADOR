let products = require("../data/productsData")

let controller = {
    login:(req,res)=>   res.render('login', { title: 'Ingresá | The Union Winery' }),
    register:(req,res)=>   res.render('register', { title: 'Registrate | The Union Winery' }),
    profile:(req,res)=>   res.render('profile', { title: 'Perfil | The Union Winery', productos:products }),
    edit:(req,res)=> res.render('profile-edit', {title:'Editar Perfil | The Union Winery'}),
    logout:(req,res)=>   res.render('logout', { title: 'Logout | The Union Winery' }) 

} 

module.exports = controller