const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    next(); 
}) 


app.use('/' ,routes)

let port = process.env.PORT || 2000
mongoose.connect('mongodb+srv://KamalNanda:kamal@cluster0.jpk3x.mongodb.net/Kabootr?retryWrites=true&w=majority' , {useNewUrlParser : true , useUnifiedTopology: true })
.then(()=> {
app.listen(port, ()=>{console.log(`A Node.Js API is linstening on port 2000`)})   
}).catch(err => console.log(err))


// app.listen(port, ()=>{console.log(`A Node.Js API is linstening on port 2000`)})
