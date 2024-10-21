import axios from "axios"

export const emailExists = async  (email) =>{
    const DoesExist  = await axios.get(`./api/path${email}`);
    if(DoesExist){
        return true;
    }
    return false;
 } 
