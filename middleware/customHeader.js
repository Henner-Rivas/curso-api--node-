const customHeader=(req,res,next)=>{
    try {
   /*      const apikey= req.headers.api-key
        if(apikey === 12345){
            next();
        }else{
            res.status(403)
            res.send({err:"api_key_no_es_correcta"})
        } */
next()
        
    } catch (err) {
        res.status(403)
        res.send({error:"ALGO_OCURRIO_EN_EL_CUSTON"})
    }
  
}

module.exports= customHeader