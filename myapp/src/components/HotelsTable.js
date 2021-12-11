import React , {useContext ,  useEffect} from 'react'

import HotelContext from '../context/HotelContext';

const HotelsTable = () => {




    const context = useContext(HotelContext);

    const { getHotels , hotels} = context;

    useEffect(()=>{


        getHotels()

    } , [])

    console.log(hotels);

    return (
        <div className="mt-3 mb-3">
            

            <h3 className='mt-3 mb-3'>Registered Hotels</h3>

            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Hotel Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>



{
    hotels.map((item)=>{

        return (

            <tr>
            <th scope="row">1</th>
            <td>{item.hotelname}</td>
            <td>{item.address}</td>
            <td>{item.phone}</td>
          </tr>
      

        )

    })
}



  </tbody>
</table>



        </div>
    )
}

export default HotelsTable
