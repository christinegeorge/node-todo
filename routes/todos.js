import Router from 'express-promise-router'
import Todo from '../model/Todo'

var router = new Router()
router.get('/',async (req,res)=>{
    var todos = await Todo.find({})
    res.json(todos);
 }); 
 
router.post('/',(req,res)=>{
    var item = new Todo(req.body);
    item.save()
    .then(node => {
        res.send('Todo added');
    })
    .catch(err => {
        res.status(400).send("Unable to save to database");
    });
});
export default router