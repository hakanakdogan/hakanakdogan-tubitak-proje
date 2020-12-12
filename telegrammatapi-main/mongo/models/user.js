const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
    user_id:{
        type:String,
        required:true,
        unique:true
    },
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    current_question_english:{
        type:Number,
        required:true,
        default:0
    },
    current_question_german:{
        type:Number,
        required:true,
        default:0
    },
    current_question_french:{
        type:Number,
        required:true,
        default:0
    },
    current_question_russian:{
        type:Number,
        required:true,
        default:0
    }
})


module.exports = mongoose.model("User",User);