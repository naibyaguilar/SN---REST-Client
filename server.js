var express = require("express");
const cors = require("cors")
const handdle  = require("./server/handlers")
const routes = require("./server/routes")
var path = require('path');
var app = express();


app.use(cors())

app.use('/assets', express.static('assets'));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


app.use(routes.auth)
app.use(routes.home)
app.use(routes.user)


app.use(handdle.errorHandler)



app.listen(8080);