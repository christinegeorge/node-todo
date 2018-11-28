import express from 'express';
import * as bodyParser from 'body-parser';
import {port, initMongo} from './config';
// routes
import todos from './routes/todos';
var app = express();
initMongo() //initializing mongo instance
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Use this to retrieve data from form-data 
app.use(express.static('./dist')); //statis files

// routes
app.use('/todos', todos)
// client
app.get('*', (req, res) => {
  res.sendFile(
    '/src/index.html', { root: './' }
  );
});
app.listen(port, () =>{ console.log('Listening to port'+port) });