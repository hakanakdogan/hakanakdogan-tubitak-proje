const fetch = require("node-fetch");



const fetchQuestionsRussian = async() => {
    const rawData = await fetch("https://akdogan-telegrammatapi.herokuapp.com/telegramApi/getQuestionRussian");
    const json = await rawData.json();

    return json;
}

const fetchQuestionsEnglish = async() => {
    const rawData = await fetch("https://akdogan-telegrammatapi.herokuapp.com/telegramApi/getQuestionEnglish");
    const json = await rawData.json();

    return json;
}

const fetchQuestionsGerman = async() => {
    const rawData = await fetch("https://akdogan-telegrammatapi.herokuapp.com/telegramApi/getQuestionGerman");
    const json = await rawData.json();

    return json;
}

const fetchQuestionsFrench = async() => {
    const rawData = await fetch("https://akdogan-telegrammatapi.herokuapp.com/telegramApi/getQuestionFrench");
    const json = await rawData.json();

    return json;
}

module.exports = {
    fetchQuestionsRussian,
    fetchQuestionsEnglish,
    fetchQuestionsGerman,
    fetchQuestionsFrench

    
}