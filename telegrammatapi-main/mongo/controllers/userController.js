const User = require("../models/user");

//************************NEW USER**********************

const newUser = async(req,res,next) => {
    const info = req.body;
    
    try{
    
        const user = new User({
            ...info
        })

        await user.save();

        res.status(201).send({
            success:true,
            data:user
        })


    }catch(er){
        res.status(400).send({
            success:false,
            message:er.message
        })
    }
}
// *******************GET USER***************************
const getUserById = async (req,res,next) => {
    try{
        const id = req.params.id;
        const user = await User.findOne({
            user_id:id
        });
        
        res.status(200).json({
            success:true,
            data:user
        })
    }catch(er){
        res.status(404).json({
            success:false,
            message:er.message
        })
    }
}

//********************UPDATE QUESTION****************** */
const updateCurrentQuestionEn = async (req,res,next) => {
   try{ const id = req.params.id;
    const user = await User.update({
        user_id:id
    },{$inc:{"current_question_english":1}});
    res.status(200).json({
        success:true,
        data:user
    })
   }catch(er){
       res.status(400).json({
           success:false,
           message:er.message

       })
   }
    
    
}
const updateCurrentQuestionGe = async (req,res,next) => {
    try{ const id = req.params.id;
     const user = await User.update({
         user_id:id
     },{$inc:{"current_question_german":1}});
     res.status(200).json({
         success:true,
         data:user
     })
    }catch(er){
        res.status(400).json({
            success:false,
            message:er.message
 
        })
    }
     
     
 }
 const updateCurrentQuestionFr = async (req,res,next) => {
    try{ const id = req.params.id;
     const user = await User.update({
         user_id:id
     },{$inc:{"current_question_french":1}});
     res.status(200).json({
         success:true,
         data:user
     })
    }catch(er){
        res.status(400).json({
            success:false,
            message:er.message
 
        })
    }
     
     
 }
 const updateCurrentQuestionRu = async (req,res,next) => {
    try{ const id = req.params.id;
     const user = await User.update({
         user_id:id
     },{$inc:{"current_question_russian":1}});
     res.status(200).json({
         success:true,
         data:user
     })
    }catch(er){
        res.status(400).json({
            success:false,
            message:er.message
 
        })
    }
     
     
 }
 //**********************RESET QUESTION COUNTER******************** */

 const resetCurrentQuestionEn = async (req, res, next) => {
     try{
        const id = req.params.id;
        const user = await User.update({
            user_id:id
        },{$set:{"current_question_english":0}})
        res.status(200).json({
            success:true,
            messsage:"Counter reset successfull"
            
        })
     }catch(er){
        res.status(404).json({
            success:false,
            message:er.message
        })
     }
 }

 const resetCurrentQuestionGe = async (req, res, next) => {
    try{
       const id = req.params.id;
       const user = await User.update({
           user_id:id
       },{$set:{"current_question_german":0}})
       res.status(200).json({
           success:true,
           messsage:"Counter reset successfull"
           
       })
    }catch(er){
       res.status(404).json({
           success:false,
           message:er.message
       })
    }
}
const resetCurrentQuestionFr = async (req, res, next) => {
    try{
       const id = req.params.id;
       const user = await User.update({
           user_id:id
       },{$set:{"current_question_french":0}})
       res.status(200).json({
           success:true,
           messsage:"Counter reset successfull"
           
       })
    }catch(er){
       res.status(404).json({
           success:false,
           message:er.message
       })
    }
}
const resetCurrentQuestionRu = async (req, res, next) => {
    try{
       const id = req.params.id;
       const user = await User.update({
           user_id:id
       },{$set:{"current_question_russian":0}})
       res.status(200).json({
           success:true,
           messsage:"Counter reset successfull"
           
       })
    }catch(er){
       res.status(404).json({
           success:false,
           message:er.message
       })
    }
}

module.exports = {
    newUser,
    getUserById,
    updateCurrentQuestionEn,
    updateCurrentQuestionGe,
    updateCurrentQuestionFr,
    updateCurrentQuestionRu,
    resetCurrentQuestionEn,
    resetCurrentQuestionGe,
    resetCurrentQuestionFr,
    resetCurrentQuestionRu
}