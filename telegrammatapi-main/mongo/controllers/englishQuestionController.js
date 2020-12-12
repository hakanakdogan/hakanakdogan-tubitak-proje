const QuestionEnglish = require("../models/englishQuestion");
const fs = require("fs");
const ydsSorularEnglish = JSON.parse(fs.readFileSync("quiz/ydsSorularEnglish.json"))



const postQuestionSingleEnglish = async (req , res , next) => {
    try{
        const info = req.body;
        const question = new QuestionEnglish({
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

const postQuestionManyEnglish = async (req , res, next) => {   
    try{
        
        const questions= await QuestionEnglish.create(ydsSorularEnglish);
        
        res.status(201).json({
            questions
        })
    }catch(err){
        res.json({
            err:err.message
        })
    }
}

const getQuestionEnglish = async(req, res ,next) => {
    try{
        const questions = await QuestionEnglish.find();
        res.status(200).json(questions);


    }catch(err){
        res.status(404).json({
            err:err
        })
    }
    
}


module.exports = {
    postQuestionSingleEnglish,
    postQuestionManyEnglish,
    getQuestionEnglish
}