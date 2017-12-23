const express = require('express');
const app = express();
const path = require('path');
var request= require('request');

var GOOGLE_KEY= 'AIzaSyCl2EfOePJUj5HmEjhGMvfLgoF1EFDghM0';
var places_url= 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/templates/index.html')))

app.get('/nearbysearch', (req, res) => res.sendFile(path.join(__dirname+'/templates/index.html')))

app.get('/places-info',function(req,api_res){
	var radius= req.query.radius?req.query.radius:150;
	var params = {
		'key':GOOGLE_KEY,
		'location':req.query.lat+','+req.query.lng,
		'radius': radius,
		'type':req.query.type
	};
	request({url:places_url,qs:params},function(err,res,body){
		console.log(res);
		if (res.statusCode == 200){
			console.log(body)
			api_res.json(body)
		}
	});
});


app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))

app.listen(8080, () => console.log('Example app listening on port 8080!'))
