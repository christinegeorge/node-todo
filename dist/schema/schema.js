"use strict";

var todoSchema = new mongoose.Schema({
    id: String,
    description: String

});
module.exports = todoSchema;