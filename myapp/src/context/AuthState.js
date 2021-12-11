import AuthContext from "./AuthContext";

import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  toast.configure();



const AuthState = (props) => {
  const host = "http://localhost:3001";

  const history = useHistory();

  const [users, setusers] = useState([]);
  const [isuserRegistereed, setisuserRegistered] = useState(true);

  const registerUser = async (name , email , password)=>{

    const obj = {
        name: name,
        email: email,
        password: password,
      };

try {
  const response = await fetch(`${host}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),  
  });
  const json = await response.json(); // parses JSON response into native JavaScript objects

  console.log(json);


if(!json.result){

    toast.error("SomeThing went wrong.", {
      autoClose: 20000,
      position: toast.POSITION.TOP_CENTER,
    });


}else{

    toast.success("Your Account has been created Successfully.", {
        autoClose: 20000,
        position: toast.POSITION.TOP_CENTER,
      });
  
  
    

}


} catch (err) {
  console.log(err);
}


  }
  const loginUser = async (email , password)=>{

    const obj = {
      
        email: email,
        password: password,
      };

try {
  const response = await fetch(`${host}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),  
  });
  const json = await response.json(); // parses JSON response into native JavaScript objects

  console.log(json);

  if(!json.success ){
    toast.error("Invalid Credentials.", {
        autoClose: 20000,
        position: toast.POSITION.TOP_CENTER,
      });
  }else{


    localStorage.setItem("authToken"  , json.authToken);
      history.push("/Dashboard");


  }






} catch (err) {
  console.log(err);
}


  }

  const fetchAllUsers = async ()=>{



    
try {
    
    
    const response = await fetch(`${host}/getallusers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
  
    console.log(json);
  

setusers(json);


  }catch(err){

    console.log(err);

  }

}

  return (
    <AuthContext.Provider
      value={{
          registerUser,
          loginUser,
          fetchAllUsers,
          users,
          isuserRegistereed
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;