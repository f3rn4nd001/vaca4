const jwt =require('jsonwebtoken');

let verificarToken=(req,res,next)=>{
 
   let token =req.headers.token
   jwt.verify(token,'token-de-desarrollo',(err ,decode)=>{
      if(err){
         
         return res.status(401).json({
            ok:false,err,
            message: 'Esta funsion esta desabilitada si no se cuentas registrado'
         });
      }
      else{
         req.usuarioToken=decode.usuario;
         next();
      }
   });
}
   
module.exports={verificarToken}