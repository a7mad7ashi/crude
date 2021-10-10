
module.exports.homeRoute = (req,res)=>{
 res.render('index')
}

module.exports.add_userRoute =(req,res)=>{
    res.render('add_user')
}
module.exports.updateRoute= (req,res)=>{
    res.render('update_user')
}