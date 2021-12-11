const mongoose = require("mongoose");

module.exports =   mongoose.connect("mongodb+srv://amaz:amaz@cluster0.jhts2.mongodb.net/hotels?retryWrites=true&w=majority" , {
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
    
}).then(()=>{
    console.log("Database connected successfully")
}).catch((err)=>{
    console.log("there is an error"  , err)
})