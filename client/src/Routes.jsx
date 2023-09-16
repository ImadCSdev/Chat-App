 
import { useContext } from "react";
import {UserContext} from "./UserContext.jsx";
import Register   from "./Register"


export default function Routes  () {

    const {username, id} = useContext(UserContext);
    if (username) {
        return   'logged in';
          
        
                  

      }



 return (
   <Register/>
 )

}



//min 50 