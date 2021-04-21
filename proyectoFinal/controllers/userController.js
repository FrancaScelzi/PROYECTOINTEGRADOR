let products = require("../data/productsData")
let users = require("../data/usersData")
let controller = {
    login:(req,res)=>   res.render('login', { title: 'Ingresá | The Union Winery' }),
    register:(req,res)=>   res.render('register', { title: 'Registrate | The Union Winery' }),
    profile:(req,res)=>   res.render('profile', { title: 'Perfil | The Union Winery', productos:products, id:req.params.id , users:users }),
    edit:(req,res)=> res.render('profile-edit', {title:'Editar Perfil | The Union Winery',  id:req.params.id , users:users}),
    logout:(req,res)=>   res.render('logout', { title: 'Logout | The Union Winery' }) 

} 

module.exports = controller
