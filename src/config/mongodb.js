const mongoose = require ('mongoose')


//Conexão banco
const mongo = mongoose.connect('mongodb+srv://SEULOGIN:SUASENHA@SEUDOMINIO.9epej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
},function(erro){
    if(erro){
        console.log('MongoDB Error')
    }else{
        console.log('MondoDB On');
    }
})

module.exports = mongo