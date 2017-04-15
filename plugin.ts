import {MikuiaClient} from '../mikuia-client/client'

var Mikuia = new MikuiaClient('tcp://127.0.0.1:3001');
Mikuia.connect();

Mikuia.on('connect', () => {
    console.log('Connected.');
    // Mikuia.identify('osu');

    Mikuia.getExample().then(() => {
        console.log('Yay.');
    })
});