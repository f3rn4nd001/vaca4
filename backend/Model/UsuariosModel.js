const mongoose =require('mongoose');
const {Schema} =mongoose;
let rolV={
    values:['Admin','Usuario'],
    message:'{VALUE} no es un rol'
};
let sexoV={
    values:['Hombre','Mujer'],
    message:'{VALUE} no es un rol'
};
const usuarioShema =Schema({
    Nombre:{type:String, require:true,maxlength: 30},
    Apellido:{type:String,require:true,maxlength: 30},
    email:{type:String, unique:true ,trim: true,require:true},
    password:{type:String, require:true},
    role:{type:String, default:'Usuario',enum:rolV},
    Sexo:{type:String, enum:sexoV,require:false},
    Edad:{type:Date, require:false},
    Telefono:{type:String, require:true},

            
});
module.exports=mongoose.model('usuarioModel',usuarioShema);