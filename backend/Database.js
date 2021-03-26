const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/vaca',{
    useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true, useNewUrlParser: true,
})

.then(db => console.log("base conectada"))
.catch(err=> console.error(err));

module.exports=mongoose;