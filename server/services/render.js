const axios = require ('axios')
module.exports.homeRoute = (req,res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index' ,{users:response.data})
    }).catch(err=>{
        res.send(err)
    })
}

module.exports.add_userRoute =(req,res)=>{
    res.render('add_user')
}
// module.exports.updateRoute= (req,res)=>{
//     axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
//     .then(function(userdata){
//         console.log("llllllllllllllllllllllllll",userdata)

//         res.render('update_user',{ user : userdata.data})
//     }).catch(err=>{
//         res.send(err)
//     })
    
// }

exports.updateRoute = (req, res) =>{
   
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user" ,{user:userdata.data})
           // res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}