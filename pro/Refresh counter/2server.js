const express = require('express');
const mongoose = require('mongoose');


const app = express();

const mongoUri = 'mongodb+srv://admin21:qwerty123456@sujit399.5yw3sem.mongodb.net/web-counter?retryWrites=true&w=majority';

mongoose.connect(mongoUri);


// Define a schema and model for the counter
const counterSchema = new mongoose.Schema({
    count: Number
});

const Counter = mongoose.model('Counter', counterSchema);

// Route to handle the main page
app.get('/', async (req, res) => {
    let counter = await Counter.findOne();

    if (!counter) {
        counter = new Counter({ count: 0 });
        await counter.save();
    }

    counter.count++;
    await counter.save();

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
        </body>
        </html>
    `);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
