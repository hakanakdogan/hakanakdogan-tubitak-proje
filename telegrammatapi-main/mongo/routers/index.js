const express = require("express");
const router = express.Router();
const {
    postQuestionSingleRussian,
    postQuestionManyRussian,
    getQuestionRussian
    } = require("../controllers/russianQuestionController");

const {
    postQuestionSingleEnglish,
    postQuestionManyEnglish,
    getQuestionEnglish
    } = require("../controllers/englishQuestionController");

const {
    postQuestionSingleGerman,
    postQuestionManyGerman,
    getQuestionGerman
    } = require("../controllers/germanQuestionController");

const {
    postQuestionSingleFrench,
    postQuestionManyFrench,
    getQuestionFrench
    } = require("../controllers/frenchQuestionController");


const {
    newUser,
    getUserById,
    updateCurrentQuestionEn,
    updateCurrentQuestionGe,
    updateCurrentQuestionFr,
    updateCurrentQuestionRu

    ,
    resetCurrentQuestionEn,
    resetCurrentQuestionGe,
    resetCurrentQuestionFr,
    resetCurrentQuestionRu
} = require("../controllers/userController");





//Post Single Question Routers
router.post("/postSingleQuestionRussian" , postQuestionSingleRussian);
router.post("/postSingleQuestionEnglish" , postQuestionSingleEnglish);
router.post("/postSingleQuestionGerman" , postQuestionSingleGerman);
router.post("/postSingleQuestionFrench" , postQuestionSingleFrench);


//Post Many Questions Router
router.post("/postManyQuestionRussian" , postQuestionManyRussian);
router.post("/postManyQuestionEnglish" , postQuestionManyEnglish);
router.post("/postManyQuestionGerman" , postQuestionManyGerman);
router.post("/postManyQuestionFrench" , postQuestionManyFrench);



//Get Question Routers
router.get("/getQuestionRussian" , getQuestionRussian);
router.get("/getQuestionEnglish" , getQuestionEnglish);
router.get("/getQuestionGerman" , getQuestionGerman);
router.get("/getQuestionFrench" , getQuestionFrench);

//User Routers

    //New User
    router.post("/newUser" , newUser);
    //Get User
    router.get("/getUser/:id", getUserById);
    //Update Current Question
    router.patch("/updateCurrentQuestionEn/:id",updateCurrentQuestionEn);
    router.patch("/updateCurrentQuestionGe/:id",updateCurrentQuestionGe);
    router.patch("/updateCurrentQuestionFr/:id",updateCurrentQuestionFr);
    router.patch("/updateCurrentQuestionRu/:id",updateCurrentQuestionRu);
    // Reset Current Questiion Counter
    router.patch("/resetCurrentQuestionEn/:id",resetCurrentQuestionEn);
    router.patch("/resetCurrentQuestionGe/:id",resetCurrentQuestionGe);
    router.patch("/resetCurrentQuestionFr/:id",resetCurrentQuestionFr);
    router.patch("/resetCurrentQuestionRu/:id",resetCurrentQuestionRu);


module.exports = router;
