const mongoose = require("mongoose");


const hotelsSchema = new   mongoose.Schema({


    hotelname:{

        type:String,
        required:true,
    },

    address:{
        type:String ,
        required:true,
    },

    phone:{
        type:String,
        required:true,
    }





});


const hotels = mongoose.model("hotels"  , hotelsSchema);

module.exports = hotels;

