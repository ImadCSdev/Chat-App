import { useState } from "react"; 
import axios from "axios";
import { UserContext } from "./UserContext";
import { useContext } from "react";


 export default function Register (){
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
   const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);


   async function register (ev)  {
    ev.preventDefault();
     const {userData} = await axios.post('/register', {username,password});
     setLoggedInUsername(username);
     setId(userData.id);
  }



    return (
        <div className="bg-blue-50 h-screen flex items-center ">   
          <form  className="w-64 mx-auto mb-12 "  onSubmit={register} > 

            <input type="text" placeholder="username"
               value={username}
               onChange={ev => setUsername(ev.target.value)}       
                className="block w-full rounded-sm p-2 mb-2 border " />
          
          
           <input   value={password}
               onChange={ev => setPassword(ev.target.value)}
               type="password"     placeholder="password" 
                 className="block w-full  rounded-sm p-2 mb-2 border"  />



             <button className="bg-blue-500 text-white block w-full rounded-sm p-2" >  Register    </button>
           </form>
        
         </div>
    )
 }

 