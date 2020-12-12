const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const QuestionFrench = new Schema({
    question : {
        type:String,
        required:true,
        unique:true

    },
    answer:{
        type:Array,
        required:true
    },
    lang:{
        type:String,
        default:"French"
    },
    explanation:{
        type:String,
        default:"No Explanation Avaible For This Question"
    }
})



module.exports = mongoose.model("FrenchQuestion" , QuestionFrench);