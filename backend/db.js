const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos");
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:boolean,
        default:false
    }
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}