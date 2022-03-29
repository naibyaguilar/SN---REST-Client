var express = require("express");
const cors = require("cors");
var cookieParser = require('cookie-parser');
var path = require('path');

var app = express();

const mongoose = require('mongoose');

configureConnections()
  .catch(error => {
    console.error(`Error: ${error}`);
});;

var ClientRouter = require('./routes/client.route');

app.use(cors())

app.use('/assets', express.static('assets'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', ClientRouter);

app.listen(3000);

module.exports = app;

async function configureConnections() {
    mongoose.Promise = global.Promise;
  
    await mongoose.connect(
      'mongodb://uwk5ykdhrsmogpofequx:wJ832LUGP8Y8kaE0PZtL@bufrrl1vswrbxue-mongodb.services.clever-cloud.com:27017/bufrrl1vswrbxue',
      { 'useNewUrlParser': true }
    );
    console.log('>>>>DB is conected');
}