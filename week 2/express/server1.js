const express = require('express');
const app = express();
app.use(express.json())

const students = require('./students')


app.listen(8000, () => {
    console.log('lisiten on port 8000');
})



app.get('/', (req, res) => {
    res.json({ message: "API is working " })

})
app.get('/students', (req, res) => {
    res.send(students)

})

app.post('/api/students', (req, res) => {
    if (!req.body.email) {
        res.status(400)

        return res.send({ error: "email is required..." })
    }
    // console.log(req.body.name);
    const user = {
        id: students.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    students.push(user)
    res.json(user)
})


app.put('api/students/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    res.json(id)

})