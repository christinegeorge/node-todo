import mongoose from 'mongoose'

var todoSchema = new mongoose.Schema({
    id:String,
    description:String,
    
})

module.exports = mongoose.model('Todo', todoSchema)
