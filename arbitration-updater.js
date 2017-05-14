const cote = require('cote');

const requester = new cote.Requester({name: 'sdf', key: 'arbitration'})

setInterval(() => {
    var req = {
        type: 'update rate',
        currencies: 'usd_eur',
        rate: Math.random().toFixed(2)
    };

    requester.send(req, (msg) => {
        console.log(`updated ${req.currencies} to ${req.rate}`);
    });
}, 5000);
