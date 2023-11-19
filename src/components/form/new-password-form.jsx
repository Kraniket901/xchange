'use Client'
import React, { useState } from 'react'

const newpassword = () => {
  const [password,setpassword]=useState('');
  const handler= async ()=>{
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    const email = queryParams.get('email');
    try{
        const res=await fetch(`/api/users/password/id=${token}`,{
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              token,
              email,
              password,
           })
         })
         const data=await res.json();
         console.log(data);
       }catch(error){
        console.log(error);
    }
  }
  return (
     <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", padding:"4rem 0"}}>
     <input
       className=" px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-outline"
      style={{width:"80%"}}
       onChange={(e) => {
         setpassword(e.target.value);
       }}
       type="text"
       placeholder='Enter New Password'
     />
     <input
       className=" px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-outline"
      style={{width:"80%"}}
       type="text"
       placeholder='Confirm New Password'
     />
     <br />
     <button style={{backgroundColor:"#19ae51", color:"white", padding:"0.5rem 1rem", width:"250px", borderRadius:"10px"}}
       onClick={handler}
     >
       Submit
     </button>
 </div>
  )
}

export default newpassword