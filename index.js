const express = require('express')
const cors = require('cors')
const Users = require('./models/users.models')
const { initializeConnection } = require('./db/db.connect')
const app = express();
const corOpt = {
    origin: "*",
    credentials: true
}

initializeConnection();

app.use(express.json())
app.use(cors(corOpt))


app.get('/', async (req, res) => {
    res.send("Express server is live.")
})

app.get('/users', async (req, res) => {
    try {
        const users = await Users.find();

        if(!users){
            res.status(404).json({message: "Users not found."})
        }

        res.status(200).json(users)
    } catch (err){
        res.status(500).json({error: "Internal server error: ", err})
    }
})


app.post('/users', async (req, res) => {
    try {
        const details = req.body;
        const savedDetails = []

        for(let data of details){
            const newUsers = new Users(data);
            const saveUsers = await newUsers.save();
            savedDetails.push(saveUsers)
        }

        if(!savedDetails){
            res.status(404).json({message: "Users not found failed to save details."})
        }

        res.status(200).json(savedDetails)
    } catch (err) {
        res.status(500).json({error: "Internal server error: ", err})
    }
})


app.post('/user', async (req, res) => {
    try {
        const data = req.body;

        const newUsers = new Users(data);
        const saveUsers = await newUsers.save();

        if(!saveUsers){
            res.status(404).json({message: "Users not found failed to save details."})
        }

        res.status(200).json(saveUsers)
    } catch (err) {
        res.status(500).json({error: "Internal server error: ", err})
    }
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})