var Hapi = require('hapi');
var fs = require('fs');
var path = require('path');

var apiServer = new Hapi.Server();

var settings = {
	httpPort: process.env.PORT,
	apiPath: '/api/path'
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

	apiServer.start(function(){
		console.log('APIServer running at:', apiServer.info.uri);
	});
}

startApi(settings);