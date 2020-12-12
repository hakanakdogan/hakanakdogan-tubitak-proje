const express = require("express");
const connectDataBase = require("./helpers/connectDataBase");
const dotenv =require("dotenv");
const router = require("./routers/index");







dotenv.config({
    path:"./config/env/config.env"
});

const PORT = 5000 || process.env.PORT;
connectDataBase();

const app = express();

app.use(express.json());

app.use("/telegramApi" ,router);







app.listen(PORT , () => {
    console.log(`Server active and running on port : ${PORT}`);
})