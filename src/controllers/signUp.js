import models from '../database/models';

   const signUp=async (req,res)=>{
       try{
         const user=await models.User.create(req.body);
         return res.status(201).json({
             user
         })
       }catch(err){
         return res.status(500).json({error:err.message})
       }
   };

module.exports={
    signUp
};