 
 // İngilizce dışındaki dillere de getuserbyid, updatequestion ve reset questionları imlement et.




const Telegraf = require('telegraf')
const { Extra, Markup } = Telegraf

const Keyboard = require('telegraf-keyboard');
const {
    fetchQuestionsRussian,
    fetchQuestionsEnglish,
    fetchQuestionsGerman,
    fetchQuestionsFrench
} = require("../helpers/fetchQuestions");
const {
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
} = require("../helpers/userHelper");
const dotenv =require("dotenv");



dotenv.config({
    path:"./config/env/config.env"
});



const key = process.env.TELEGRAM_KEY;

const bot = new Telegraf(key);








let encounter = 0;
let gercounter = 0;
let frcounter = 0;
let rucounter=0;

const mainMenuKeyboard = (new Keyboard())
    .add('Test Seç','Yardım')
    

    bot.start((ctx) => {
        const info = ctx.message.chat; 
        ctx.reply(`Hoş Geldin ${info.first_name} ${info.last_name}, Bu bot İngilizce, Almanca, Fransızca ve Rusça dillerindeki bilgilerinizi test etmek için geliştirilmiştir. Botta göreceğiniz sorular ÖSYM\'nin yaptığı YDS sınavında çıkmış sorulardır. Lütfen başlamak için "Test Seç butonuna tıklayınız.`, mainMenuKeyboard.draw())
        
        postUser(info.id,info.first_name,info.last_name)
        // .then((res) => {
        //     console.log(res)
        // })
        .catch((er) => {
            console.log(er);
        })       
    })
    .hears('Yardım', (ctx) => {
        ctx.reply('Yardım texti', mainMenuKeyboard.draw())
    })
    .hears('Test Seç', ctx => {
        const keyboard = (new Keyboard())
        .add('YDS İngilizce', 'YDS Almanca')
        .add('YDS Rusça' , 'YDS Fransızca')
        
        
        ctx.reply('Test Seçiniz', keyboard.draw())
        
    })
    
    //********YDS İngilizce Soru************** 
    .hears('YDS İngilizce', (ctx) => {
        const info = ctx.message.chat; 
        getUserById(info.id)
        .then((data) => {
            encounter =data.data.current_question_english;
            const random =Math.floor(Math.random() * 4);
        
        
        
        fetchQuestionsEnglish()
        .then((quiz) => {
            const keyboard = (new Keyboard())
        .add('YDS İngilizce Yeni Soru','Test Seç')
        
        
        ctx.reply('Yeni soruya gidin ya da test seçin', keyboard.draw())
            if(quiz[encounter]!=undefined){
                ctx.replyWithQuiz(
                    `${quiz[encounter].question}`,
                    [`${quiz[encounter].answer[random%5]}`, `${quiz[encounter].answer[(random+1)%5]}`,`${quiz[encounter].answer[(random+2)%5]}`,`${quiz[encounter].answer[(random+3)%5]}`,`${quiz[encounter].answer[(random+4)%5]}`],
                    { 
                        correct_option_id: (-random+5)%5,
                        explanation:`Doğru cevap : ${quiz[encounter].answer[0]} Çünkü: ${quiz[encounter].explanation}`
                     }
                )
                
                   updateCurrentQuestionEn(info.id)
                //    .then((data) => {
                //        console.log(data);
                //    })
                   .catch((er) => {
                       console.log(er);
                   }) 
            }else{
                const keyboard = (new Keyboard())
             .add('Test Seç')
            
            
            ctx.reply('Test Bitti Lütfen Yeni Test Seçin', keyboard.draw())
            resetCurrentQuestionEn(info.id);
            }
            
        }).catch((er) => {
            
            const keyboard = (new Keyboard())
            .add('Test Seç')
            ctx.reply(`Bir Hata Oluştu : ${er}. Lütfen yeni bir test seçiniz.`, keyboard.draw())
        })
        
        

        })
        .catch((er) => {
            console.log(er);
        })
        
        
        
        
    })
    .hears('YDS İngilizce Yeni Soru', (ctx) => {
        const info = ctx.message.chat; 
        
        getUserById(info.id)
        .then((data) => {
            encounter =data.data.current_question_english;
            const random =Math.floor(Math.random() * 4);
        
            fetchQuestionsEnglish()
            .then((quiz) => {
                if(quiz[encounter]!= undefined){
                    ctx.replyWithQuiz(
                        `${quiz[encounter].question}`,
                        [`${quiz[encounter].answer[random%5]}`, `${quiz[encounter].answer[(random+1)%5]}`,`${quiz[encounter].answer[(random+2)%5]}`,`${quiz[encounter].answer[(random+3)%5]}`,`${quiz[encounter].answer[(random+4)%5]}`],
                        { correct_option_id: (-random+5)%5,
                            explanation:`Doğru cevap : ${quiz[encounter].answer[0]} Çünkü: ${quiz[encounter].explanation}` }
                      )
                      updateCurrentQuestionEn(info.id)
                    //   .then((data) => {
                    //       console.log(data);
                    //   })
                      .catch((er) => {
                          console.log(er);
                      }) 
                }else{
                    const keyboard = (new Keyboard())
                 .add('Test Seç')
                
                
                ctx.reply('Test Bitti Lütfen Yeni Test Seçin', keyboard.draw())
                resetCurrentQuestionEn(info.id);
        
                }
            }).catch((er) => {
                const keyboard = (new Keyboard())
                .add('Test Seç')
                ctx.reply(`Bir Hata Oluştu : ${er}. Lütfen yeni bir test seçiniz.`, keyboard.draw())
            })
            
        })
        .catch((er) => {
            console.log(er);
        })
        
        
        
        
    })
    
    // ******************YDS Almanca Soru*****************

    .hears('YDS Almanca', (ctx) => {
   
        const info = ctx.message.chat; 
        getUserById(info.id)
        .then((data) => {
            gercounter =data.data.current_question_german;
            const random =Math.floor(Math.random() * 4);
        
        
        
        fetchQuestionsGerman()
        .then((quiz) => {
            const keyboard = (new Keyboard())
        .add('YDS Almanca Yeni Soru','Test Seç')
        
        
        ctx.reply('Yeni soruya gidin ya da test seçin', keyboard.draw())
            if(quiz[gercounter]!=undefined){
                ctx.replyWithQuiz(
                    `${quiz[gercounter].question}`,
                    [`${quiz[gercounter].answer[random%5]}`, `${quiz[gercounter].answer[(random+1)%5]}`,`${quiz[gercounter].answer[(random+2)%5]}`,`${quiz[gercounter].answer[(random+3)%5]}`,`${quiz[gercounter].answer[(random+4)%5]}`],
                    { 
                        correct_option_id: (-random+5)%5,
                        explanation:`Doğru cevap : ${quiz[gercounter].answer[0]} Çünkü: ${quiz[gercounter].explanation}`
                     }
                )
                
                   updateCurrentQuestionGe(info.id)
                //    .then((data) => {
                //        console.log(data);
                //    })
                   .catch((er) => {
                       console.log(er);
                   }) 
            }else{
                const keyboard = (new Keyboard())
             .add('Test Seç')
            
            
            ctx.reply('Test Bitti Lütfen Yeni Test Seçin', keyboard.draw())
            resetCurrentQuestionGe(info.id);
            }
            
        }).catch((er) => {
            
            const keyboard = (new Keyboard())
            .add('Test Seç')
            ctx.reply(`Bir Hata Oluştu : ${er}. Lütfen yeni bir test seçiniz.`, keyboard.draw())
        })
        
        

        })
        .catch((er) => {
            console.log(er);
        })
        
       
    })
    
    
    .hears('YDS Almanca Yeni Soru', (ctx) => {      
        const info = ctx.message.chat; 
        
        getUserById(info.id)
        .then((data) => {
            gercounter =data.data.current_question_german;
            const random =Math.floor(Math.random() * 4);
        
            fetchQuestionsGerman()
            .then((quiz) => {
                if(quiz[gercounter]!= undefined){
                    ctx.replyWithQuiz(
                        `${quiz[gercounter].question}`,
                        [`${quiz[gercounter].answer[random%5]}`, `${quiz[gercounter].answer[(random+1)%5]}`,`${quiz[gercounter].answer[(random+2)%5]}`,`${quiz[gercounter].answer[(random+3)%5]}`,`${quiz[gercounter].answer[(random+4)%5]}`],
                        { correct_option_id: (-random+5)%5,
                            explanation:`Doğru cevap : ${quiz[gercounter].answer[0]} Çünkü: ${quiz[gercounter].explanation}` }
                      )
                      updateCurrentQuestionGe(info.id)
                    //   .then((data) => {
                    //       console.log(data);
                    //   })
                      .catch((er) => {
                          console.log(er);
                      }) 
                }else{
                    const keyboard = (new Keyboard())
                 .add('Test Seç')
                
                
                ctx.reply('Test Bitti Lütfen Yeni Test Seçin', keyboard.draw())
                resetCurrentQuestionGe(info.id);
        
                }
            }).catch((er) => {
                const keyboard = (new Keyboard())
                .add('Test Seç')
                ctx.reply(`Bir Hata Oluştu : ${er}. Lütfen yeni bir test seçiniz.`, keyboard.draw())
            })
            
        })
        .catch((er) => {
            console.log(er);
        })
             
    })
    
    //******************YDS Rusça Soru***********************

    .hears('YDS Rusça', (ctx) => {
        
        const info = ctx.message.chat; 
        getUserById(info.id)
        .then((data) => {
            rucounter =data.data.current_question_russian;
            const random =Math.floor(Math.random() * 4);
        
        
        
        fetchQuestionsRussian()
        .then((quiz) => {
            const keyboard = (new Keyboard())
        .add('YDS Rusça Yeni Soru','Test Seç')
        
        
        ctx.reply('Yeni soruya gidin ya da test seçin', keyboard.draw())
            if(quiz[rucounter]!=undefined){
                ctx.replyWithQuiz(
                    `${quiz[rucounter].question}`,
                    [`${quiz[rucounter].answer[random%5]}`, `${quiz[rucounter].answer[(random+1)%5]}`,`${quiz[rucounter].answer[(random+2)%5]}`,`${quiz[rucounter].answer[(random+3)%5]}`,`${quiz[rucounter].answer[(random+4)%5]}`],
                    { 
                        correct_option_id: (-random+5)%5,
                        explanation:`Doğru cevap : ${quiz[rucounter].answer[0]} Çünkü: ${quiz[rucounter].explanation}`
                     }
                )
                
                   updateCurrentQuestionRu(info.id)
                //    .then((data) => {
                //        console.log(data);
                //    })
                   .catch((er) => {
                       console.log(er);
                   }) 
            }else{
                const keyboard = (new Keyboard())
             .add('Test Seç')
            
            
            ctx.reply('Test Bitti Lütfen Yeni Test Seçin', keyboard.draw())
            resetCurrentQuestionRu(info.id);
            }
            
        }).catch((er) => {
            
            const keyboard = (new Keyboard())
            .add('Test Seç')
            ctx.reply(`Bir Hata Oluştu : ${er}. Lütfen yeni bir test seçiniz.`, keyboard.draw())
        })
        
        

        })
        .catch((er) => {
            console.log(er);
        })                       
    })
    
    
    .hears('YDS Rusça Yeni Soru', (ctx) => {
        
        const info = ctx.message.chat; 
        
        getUserById(info.id)
        .then((data) => {
            rucounter =data.data.current_question_russian;
            const random =Math.floor(Math.random() * 4);
        
            fetchQuestionsRussian()
            .then((quiz) => {
                if(quiz[rucounter]!= undefined){
                    ctx.replyWithQuiz(
                        `${quiz[rucounter].question}`,
                        [`${quiz[rucounter].answer[random%5]}`, `${quiz[rucounter].answer[(random+1)%5]}`,`${quiz[rucounter].answer[(random+2)%5]}`,`${quiz[rucounter].answer[(random+3)%5]}`,`${quiz[rucounter].answer[(random+4)%5]}`],
                        { correct_option_id: (-random+5)%5,
                            explanation:`Doğru cevap : ${quiz[rucounter].answer[0]} Çünkü: ${quiz[rucounter].explanation}` }
                      )
                      updateCurrentQuestionRu(info.id)
                    //   .then((data) => {
                    //       console.log(data);
                    //   })
                      .catch((er) => {
                          console.log(er);
                      }) 
                }else{
                    const keyboard = (new Keyboard())
                 .add('Test Seç')
                
                
                ctx.reply('Test Bitti Lütfen Yeni Test Seçin', keyboard.draw())
                resetCurrentQuestionRu(info.id);
        
                }
            }).catch((er) => {
                const keyboard = (new Keyboard())
                .add('Test Seç')
                ctx.reply(`Bir Hata Oluştu : ${er}. Lütfen yeni bir test seçiniz.`, keyboard.draw())
            })
            
        })
        .catch((er) => {
            console.log(er);
        })
        
    })
    
   
   
   
    // *****************************YDS French Question****************************
    .hears('YDS Fransızca', (ctx) => {
        const info = ctx.message.chat; 
        getUserById(info.id)
        .then((data) => {
            frcounter =data.data.current_question_french;
            const random =Math.floor(Math.random() * 4);
        
        
        
        fetchQuestionsFrench()
        .then((quiz) => {
            const keyboard = (new Keyboard())
        .add('YDS Fransızca Yeni Soru','Test Seç')
        
        
        ctx.reply('Yeni soruya gidin ya da test seçin', keyboard.draw())
            if(quiz[frcounter]!=undefined){
                ctx.replyWithQuiz(
                    `${quiz[frcounter].question}`,
                    [`${quiz[frcounter].answer[random%5]}`, `${quiz[frcounter].answer[(random+1)%5]}`,`${quiz[frcounter].answer[(random+2)%5]}`,`${quiz[frcounter].answer[(random+3)%5]}`,`${quiz[frcounter].answer[(random+4)%5]}`],
                    { 
                        correct_option_id: (-random+5)%5,
                        explanation:`Doğru cevap : ${quiz[frcounter].answer[0]} Çünkü: ${quiz[frcounter].explanation}`
                     }
                )
                
                   updateCurrentQuestionFr(info.id)
                //    .then((data) => {
                //        console.log(data);
                //    })
                   .catch((er) => {
                       console.log(er);
                   }) 
            }else{
                const keyboard = (new Keyboard())
             .add('Test Seç')
            
            
            ctx.reply('Test Bitti Lütfen Yeni Test Seçin', keyboard.draw())
            resetCurrentQuestionFr(info.id);
            }
            
        }).catch((er) => {
            
            const keyboard = (new Keyboard())
            .add('Test Seç')
            ctx.reply(`Bir Hata Oluştu : ${er}. Lütfen yeni bir test seçiniz.`, keyboard.draw())
        })
        
        

        })
        .catch((er) => {
            console.log(er);
        }) 
        
        
        
    })
    
    
    .hears('YDS Fransızca Yeni Soru', (ctx) => {
        
        const info = ctx.message.chat; 
        
        getUserById(info.id)
        .then((data) => {
            frcounter =data.data.current_question_french;
            const random =Math.floor(Math.random() * 4);
        
            fetchQuestionsFrench()
            .then((quiz) => {
                if(quiz[frcounter]!= undefined){
                    ctx.replyWithQuiz(
                        `${quiz[frcounter].question}`,
                        [`${quiz[frcounter].answer[random%5]}`, `${quiz[frcounter].answer[(random+1)%5]}`,`${quiz[frcounter].answer[(random+2)%5]}`,`${quiz[frcounter].answer[(random+3)%5]}`,`${quiz[frcounter].answer[(random+4)%5]}`],
                        { correct_option_id: (-random+5)%5,
                            explanation:`Doğru cevap : ${quiz[frcounter].answer[0]} Çünkü: ${quiz[frcounter].explanation}` }
                      )
                      updateCurrentQuestionFr(info.id)
                    //   .then((data) => {
                    //       console.log(data);
                    //   })
                      .catch((er) => {
                          console.log(er);
                      }) 
                }else{
                    const keyboard = (new Keyboard())
                 .add('Test Seç')
                
                
                ctx.reply('Test Bitti Lütfen Yeni Test Seçin', keyboard.draw())
                resetCurrentQuestionFr(info.id);
        
                }
            }).catch((er) => {
                const keyboard = (new Keyboard())
                .add('Test Seç')
                ctx.reply(`Bir Hata Oluştu : ${er}. Lütfen yeni bir test seçiniz.`, keyboard.draw())
            })
            
        })
        .catch((er) => {
            console.log(er);
        })
        
    })
    
    
    

bot.launch()





































