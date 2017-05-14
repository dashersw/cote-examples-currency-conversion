const cote = require('cote');

const responder = new cote.Responder({ name: 'arbitration API', key: 'arbitration' });
const publisher = new cote.Publisher({ name: 'arbitration publisher' });

const rates = {};

responder.on('update rate', (req, cb) => {
    rates[req.currencies] = req.rate;
    cb('OK!');

    console.log(`publishing rate update ${req.currencies} to ${req.rate}`);

    publisher.publish('update rate', req);
});
