import React, { useEffect, useMemo } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../store/auth/LoginSlice';
import Cookies from 'js-cookie';
const Login = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const { LoginError, LoginFetching, LoginErrorMessage, LoginSuccess,LoginData } = useSelector((state) => state.auth)

  const validation = yup.object({
    email: yup.string().email("Email is invalid").required("Email is Required"),
    password: yup.string().required("Password is Required").min(6,"Password must be atleast 6 letters")
  })

  const defaultValues = useMemo(()=>({
  email:"",
  password:""
  }),[])

  const methode = useForm(
    {
      resolver: yupResolver(validation),
      defaultValues
    }
  )

  const { control, handleSubmit, formState: { errors }, reset } = methode


useEffect(() => {
  console.log(LoginData);
  if (LoginSuccess && LoginData) {
    Cookies.set("userData", JSON.stringify({
      username: LoginData.existinguser.name,
      token: LoginData.token,
      userId: LoginData.existinguser._id
    }));
    reset();
  }

  const cookie = Cookies.get("userData"); // ✅ Correct way for client
  if (cookie) {
    navigate("/home");
  }
}, [LoginData, navigate, LoginSuccess]);

  const onsubmit = (data) => {
    dispatch(fetchLogin(data))
  }



  // useEffect(()=>{
  //   if(LoginSuccess&&LoginData){
  //     cookie.set("UserData",JSON.stringify({fullname:LoginData.name,email:LoginData.email,token:LoginData.token}),{expires:7})
  //     reset()
  //     sessionStorage.setItem("userData",JSON.stringify(LoginData))
  //     navigate('/home')
  //   }
  //   if(LoginError){
  //     console.log(LoginError);
  //     alert("Login Error")
  //   }
  // },[LoginSuccess,LoginError,LoginData,navigate])

  return (
    <>
      <div className='w-screen h-screen relative'>
        <div className='w-[50%] bg-blue-500 h-screen absolute'>
        </div>
        <div className='flex justify-center relative top-40 '>
          <div className='text-center   w-[300px] h-auto lg:w-[400px] lg:h-auto bg-white rounded flex felx-col-2'>
            <div className=''>
              <img className='object-cover rounded h-100 top-0' src="https://img.freepik.com/free-photo/adorable-kitty-with-monochrome-wall-her_23-2148955142.jpg?t=st=1741180699~exp=1741184299~hmac=8f9a383d260882e937d1ee6da9bd20c56e07de254a13a503b3aa7bc6a7d1c960&w=900" alt="" />
            </div>
              <form onSubmit={handleSubmit(onsubmit)}>
                <div className='grid p-2 gap-5'>
                  <h1 className='text-2xl font-bold mb-5 mt-4'>SignIn</h1>
                  {LoginSuccess && "login success"}
                  <div className="w-full max-w-sm min-w-[200px]">
                    <input
                    type='email'
                      {...methode.register("email")}
                      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Email here" />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                  <div className="w-full max-w-sm min-w-[200px]">
                    <input type='password' {...methode.register('password')} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Password here" />
                    {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                  </div>
                  <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mb-2 cursor-pointer'>Submit</button>
                  {LoginFetching ? "Login......." : 'Login'}
                  <p className='mb-4 text-blue-400 text-sm'>Not a member? <Link to={'/Signup'} className='text-blue-500 font-semibold hover:text-blue-600 cursor-pointer'>SignUp</Link></p>
                </div>
                {LoginError && <p>{LoginErrorMessage}</p>}
              </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login
