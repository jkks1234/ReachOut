var express = require('express');
var router = express.Router();
var request = require('request');
var url='https://maps.googleapis.com/maps/api/place/search/json?location=28.5355,77.3910&radius=500&types=hospital&sensor=true&key=AIzaSyAImBQiqvaXOQtqeK8VC-9I96kMmB6Mz7I';
router
	.get('/apia',function(req,res) {
		request({
			url: url,
   			json: true
		}, function (error, response, body) {
      if (!error && response.statusCode === 200) {
          var hospitals = []
          for (var i in body.results){
              hospitals.push(body.results[i].name)
          }
          res.json(hospitals)
        // res.json(body);
    }
  })
	});

module.exports =router;