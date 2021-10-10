const express = require('express');
const route = express.Router()
const renderService = require('../services/render')
const controller = require('../controller/controller')


route.get('/', renderService.homeRoute)
route.get('/add-user', renderService.add_userRoute)
route.get('/updateUser',renderService.updateRoute)


route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.Delete)


module.exports = route