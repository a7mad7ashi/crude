const userdb = require('../model/model')

// create and save new user

module.exports.getRegister = (req, res) => {
    res.render("register");
  };
module.exports.create = (req,res)=>{
    //validate request 
    console.log("lllllllllllllllllllllllllllllllllllllll")
    console.log(req.body)
    if(!req.body){
        console.log(req.body)
        res.status(400).send({message: "content can not be empty!"})
        console.log("lllllllllllllllllllllllllllllllllllllll")
    console.log(req.body)
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
        res.send(data)
    })
    .catch(err =>{
     res.status(500).send({message: err.message || "Some error occured while creating operation"})
    })
}
//retreve and return all users || retreive and return a single user
module.exports.find = (req,res)=>{

}
// update anew identified user
module.exports.update =(req,res)=>{

}
//delete auser with a specified user id
module.exports.Delete = (req,res)=>{

}