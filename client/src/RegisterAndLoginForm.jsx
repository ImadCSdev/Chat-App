import { useState } from "react"; 
import axios from "axios";
import { UserContext } from "./UserContext.jsx";
import { useContext } from "react";


 export default function  RegisterAndLoginForm(){
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
   const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);


   async function handleSubmit (ev)  {
    ev.preventDefault();
     const url = isLoginOrRegister === 'register' ? 'register' : 'login';
     const {data} = await axios.post(url, {username,password});
     setLoggedInUsername(username);
     setId(data.id);
  }



    return (
        <div className="bg-blue-50 h-screen flex items-center ">   
          <form  className="w-64 mx-auto mb-12 "  onSubmit={handleSubmit} > 

            <input type="text" placeholder="username"
               value={username}
               onChange={ev => setUsername(ev.target.value)}       
                className="block w-full rounded-sm p-2 mb-2 border " />
          
          
           <input   value={password}
               onChange={ev => setPassword(ev.target.value)}
               type="password"     placeholder="password" 
                 className="block w-full  rounded-sm p-2 mb-2 border"  />



             <button className="bg-blue-500 text-white block w-full rounded-sm p-2" > 
               {isLoginOrRegister ===   'register'  ? 'register' : 'login'  }  
                </button>

              <div className="text-center  mt-2">
              {isLoginOrRegister ===  'register' &&  (
                     <div>
                     Already member !
                       < button className="ml-1" onClick={() => setIsLoginOrRegister('login')}  >
                                      Login Here 
                                         </button> 
                     </div>
                
                ) }
                   {isLoginOrRegister ===  'login' &&  (
                      <div>
                          don't have an account !!
                        < button className="ml-1" onClick={() => setIsLoginOrRegister('register')}  >
                                      Register
                                          </button> 
                      </div>
                   ) }
               </div>
           </form>
        
         </div>
    )
 }

 