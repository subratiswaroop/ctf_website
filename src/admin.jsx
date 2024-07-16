import { useEffect } from "react";
import { useNavigate } from "react-router-dom"



function Admin(){
    let nav = useNavigate();
    useEffect(()=>{
        let token = localStorage.getItem("token");
        if(!token){
            nav("/login")
            }
    })


    return(
        <div className="center ">
            <h1>Admin page</h1>
           <pre> <p className="#ff1744 red accent-3">FLAG_53811586115</p></pre>
        </div>
    )
}

export default Admin;