import * as cli from 'cli-color';

import {MikuiaClient} from '../mikuia-client/client';

var Mikuia = new MikuiaClient();
Mikuia.connect();

Mikuia.on('connected', () => {
	console.log('Connected.');
	
	Mikuia.identify('osu');
});

Mikuia.on('identified', () => {
	Mikuia.subscribe('service:twitch:chat:message');

	Mikuia.registerHandler('test.handler', {
		bullshit: true
	})
});

Mikuia.on('event:handler:test.handler', (event) => {
	Mikuia.respond(event, {
		message: 'Hi!'
	});
});

Mikuia.on('service:twitch:chat:message', (data) => {
	console.log('(' + cli.greenBright(data.channel) + ') ' + cli.yellowBright(data.user['display-name']) + ': ' + data.message);
});