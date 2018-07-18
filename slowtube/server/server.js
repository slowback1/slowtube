var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

mongoose.connect('./db');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    //yay we is connected
});

//use sessions for tracking logins
app.use(session({
    secret: 'slowback is a cool guy',
    resave: true,
    saveUnitialized: false,
    store: new MongoStore({
        mongooseConnect: db
    })
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//serve static files from template
app.use(express(__dirname + '/templateLogReg'));

//includes routes
var routes = require('./routes/router');
app.use('/', routes);
//catch 404 and forward to error handler
app.use(function(req,res,next) {
    var err = new Error('file not found');
    err.status = 404;
    next(err);
});

app.use(function(err,req,res,next) {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(3000, function() {
    console.log('express app listening on port 3000');
});