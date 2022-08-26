import React,{useState} from 'react'
import axios from 'axios'

export const Register = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [picture,setPicture] = useState("")
    let config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          }
        }
    const register = (e)=>{
        e.preventDefault()
        var params = {email:email,password:password,firstname:firstname,lastname:lastname,picture:picture}
        axios.post(`http://localhost:5000/admin/register`,params,config,{ withCredentials: true })
        .then(result=>{
    
          console.log(result);
        }).catch(err=>{
         
          console.log(err)
        })
      }
  return (
    <div className='logo'>
        <h1 style={{justifyContent:'center',color:"white"}}>register</h1>
    <div className="login-block">
        <h1>Login</h1>
        <form onSubmit={register}>
        <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Username"  />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        <input type="text" onChange={(e) => { setFirstname(e.target.value) }} placeholder="firstname"  />
        <input type="password" onChange={(e) => { setLastname(e.target.value) }} placeholder="lastname" />
        <input type="text" onChange={(e) => { setPicture(e.target.value) }} placeholder="picture"  />
        <button type='submit'>Submit</button>
        </form>
    </div>
    </div>
  )
}
