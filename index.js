var Hapi = require('hapi');
var fs = require('fs');
var path = require('path');

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
	})
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

startApi(settings);