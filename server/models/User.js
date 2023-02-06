const mongoose =require("module");
const { model } = require("mongoose");

const UserSchma =new mongoose.Schema(
    {
        userName:{type:String,require:true},
        password:{type:String,require:true}
    },{timestamps:true}
);

module.exports=mongoose,model("User",UserSchma);