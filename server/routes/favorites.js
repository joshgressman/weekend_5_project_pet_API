var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/animals';


router.get('/', function(req, res){
  console.log("is the route working");
  pg.connect(connectionString, function (err, client, done){
    console.log("ERR");
    if(err) {
      console.log("ERROR in GET", err)
      res.sendStatus(500);
    }

    client.query('SELECT * FROM pets', function (err, result){
      done();
      console.log("GET WORKED", result);
      if (err){
        res.sendStatus(500);
      }
      console.log(result.rows);
      res.send(result.rows);
    });
  });
});





module.exports = router;
