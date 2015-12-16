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
		path: '/test/',
		handler: function(request, reply){
			reply("Sup?");
		}
	})
	apiServer.route({
		method: 'GET',
		path: '/android/get/{params*}',
		handler: function(request, reply){
			handleLanguage(request);
		}
	});


	apiServer.start(function(){
		console.log('APIServer running at:', apiServer.info.uri);
	});
};

function handleLanguage(params){
	console.log("Arrived with: " + params);
}

startApi(settings);