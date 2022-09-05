const express = require('express')
const app = express()
const port = 5000

const users = require('./user')


app.use(express.json())

app.get('/', (req, res) => {
    res.send('welcome to our server')
})



//showing all json file user
app.get('/user/all', (req, res) => {
    const { limit } = req.query;
    res.json(users.slice(0, limit))
})


//showing random user details
app.get('/user/random/:id', (req, res) => {
    const id = req.params.id;
    const newId = id - 1;
    res.json(users[newId])
})


//showing user saved code here
app.post('/user/save', (req, res) => {
    const newData = req.body;
    const id = newData.id
    const updatedData = users.push(newData)
    res.json(users)

})



//showing user details update code
app.put('/user/update/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    const newData = users.find(user => user.id === Number(id))
    newData.id = id;
    newData.gender = req.body.gender;
    newData.name = req.body.name;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl
    res.send(newData)
})



//showing user bulk update code here
app.patch('/user/bulk-update/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    const newData = users.find(user => user.id === Number(id))
    newData.id = id;
    newData.gender = req.body.gender;
    newData.name = req.body.name;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl
    res.send(newData)
})




//showing user delete code here
app.delete('/user/delete/:id', (req, res) => {
    const { id } = req.params;
    const newuser = users.filter(user => user.id !== Number(id))

    res.json(newuser)
})






app.all("*", (req, res) => {
    res.send('no routes found')
})
app.listen(port, () => {
    console.log('server is running consolelog');
})