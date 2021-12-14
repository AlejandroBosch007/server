const rateLimit = require("express-rate-limit");


module.exports.log = (req,res,next) =>{
  const {method,path,query,body} = req
  console.log(`${method} - ${path} - ${JSON.stringify(query)} - ${JSON.stringify(body)}`)
  next()
}



module.exports.limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Ha exedido el límite de peticiones"
})

