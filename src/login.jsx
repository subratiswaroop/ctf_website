
import { useState } from "react"
import { useNavigate  } from "react-router-dom"

function Login(){
  let nav=useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token,setToken]=useState("")
 async function handleSubmit(e){
    e.preventDefault()   
    if (email === "" || password === ""){
      alert('Please fill all fields')
    } else if(email && password){
      let check = email === "admin@gmail.com" && password === "thsgci3569WKMtuvxzfpass@word"
      if(check) {        
        if(token === ""){
          setToken  (localStorage.setItem("token","you have token"))
          alert("login successful")
        }     
        else{
           localStorage.removeItem("token");
           window.location.reload();
        }
        nav("/admin")
      } else {alert ("Invalid Email or Password")}
   }
          
 }
      
    return(
<>
<div className="center">
  <div className="row">
    <div className="col s12 m4 offset-m4">
      <div className="card ">
        <div className="card-action" id="h_login">
    <h3>Login</h3>
        </div>
        <div className="card-content">
          <div className="from-field">
          <form  action=" " onSubmit={handleSubmit} className="row" >
                email:<br/>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email"/><br/><br/>
                Password:<br/>
                <input  onChange={(e)=>setPassword(e.target.value)} type="password" name="password" /><br/>
                <button className="btn" id="btn" type="submit" name="action">Submit
  </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>      
    )
}
export default Login;