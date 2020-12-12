const QuestionRussian = require("../models/russianQuestion");
const fs = require("fs");
const ydsSorularRussian = JSON.parse(fs.readFileSync("quiz/ydsSorularRussian.json"))


const postQuestionSingleRussian = async (req , res , next) => {
    try{
        const info = req.body;
        const question = new QuestionRussian({
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

const postQuestionManyRussian = async (req , res, next) => {   
    try{
        
        const questions= await QuestionRussian.create(ydsSorularRussian);
        
        res.status(201).json({
            questions
        })
    }catch(err){
        res.json({
            err:err.message
        })
    }
}

const getQuestionRussian = async(req, res ,next) => {
    try{
        const questions = await QuestionRussian.find();
        res.status(200).json(questions);


    }catch(err){
        res.status(404).json({
            err:err
        })
    }
    
}


module.exports = {
    postQuestionSingleRussian,
    postQuestionManyRussian,
    getQuestionRussian
}