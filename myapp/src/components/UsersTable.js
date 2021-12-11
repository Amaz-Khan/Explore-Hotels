import React , {useContext , useEffect , useState} from 'react'


import AuthContext from "../context/AuthContext";

const UsersTable = () => {

    const context = useContext(AuthContext);


    const { fetchAllUsers , users } = context;


    useEffect(()=>{


fetchAllUsers();


    } , [])


    console.log(users);

    const [listusers, setuserlist] = useState(users)

    return (
        <div className="mt-3 mb-3">
            <h3 className='mt-3 mb-3'>Registered Users</h3>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>


{
    console.log(listusers.fetchUsers)
}


  <tbody>





  </tbody>
</table>





        </div>
    )
}

export default UsersTable
