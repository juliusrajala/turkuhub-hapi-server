var Hapi = require('hapi');
var fs = require('fs');
var path = require('path');
var nearestNeighbor = require('./lib/algorithms/nearestNeighbor.js');

var apiServer = new Hapi.Server();

var settings = {
	httpPort: process.env.PORT || 3000,
	apiPath: '/api/path',
	// httpHost: "0.0.0.0"
}

function startApi(settings){
	apiServer.connection({
		host: settings.httpHost,
		port: settings.httpPort
	});

	apiServer.route({
		method: 'GET',
		path: '/android/deliver_all_bus_data',
		handler: function(request, reply){
			reply("Hello.");
		}
	});

	apiServer.route({
		method: 'GET',
		path: '/test',
		handler: function(request, reply){
			console.log("Request params");
			// handleLanguage(request);
			console.log(request.headers);
			console.log(request.raw);
			writeJSON(request.headers);
			reply("Sup?");
		}
	});

	//Initial machine-learning focused rest-route
	apiServer.route({
		method: 'GET',
		path: '/test/{params}',
		handler: function(request, reply){
			console.log("Testing MA-ALG with " + request.params.params);
			var response = compareDataSets(encodeURIComponent(request.params.params));
			reply(response);
		}
	});

	apiServer.route({
		method: 'GET',
		path: '/android/get/{message}',
		handler: function(request, reply){
			console.log("GET called with params");
			handleLanguage(encodeURIComponent(request.params.message));
			reply("You called me with: "+ request.params.message);
		}
	});

	function writeJSON(request){
		fs.writeFile("test/header.json", JSON.stringify(request), {flags: "w"}, function(err){
			if(err){
				return console.log(err);
			}
		});
	};


	apiServer.start(function(){
		console.log('APIServer running at:', apiServer.info.uri);
	});
};

function handleLanguage(params){
	var TAG = Date.now() + ": handleLanguage: "
	console.log(TAG + "Arrived with: "+ params);
}

function compareDataSets(params){
	var neighborInstance = new nearestNeighbor();
	var values = findValuesFromParams(params);
	console.log(neighborInstance.run(3, 700));
	return "You called me with string " + params;
}

function findValuesFromParams(params){
	var re = '/rooms:/';
	console.log(params.search(re));
}

startApi(settings);