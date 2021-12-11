const express = require("express")
const PORT = 3001 || process.env.PORT;

const users = require("./models/users")
const hotels = require("./models/hotels")
const jwt = require("jsonwebtoken");
const cors = require('cors');
const app = express();

require("./dbCon");



app.use(express.json());
app.use(cors());
app.get("/" , (req, res) =>{

    res.send("hello world");
})


app.post("/register" , async (req, res) =>{

    
let result = true;
    try{



        const user = new users(req.body);

    const userRegister = await user.save();

    res.json({userRegister , result});

}catch(error){

    result = false;
    res.json(result);
}



})

app.post("/login" , async (req, res) =>{

    let success = true;



const { email , password}  = req.body;
    try{



        const user = await users.findOne({email});

        
        if(user){


            if(user.password == password){
                console.log("you have logged in");


                const data = {
                    user: {
                      id: user._id,
                    },
                  };


                  const authToken = await jwt.sign(data, "AmazIsaDeveloper");
                   success = true;
                  res.json({ success, authToken });

            }else{
                success=false;
                res.json({ success})
            }

        }else{



            res.json(success)
        }



}catch(error){

    result = false;
    res.json(result);
}



})



app.get("/getallusers", async (req, res)=>{

    try{
        const fetchUsers = await users.find();


        res.json(fetchUsers)


    }catch(error){


     console.log(error)
    }






})



// Hostels Routes







app.post("/addhotels" , async (req, res) =>{

    

    try{



        const hotel = new hotels(req.body);

    const hotelRegister = await hotel.save();

    res.json(hotelRegister);

}catch(error){
    console.log(error)
}



})

app.get("/fetchhotels" , async (req, res) =>{

    

    try{


  const fetchhotels = await hotels.find();


    res.json(fetchhotels);

}catch(error){
    console.log(error)
}



})





app.listen(PORT , ()=>{
    console.log("server is running at port 3001");
})