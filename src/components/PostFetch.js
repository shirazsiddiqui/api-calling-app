import React from 'react'
import { useState } from 'react'

const PostFetch = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")

    function saveData(){
        let data = {name,email,mobile,password}
        // console.log(data)
        fetch("http://localhost:3006/users",{
            method:"post",
            headers:{
                "Accept":"Application/json",
                "content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }).then((response)=>{
            // console.log("response",response)
            response.json().then((result)=>{
                console.log("result",result)
                
            })
        })
    }




  return (
    <>
         <div className="App">
                <h1>Post Data</h1>
                <input type="text"placeholder='Name' name="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                <input type="email" placeholder='Email' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                <input type="number" placeholder='Mobile' name="mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} /><br/>
                <input type="password" placeholder='Password' name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/>
                <button type="button"  onClick={saveData}>Save</button>

        </div>
    </>
  )
}

export default PostFetch