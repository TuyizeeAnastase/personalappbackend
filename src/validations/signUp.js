import Joi from 'joi';

export const signUp=async(req,res,next)=>{
    const validIn=Joi.object({
    firstname:Joi.string().min(3).max(15).required(),
    lastname:Joi.string().min(3).max(15).required(),
    email:Joi.string().email().required(),
    gender:Joi.string().min(3).max(10).required(),
    role:Joi.string().min(3).max(10).required(),
    adress:Joi.string().min(3).max(20).required(),
    password:Joi.string().min(7).required(),
    confirmpassword:Joi.string().min(7).required(),
    });
    const request=validIn.validate(req.body);
    if(request.error){
        let message, error=request.error.details[0].message;
        return res.status(400).json({
            message:error.replace(/"/g,"")
        });
    };
    next();
}
