
import HotelContext from "./HotelContext";

import React from "react";

import { useState } from "react";
const HotelState = (props) => {
  const host = "http://localhost:3001";

  const hostelInitialState = [];


const [hotels, sethotels] = useState(hostelInitialState);

const getHotels = async () => {
    const response = await fetch(`${host}/fetchhotels`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

    console.log(json);
    sethotels(json);
  };






  return (
    <HotelContext.Provider
      value={{
getHotels,
hotels
      }}
    >
      {props.children}
    </HotelContext.Provider>
  );
};

export default HotelState;