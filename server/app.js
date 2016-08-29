//server files
var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Route to the animals.js routes folder
var animals = require('./routes/animals');
var favorites = require('./routes/favorites');
// Serve back static files SHOULD NOT NEED TO TOUCH THIS////////////

///////////////////////////////////////////////////////////////////////

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));

///ROUTES//
app.use('/animals', animals);
app.use('/favorites', favorites);


app.get("/jq", function(req,res,next){
    res.sendFile(path.join(__dirname, "./public/views/partials/indexjq.html"));
});


// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/partials/index.html'));
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
