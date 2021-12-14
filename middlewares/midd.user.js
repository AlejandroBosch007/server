const Joi = require('joi')
module.exports.chkLogin = async (req,res,next) => {
    try {
        await Joi.attempt(req.body, modeloLogin, "Los datos ingresados no son correctos para el login")
        return next()
    }catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
