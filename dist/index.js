'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var bodyParser = _interopRequireWildcard(_bodyParser);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _todos = require('./routes/todos');

var _todos2 = _interopRequireDefault(_todos);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dependencies
//import Mongoose from './dependencies/mongoose';
// middlewares
// dependencies
var mongoose = require("mongoose");
// routes

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/todo-app");
// express router
var app = (0, _express2.default)();

// cors
//app.use(cors({ origin: true }));

// parse post requests
app.use(bodyParser.json());

// passport stuff
//app.use(passport.initialize());

// static
app.use(_express2.default.static('./dist'));

// routes
app.use('/todos', _todos2.default);

// client
app.get('*', function (req, res) {
    res.sendFile('/src/index.html', { root: './dist' });
});

// error report
//app.use(errorReport);


app.listen(_config2.default.port, function () {
    console.log('Listening to port' + _config2.default.port);
});