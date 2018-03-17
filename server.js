const express = require('express');
const bodyParser = require('body-parser');
const expbhs = require('express-handlebars')
const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.engine('handlebars', expbhs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgersController');
app.use(routes);

app.listen(PORT, ()=> {
//    console.log(`Listening on port ${PORT}...`)
})
