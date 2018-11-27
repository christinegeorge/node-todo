import express from 'express';
import * as bodyParser from 'body-parser';
import config from './config';
// routes
import todos from './routes/todos';

// dependencies
//import Mongoose from './dependencies/mongoose';
// middlewares
    // dependencies
    var mongoose = require("mongoose");
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/todo-app");
    // express router
    var app = express();

    // cors
    //app.use(cors({ origin: true }));

    // parse post requests
    app.use(bodyParser.json());

    // passport stuff
    //app.use(passport.initialize());

    // static
    app.use(express.static('./dist'));

    // routes
    app.use('/todos', todos)

    // client
    app.get('*', (req, res) => {
      res.sendFile(
        '/src/index.html', { root: './dist' }
      );
    });

    // error report
    //app.use(errorReport);

  
    app.listen(config.port, () =>{ console.log('Listening to port'+config.port) });