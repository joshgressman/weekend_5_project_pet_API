//This is the routing file that will send and recive animlas to the database

var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/animals';


/////////POST DATA TO DATABASE ROUTES //////////////////////////////////
router.post('/', function(req, res){
  // console.log('req.body', req.body);
 var animals = req.body;
 // console.log("This is the data from the", animals);

 pg.connect(connectionString, function (err, client, done){
   if(err){
     console.log("THERE IS A PROBLEM", err);
     res.sendStatus(500);
   } else {
   client.query('INSERT INTO pets (pet_id, pet_name, pet_url, description)'
    + 'VALUES($1, $2, $3, $4)',
   [animals.pet_id, animals.pet_name, animals.pet_url, animals.description],
   function(err, result){
        done();

        if(err) {
          console.log("QUERY ERROR", err);
          res.sendStatus(500);
        }
        res.sendStatus(201);
      });
    }
 });
});




module.exports = router;
