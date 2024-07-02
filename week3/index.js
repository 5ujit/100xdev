const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log("this server is running");
})



app.get('/health-checkup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const

    if (username === "harkirat" && password === "pass") {
        // do somthing with kideny here 
        res.json({
            msg: "your kidney is jine !"
        })
    }

});
















































