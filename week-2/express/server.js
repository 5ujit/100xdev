const express = require('express');
const app = express();

const users = [{
    name: "jhon",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKideneys = johnKidneys.length;
    let numberOfHealthyKideneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKideneys = numberOfHealthyKideneys + 1;
        }
    }
    const numberOfUnhealthyKideneys = numberOfKideneys - numberOfHealthyKideneys;
    res.json({
        johnKidneys,
        numberOfHealthyKideneys,
        numberOfUnhealthyKideneys
    })

})


app.post('/', function (req, res) {

})

app.listen(5000);