const express = require('express');
const Model = require('../models/model');

const router = express.Router()

router.get('/getAll',async(req,res)=>{
    try{
        const data = await Model.find();
        res.status(200).json({message:"Success",data: data})
    }
    catch(error){
        res.status(500).json({message:"Some error occured!", errorMsg : error.message})
    }
});

router.get('/get',(req,res)=>{
    res.send('Aur bhai ynha v aa gya')
});

router.post('/signup', async(req, res)=>{
    const data = new Model({
        name: req.body.name,
        email:req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
        age: req.body.age
    })

    try{
        const dataToSave = await data.save()
        res.status(200).json({message:"Your Data saved successfully!", data: dataToSave})
    }catch(error){
        res.status(400).json({message: "Sorry! Some error occured. Please try again!", errorMsg: error.message})
    }
});

module.exports = router;