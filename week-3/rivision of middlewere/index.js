const express = require("express");
const app = express();

// function that return a boolen if the age tof the person is mre then 14

const isOldEnoughMiddlewere = (req, res, next) => {
    const age = req.query.age;
    if (age >= 18) {
        next();
    } else {
        res.json({
            msg: "sorry are not of age yet ",
        })
    }
}
app.use(isOldEnoughMiddlewere);

app.get("/ride2", (req, res) => {
    res.json({
        msg: "you have successfully riden the ride 2",
    });
});

app.get("/ride1", (req, res) => {

    res.json({
        msg: "you have successfully riden the ride 1"

    });
})

app.listen(5454, () => {
    console.log("server is running ");
});