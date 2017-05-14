const cote = require('cote');

const responder = new cote.Responder({ name: 'currency conversion responder' });
const subscriber = new cote.Subscriber({ name: 'arbitration subscriber' });

const rates = { usd_eur: 0.91, eur_usd: 1.10 };

subscriber.on('update rate', (update) => {
    rates[update.currencies] = update.rate;

    console.log(`received rate update ${update.currencies} to ${update.rate}`);
});

responder.on('convert', (req, cb) => {
    var res = req.amount * rates[`${req.from}_${req.to}`];

    console.log(`request: ${req.amount} ${req.from} > ${res} ${req.to}`);

    cb(res);
});
