const express = require('express');
const zod = require('zod');

const app = express();
const port = 5000;



function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}
app.post("/login", (req, res) => {
    const input = req.body;
    const response = vslidateInput(req.body)
    if (!reaopnce.success) {
        res.json({
            mesg: "your input are invalid"
        })

    }
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});




























/*
const schema = zod.array(zod.number());
const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())

})
app.use(express.json());


app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: "input invalid"
        })
    }
    res.send({
        response

    })

});




*/