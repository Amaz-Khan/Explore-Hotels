import React from "react";
import {Link , useHistory } from "react-router-dom"
const Header = () => {

  const history = useHistory();

  const logout = () =>{

    localStorage.removeItem("authToken");

    history.push("/");


  }

    return(
        <div>
            <nav class="navbar navbar-dark bg-dark">
            <nav class="navbar navbar-expand-lg navbar-light bg-light, container" >
  <Link class="navbar-brand" to="/">Explore-Hotel</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/About">About <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/Contact">Contact <span class="sr-only">(current)</span></Link>
      </li>
    </ul>
    <div class="form-inline my-2 my-lg-0">
{

localStorage.getItem("authToken") ? 
  <button class="btn btn-outline-light my-2 mx-3 my-sm-0" onClick={logout} >Logout  </button> 

:     

<>
<Link to="/register">  <button class="btn btn-outline-light my-2 mx-3 my-sm-0" >Register </button></Link> 
<Link to="/signin">  <button class="btn btn-outline-light my-2  my-sm-0" >Sign in </button></Link> 

</>

}


    </div>
  </div>
</nav>
</nav>

        </div>
    )
}
export default Header;