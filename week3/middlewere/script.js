const express = require("express");
const app = express();
const port = 5000;


app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("you have " + kidneyLength + "kidneys");

});

//global catchf
app.use(function (err, req, res, next) {
    res.json({
        msg: "Sorry somthing is up with our server"
    })
})


app.listen(port, () => {
    console.log("this server is working properly http://localhost:" + port);
})










































/* this is example for count for how many time the request hit he browser..... ok ....

let numberOfRequest = 0;

const calculateRequest = (req, res, next) => {
    numberOfRequest++;
    console.log(numberOfRequest);
    next();

}

app.get("/helth-checkup", calculateRequest, (req, res) => {

})


app.get("/helth-checkup", calculateRequest, (req, res) => {

})


*/


































// application middlewere 👉👉👉 example code


/*
const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please Provide age ")

    }
    else if (req.query.age < 18) {
        res.send("you cannot access this page ")


    }
    else {
        next();
    }

}



app.get('/', (req, res) => {
    res.send('welcome to home page');

})

app.get('/users', (req, res) => {
    res.send('this is users page');

})

*/