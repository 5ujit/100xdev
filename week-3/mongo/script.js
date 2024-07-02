// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// app.use(express.json())


// mongoose.connect("mongodb+srv://admin21:qwerty123456@sujit399.5yw3sem.mongodb.net/")

// const User = mongoose.model('Users', {
//     name: String, email: String,
//     password: String
// });


// app.post('/signup', function (req, res) {
//     const username = req.body.usernaem;
//     const password = req.body.password;
//     const name = req.body.name;

//     const existingUser = await User.findOne({ email: username });
//     if (existingUser) {
//         return res.status(400).send("Username alresady exists");

//     }
//     const user = new User({
//         name: name,
//         email: username,
//         password: password
//     });

//     user.save();
//     res.json({
//         "msg": "User created successfully"
//     })
// })



// const user = new User({
//     name: 'Harkirat Singh',
//     email: 'abc@gmail.com',
//     password: '123456'
// });
// user.save();






























const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin21:qwerty123456@sujit399.5yw3sem.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Failed to connect to MongoDB", err);
});

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
});

app.post('/signup', async function (req, res) {
    try {
        const username = req.body.username; // corrected typo
        const password = req.body.password;
        const name = req.body.name;

        const existingUser = await User.findOne({ email: username });
        if (existingUser) {
            return res.status(400).send("Username already exists");
        }

        const user = new User({
            name: name,
            email: username,
            password: password
        });

        await user.save();

        res.json({
            msg: "User created successfully"
        });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
