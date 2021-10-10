const express = require('express');
const route = express.Router()
const renderService = require('../services/render')


route.get('/', renderService.homeRoute)
route.get('/add-user',(req,res)=>{
    res.render("add_user")
})
route.get('/updateUser',(req,res)=>{
    res.render("update_user")
})
module.exports = route