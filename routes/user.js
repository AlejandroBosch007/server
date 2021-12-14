const validate = require("../middlewares/midd.user")

module.exports = (app) => {
    app.get('/user', (req,res)=>{
        res.send("user")      
    })
    app.post('/login', validate.chkLogin, (req,res)=>{
        let user = req.body
        res.send(user)
    })
}