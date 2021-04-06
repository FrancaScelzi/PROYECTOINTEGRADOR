
let controller = {
    login:(req,res)=>   res.render('login', { title: 'Ingresa a Proyecto X' }),
    register:(req,res)=>   res.render('register', { title: 'Registrarse a Proyecto X' }),
    profile:(req,res)=>   res.render('profile', { title: 'Tu perfil de Proyecto X' }),
} 

module.exports = controller