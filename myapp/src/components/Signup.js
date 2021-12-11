import React ,{useState , useContext} from 'react'

import AuthContext from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  toast.configure();


const Signup = () => {


  const context = useContext(AuthContext);

  console.log(context);


  const {  registerUser  , isuserRegistereed} = context;

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const submitData = () => {

      registerUser(name , email , password);

setname("")
setemail("")
setpassword("")

 
    }


    return (
        <div className="container  mt-5" style={{minHeight:"84vh"   }}>
            
            <h1 className="mb-3">Create a New Account</h1>
            
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" onChange={(e)=>{setname(e.target.value)}}  value={name} id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" class="form-control"onChange={(e)=>{setemail(e.target.value)}}   value={email} id="exampleInputPassword1" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}  class="form-control" id="exampleInputPassword1" />
  </div>

  <button  onClick={submitData} class="btn btn-dark">Register</button>



        </div>
    )
}

export default Signup




