const express = require ("express");
const dotenv = require('dotenv');
const morgan = require ("morgan");
const bodyParser = require ('body-parser')

const path = require ('path');
const router = require('./server/routes/router')
const connectDB = require ('./server/database/connection')


const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'))
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}))


//DB connectio
connectDB()


// parse request to body parser





//load router
app.use(router)



//set view engine
app.set("view engine","ejs")

//load
app.use('/css', express.static(path.resolve(__dirname,'assets/css')))
app.use('/img', express.static(path.resolve(__dirname,'assets/img')))
app.use('/js', express.static(path.resolve(__dirname,'assets/js')))








app.listen(PORT ,()=>{
    console.log(`server is running on http:..localhost:${PORT}`)
})
