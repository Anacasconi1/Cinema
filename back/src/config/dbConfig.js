require("dotenv").config();

const mongoose = require("mongoose");


const dbConfig = async() =>{
    try {
        await mongoose.connect(process.env.DB_URI);
    } catch (error) {
        console.error("no es posible acceder a la base de datos")
    }
}


module.exports=dbConfig;