const express = require('express');
const Form = require('../models/formSchema');
const  mongoose  = require('mongoose');
const router = express.Router();

router.get('/',async (req,res)=>{
    const data = await Form.find();
    res.send(data);
})

router.post('/submit', async (req,res)=>{
    const {sections} = req.body;
    console.log(sections);
    let data = [];
    var id = new mongoose.Types.ObjectId(); 
    for (let i = 0; i < sections.length; i++) {
        const newform = new Form ({
            name: sections[i].name,
            value: sections[i].value,
            description: sections[i].description,
            form_id : id
        });
        await newform.save();
        data.push(newform)
    }
    res.send(data);
});

module.exports = router