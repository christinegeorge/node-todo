'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoSchema = new _mongoose2.default.Schema({
    id: String,
    description: String

});

module.exports = _mongoose2.default.model('Todo', todoSchema);