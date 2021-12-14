module.exports.log = (req,res,next) =>{
  const {method,path,query,body} = req
  console.log(`${method} - ${path} - ${JSON.stringify(query)} - ${JSON.stringify(body)}`)
  next()
}
