const mongoose =require('mongoose');
const {Schema} =mongoose;

const notasShema =Schema({
    titulo:{type:String,maxlength: 300},
    nota:{type:String,maxlength: 300},
    idUs:{type:String },
    fecha:{type:String},
    Estado:{type:Boolean, default:false},
});
module.exports=mongoose.model('notasModel',notasShema);