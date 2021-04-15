
let controller = {
    login:(req,res)=>   res.render('login', { title: 'Ingresa a The Union Winery' }),
    register:(req,res)=>   res.render('register', { title: 'Registrarse a The Union Winery' }),
    profile:(req,res)=>   res.render('profile', { title: 'Tu perfil de The Union Winery' }),
    edit:(req,res)=> res.render('profile-edit', {title:'Edita Tu Perfil de The Union Winery'}),
    logout:(req,res)=>   res.render('logout', { title: 'Logout de The Union Winery' }) 

} 

module.exports = controller