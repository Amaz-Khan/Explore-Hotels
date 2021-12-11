import React , {useContext , useEffect} from 'react'
import img1 from "../images/1.jpg"

import HotelContext from '../context/HotelContext'
const CardItems = () => {



  const context = useContext(HotelContext);


  const { getHotels , hotels} = context;

  
  useEffect(()=>{



    getHotels();





  } , [])


  console.log(hotels);


  return (
        <div className="container">


<h1  className="m-3"  style={{textAlign:"center"}}>Hotels</h1>
            


<div   style={{display:"flex" , flexWrap:"wrap" , justifyItems:"center" ,justifyContent:"center" }}>


{
  hotels.map((item)=>{

    return (



      
      
      <div class="card mb-5 m-3" style={{width: "18rem"}}>
  <img src={img1} class="card-img-top" alt="..." / >
  <div class="card-body">
    <h5 class="card-title">{item.hotelname}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
    
    </p>
    <p class="card-text">

{item.address}    
    </p>
    <p class="card-text">

{item.phone}    
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

  )


  })
}





</div>

        </div>
    )
}

export default CardItems
