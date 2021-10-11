const userdb = require('../model/model')

// create and save new user


module.exports.create = (req,res)=>{
    //validate request 
    if(!req.body){
        console.log(req.body)
        res.status(400).send({message: "content can not be empty!"})
        return
    }
    //new user
    const user = new userdb({
        name:req.body.name,
        email:req.body.email,
        gender: req.body.gender,
        status:req.body.status
    })
    //save user in DB
    user.save(user).then(data=>{
        res.redirect('/add-user')
    })
    .catch(err =>{
     res.status(500).send({message: err.message || "Some error occured while creating operation"})
    })
}
//retreve and return all users || retreive and return a single user
module.exports.find = (req,res)=>{
if (req.query.id)
{
    const id = req.query.id
    userdb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"not found user with id " + id})
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"error finding " + id})
    })
}

else{

    userdb.find().then(user=>{
        res.send(user)
    }).catch(err=>{
        res.status(500).send({message: err.message || "error occured while retriving user info"})
    })
}

}
// update anew identified user
module.exports.update =(req,res)=>{
   if (!req.body)
   {
       return res.status(400).send({message:"Data cannot be empty"})
   }
   const id = req.params.id
   userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
   .then(data=>{
       if(!data){
           res.status(404).send({message:`cannot update user with ${id}. maybe user ot found `})
       }else{
           res.send(data)
       }
   }).catch(err=>{
    res.status(500).send({message: "Error Update user info"})
})
}
//delete auser with a specified user id
module.exports.Delete = (req,res)=>{
    const id = req.params.id
    userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(500).send({message:`cannot delete with ${id}. Maybe id is not found`})
        }
        else{
            res.send({message:"user was deleted successfully"})
        }
        
    }).catch(err=>{
        res.status(500).send({message:"couldnot delete " + id})
    })

}