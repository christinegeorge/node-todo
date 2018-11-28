import mongoose from 'mongoose'

var todoSchema = new mongoose.Schema({
    id:String,
    description:String,
    
},{
    versionKey: false // You should be aware of the outcome after set to false
})

module.exports = mongoose.model('Todo', todoSchema)
