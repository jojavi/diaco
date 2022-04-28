
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
//import { engine } from 'express-handlebars';
const methodOverride = require('method-override');
const session = require('express-session');
const flash  = require('connect-flash');
const passport = require ('passport');

// Initializations
const app = express();
const bodyParser = require('body-parser');

// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', 
exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');

// Middleware
app.use(express.urlencoded( {extended : false} ));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp', 
    resave: 'true', 
    saveUninitialized: true,
    useUnifiedTopology: true
}));

// routes
app.use(require('./routes/index'));
app.use(require('./routes/login'));
app.use(require('./routes/menu'));
app.use(require('./routes/quejar'));
app.use(require('./routes/registrar'));
app.use(require('./routes/quejas'));
app.use(require('./routes/seguimiento'));
app.use(require('./routes/verempleados'));
app.use(require('./routes/diaco'));
app.use(require('./routes/estadisticas'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Servidor 
app.listen('8992', function() {
  console.log('Server is running on http://localhost:8992');
}); 
