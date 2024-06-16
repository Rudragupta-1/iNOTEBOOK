import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const host = "http://localhost:5000";
    const [credentials, setCredentials] = useState({ name:"",email: "", password: "" ,cpassword:""});
        let navigate=useNavigate();

    const handleSubmit = async (e) => {
     const {name,email,password}=credentials;
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name,email,password })
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //Save auth-token to the local storage
            localStorage.setItem('token',json.authtoken);
            //For Re-directing
           navigate('/');
        }
        else{
            alert("Invalid Credentials")
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  return (
    <div><form onSubmit={handleSubmit}>
      <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" name="name" onChange={onChange} aria-describedby="nameHelp" placeholder="Enter name" minLength={5} required/>
  </div>

  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" minLength={5} required/>
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" name='password' onChange={onChange} placeholder="Password" minLength={5} required/>
  </div>

  <div class="form-group">
    <label for="cpassword">Confirm Password</label>
    <input type="password" class="form-control" id="cpassword" name="cpassword" onChange={onChange} placeholder="Password" minLength={5} required/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form></div>
  )
}

export default Signup