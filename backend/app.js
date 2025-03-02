const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('./config/db')
const formRoute = require('./routes/formRoute')

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("node is running")
});

app.use('/api/form',formRoute)

app.listen(5000,()=>{
    console.log('server running on 5000');
    
})