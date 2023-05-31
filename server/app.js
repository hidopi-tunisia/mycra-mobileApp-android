const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require("./Employee")
require("./User")

// attributs
const Employee = mongoose.model("employee")
const User = mongoose.model("user")

// Connexion à la base de données
app.use(bodyParser.json())

const mongURI = "mongodb+srv://hidopi:SsTxf6X4b0pCcYSB@mycraclusterdev.hu0dhsd.mongodb.net/"
mongoose.connect(mongURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

mongoose.connection.on("connected",() =>{
    console.log("Connect Success")
})

mongoose.connection.on("error",(err) =>{
    console.log("error",err)
})

app.post('/send-data',(req,res) =>{
    const user = new User({
        email : req.body.email,
        password : req.body.password
    })
    user.save()
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})

app.get('/',(req,res) =>{
    User.find({})
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
      console.log(err)
  })
})

app.listen(3000,() =>{
    console.log("Listening on 3000")
})  
