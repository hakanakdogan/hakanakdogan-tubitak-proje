const fetch = require("node-fetch");

//***********POST USER************* */
const postUser = async (user_id,first_name,last_name) => {
    const body = {
        user_id,
        first_name,
        last_name
        
    }

    const user = await fetch("https://akdogan-telegrammatapi.herokuapp.com/telegramApi/newUser", {
        method:'post',
        body:JSON.stringify(body),
        headers:{'Content-Type':'application/json'}
    })

    const data = await user.json();

    return data;
}
//************GET USER***********
const getUserById = async (user_id) => {
    const user = await fetch(`https://akdogan-telegrammatapi.herokuapp.com/telegramApi/getUser/${user_id}`);
    const data = user.json();

    return data;
}
// **************UPDATE QUESTION*********************
const updateCurrentQuestionEn = async (user_id) => {
    const update = await fetch(`https://akdogan-telegrammatapi.herokuapp.com/telegramApi/updateCurrentQuestionEn/${user_id}`,
    {
        method:"patch",
        headers:{'Content-Type':'application/json'}
    });
    const data = update.json();
    return data;
    
}
const updateCurrentQuestionGe = async (user_id) => {
    const update = await fetch(`https://akdogan-telegrammatapi.herokuapp.com/telegramApi/updateCurrentQuestionGe/${user_id}`,
    {
        method:"patch",
        headers:{'Content-Type':'application/json'}
    });
    const data = update.json();
    return data;
    
}
const updateCurrentQuestionFr = async (user_id) => {
    const update = await fetch(`https://akdogan-telegrammatapi.herokuapp.com/telegramApi/updateCurrentQuestionFr/${user_id}`,
    {
        method:"patch",
        headers:{'Content-Type':'application/json'}
    });
    const data = update.json();
    return data;
    
}
const updateCurrentQuestionRu = async (user_id) => {
    const update = await fetch(`https://akdogan-telegrammatapi.herokuapp.com/telegramApi/updateCurrentQuestionRu/${user_id}`,
    {
        method:"patch",
        headers:{'Content-Type':'application/json'}
    });
    const data = update.json();
    return data;
    
}


// ***************** RESET QUESTION COUNTER**********************

const resetCurrentQuestionEn = async (user_id) => {
    const update = await fetch(`https://akdogan-telegrammatapi.herokuapp.com/telegramApi/resetCurrentQuestionEn/${user_id}`,
    {
        method:"patch",
        headers:{'Content-Type':'application/json'}
    });
}
const resetCurrentQuestionGe = async (user_id) => {
    const update = await fetch(`https://akdogan-telegrammatapi.herokuapp.com/telegramApi/resetCurrentQuestionGe/${user_id}`,
    {
        method:"patch",
        headers:{'Content-Type':'application/json'}
    });
}
const resetCurrentQuestionFr = async (user_id) => {
    const update = await fetch(`https://akdogan-telegrammatapi.herokuapp.com/telegramApi/resetCurrentQuestionFr/${user_id}`,
    {
        method:"patch",
        headers:{'Content-Type':'application/json'}
    });
}
const resetCurrentQuestionRu = async (user_id) => {
    const update = await fetch(`https://akdogan-telegrammatapi.herokuapp.com/telegramApi/resetCurrentQuestionRu/${user_id}`,
    {
        method:"patch",
        headers:{'Content-Type':'application/json'}
    });
}

module.exports = {
    postUser,
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