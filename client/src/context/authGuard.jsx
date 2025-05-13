// import { useNavigate } from "react-router-dom"
// import { UseUserData } from "../utils/customHook/useCookieData"
// import { useEffect } from "react"


// const AuthGuard=({children})=>{
//   const navigate=useNavigate()
  
//   const userData=UseUserData({key:"UserData"})
//   useEffect(()=>{    
//     if(userData){
//         navigate('/home')
//     }else{
//         navigate('/login')
//     }
// },[userData,navigate])

// if (userData === null) {
//     return <div>Loading...</div>; // Show a loading state while checking authentication
//   }

//   return<>{children}</>

// }

// export default AuthGuard