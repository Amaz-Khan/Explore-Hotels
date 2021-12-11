import React , {useState , useContext} from 'react'

import AuthContext from '../context/AuthContext';

const Login = () => {

    const context = useContext(AuthContext);

    const {loginUser} = context;
    

    
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const login = ()=>{

        loginUser(email , password);

        setemail("");
        setpassword("");

    }


    return (

        <div className="container  mt-5" style={{minHeight:"84vh"   }}>
            
        <h1 className="mb-3">Login to Your Account</h1>
        
<div class="form-group">
<label for="exampleInputPassword1">Email</label>
<input type="email" class="form-control"onChange={(e)=>{setemail(e.target.value)}}   value={email} id="exampleInputPassword1" />
<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
<label for="exampleInputPassword1">Password</label>
<input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}  class="form-control" id="exampleInputPassword1" />
</div>

<button  class="btn btn-dark" onClick={login}>Login</button>



    </div>

    )
}

export default Login
