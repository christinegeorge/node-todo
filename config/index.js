var mongoose = require("mongoose");
export const port = "8080"
export function initMongo() {
	mongoose.connect("mongodb://localhost:27017/todo-app", {useNewUrlParser: true});
	return true
}
