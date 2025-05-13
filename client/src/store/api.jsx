import axios from "axios"


export const apiHandler=(payload)=>{
  return new Promise((resolve,reject)=>{
    axios({
        ...payload,
        baseURL:"http://localhost:5020",
        headers:{
            "Content-Type": "application/json",
        },
    }).then((response)=>{
        if(response.status>=200 && response.status<300){
            resolve(response)
        }else{
            reject(response)
        }
    }).catch((err)=>{
        reject(err)
    })
  })
}

const api={
    apiHandler,
    Signup:'auth/signup',
    Login:'auth/login',
    HomeGet:'home/get'
}

export default api