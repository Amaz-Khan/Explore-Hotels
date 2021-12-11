import React from 'react'
import {Link} from "react-router-dom";
import HotelsTable from './HotelsTable';
import UsersTable from './UsersTable';
const Admin = () => {
    return (
        <div className='container mt-3' style={{minHeight:"85vh"}} >
            <h1 style={{textAlign:"center"}}>Welcome to Admin Dashboard</h1>

<Link to="/register">  <button class="btn btn-outline-dark my-2  my-sm-0 "  >Add New Hotel </button></Link> 


<HotelsTable />


<UsersTable />
        </div>
    )
}

export default Admin
