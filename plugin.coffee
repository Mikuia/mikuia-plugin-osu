MikuiaClient = require '../mikuia-client/client'

mikuia = new MikuiaClient 'tcp://127.0.0.1:3001'

mikuia.getExample (err, data) =>
	console.log 'Error status: ' + err
	console.log 'Example data: ' + data
