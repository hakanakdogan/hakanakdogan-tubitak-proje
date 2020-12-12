const QuestionFrench = require("../models/frenchQuestion");
const fs = require("fs");
const ydsSorularFrench = JSON.parse(fs.readFileSync("quiz/ydsSorularFrench.json"))

//Post Question Single
const postQuestionSingleFrench = async (req , res , next) => {
    try{
        const info = req.body;
        const question = new QuestionFrench({
            ...info
        })

        await question.save();

        res.status(201).json({
            question
        })
    }catch(err){
        res.json({
            err:err
        })
    }
}
//Post Question Many
const postQuestionManyFrench = async (req , res, next) => {   
    try{
        
        const questions= await QuestionFrench.create(ydsSorularFrench);
        
        res.status(201).json({
            questions
        })
    }catch(err){
        res.json({
            err:err.message
        })
    }
}

// Get Question
const getQuestionFrench = async(req, res ,next) => {
    try{
        const questions = await QuestionFrench.find();
        res.status(200).json(questions);


    }catch(err){
        res.status(404).json({
            err:err
        })
    }
    
}

module.exports = {
    postQuestionSingleFrench,
    postQuestionManyFrench,
    getQuestionFrench

}