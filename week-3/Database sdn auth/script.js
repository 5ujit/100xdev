const express = require('express');
const jwt = require("jsonwebtoken");

const app = express();
const jwtpass = "SECRET";
const PORT = 3000;

const all_users = [
    { username: "abdulhameed", password: "123456" },
    { username: "ali", password: "987654" },
    { username: "omar", password: "098765" }
];

function userExist(username, password) {
    return all_users.some(user => user.username === username && user.password === password);
}

app.use(express.json());

app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    if (!userExist(username, password)) {
        return res.status(403).json({ msg: "Invalid user credentials" });
    }

    const token = jwt.sign({ username }, jwtpass);

    return res.status(200).json({ token });
});

app.get('/users', (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ msg: "Token not provided" });
    }

    try {
        const decoded = jwt.verify(token, jwtpass);
        const username = decoded.username;

        if (!all_users.some(user => user.username === username)) {
            return res.status(401).json({ msg: "Unauthorized access" });
        }

        const otherUsers = all_users.filter(user => user.username !== username);

        return res.status(200).json({ otherUsers });
    } catch (error) {
        return res.status(401).json({ msg: "Invalid token" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
