


let controller = {
    search:(req,res)=>   res.render('search-results', { title: 'Resultados Proyecto X' , result: req.params.search}) ,
    
} 

module.exports = controller