const express = require('express');
const mongoose = require('mongoose');
const requestIp = require('request-ip');
const axios = require('axios'); // Import axios

const app = express();

const mongoUri = 'mongodb+srv://admin21:qwerty123456@sujit399.5yw3sem.mongodb.net/web-counter?retryWrites=true&w=majority';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const counterSchema = new mongoose.Schema({
    count: { type: Number, default: 0 },
    ips: { type: [String], default: [] }
});

const Counter = mongoose.model('Counter', counterSchema);

app.use(requestIp.mw());

app.get('/', async (req, res) => {
    try {
        let counter = await Counter.findOne();

        if (!counter) {
            counter = new Counter();
        }

        counter.count++;
        const clientIp = req.clientIp;

        if (!counter.ips.includes(clientIp)) {
            counter.ips.push(clientIp);
        }

        await counter.save();

        // Send the IP address to another API
        await axios.post('https://example.com/api/ip', { ip: clientIp });

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome Page</title>
            </head>
            <body>
                <h1>Welcome to the Page!</h1>
                <p>This page has been refreshed ${counter.count} times.</p>
                <p>Your IP address is: ${clientIp}</p>
                <p>IP addresses stored in the database: ${counter.ips.join(', ')}</p>
            </body>
            </html>
        `);
    } catch (err) {
        console.error('Error processing request:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
