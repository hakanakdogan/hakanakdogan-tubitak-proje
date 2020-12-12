const QuestionGerman = require("../models/germanQuestion");
const fs = require("fs");
const ydsSorularGerman = JSON.parse(fs.readFileSync("quiz/ydsSorularGerman.json"))



const postQuestionSingleGerman = async (req , res , next) => {
    try{
        const info = req.body;
        const question = new QuestionGerman({
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

const postQuestionManyGerman = async (req , res, next) => {   
    try{
        
        const questions= await QuestionGerman.create(ydsSorularGerman);
        
        res.status(201).json({
            questions
        })
    }catch(err){
        res.json({
            err:err.message
        })
    }
}

const getQuestionGerman = async(req, res ,next) => {
    try{
        const questions = await QuestionGerman.find();
        res.status(200).json(questions);


    }catch(err){
        res.status(404).json({
            err:err
        })
    }
    
}


module.exports = {
    postQuestionSingleGerman,
    postQuestionManyGerman,
    getQuestionGerman
}