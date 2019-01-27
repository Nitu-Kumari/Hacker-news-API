const express = require('express');
const Controller=require('./Controller');
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/login',Controller.addLogin);
app.post('/registration',Controller.addRegistration);




app.listen(5000,()=>console.log('sever started'));

