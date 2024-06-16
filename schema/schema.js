const mongoose=require("mongoose");
const utilizadorSchema=mongoose.Schema({
name:String,
username:String,
email:String,
password:String,
})
const user=mongoose.model("utilizador",utilizadorSchema);
module.exports=user;