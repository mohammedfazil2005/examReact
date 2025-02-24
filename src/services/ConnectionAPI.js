import axios from "axios";

export const commonApi=async()=>{
  return await axios({
        method:"get",
        baseURL:"https://fakestoreapi.com/users",
        data:""
    }).then((responce)=>{
        return responce;
    }).catch((error)=>{
        return error;
    })
}