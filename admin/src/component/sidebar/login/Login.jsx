import React,{useState,useEffect} from 'react'
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import './login.css'
import Swal from "sweetalert2"
export const Login = () => {
    // console.log(l);
    const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loginStatus, setLoginStatus] = useState("");
  let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }
    Axios.defaults.withCredentials = true;
  const login = (e)=>{
    e.preventDefault()
    var params = {email:email,password:password}
    Axios.post(`http://localhost:5000/admin/login`,params,config)
    .then(result=>{
        console.log(result);
if(result.data.message){
    console.log(result.data.message,"helllo");
    setLoginStatus(result.data.message)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Wrong email or pasword',
      footer: '<a href="">Check your email or password</a>'
    })
}
if(result.data.response===true){
 
navigate('/')
}
      
    }).catch(err=>{
      
      console.log(err)
    })
  }
  const navigate=useNavigate()
  useEffect(() => {
    Axios.get("http://localhost:5000/admin/login").then((response) => {
        console.log(response);
      if (response.data.loggedIn === true) {
        console.log(response.data.loggedIn);
        setLoginStatus(response.data.user[0].email); 
      }
    });
  }, []);
  return (
    <div className='logo'>
        <h1 style={{justifyContent:'center',color:"white"}}>login</h1>
    <div className="login-block">
        <h1>Login</h1>
        <form onSubmit={login}>
        <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Username"  />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        <button type='submit'>Submit</button>
        </form>
    </div>
    </div>
  )
}
