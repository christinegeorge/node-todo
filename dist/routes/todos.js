'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _Todo = require('../model/Todo');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _expressPromiseRouter2.default();
router.get('/todos', async function (req, res) {
    var todos = await todo.find({});
    console.log('todos', todos);
    res.json(todos);
});

router.post('/todos', function (req, res) {
    console.log('Request body', req.body);
    var item = new todo(req.body);
    item.save().then(function (node) {
        console.log('Node', node);
        res.sendFile(__dirname + '/index.html');
    }).catch(function (err) {
        res.status(400).send("Unable to save to database");
    });
});
exports.default = router;