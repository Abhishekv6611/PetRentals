import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate}from 'react-router-dom'
import { fetchinData } from '../store/auth/SignupSlice';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import cookie from 'js-cookie'

const Signup = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const{SignupError,SignupSuccess,SignupErrorMessage,SignupFetching,SignupData}=useSelector((state)=>state.signup)

  const validation=yup.object({
    email:yup.string().email("Email is Invalis").required("Email must required"),
    password:yup.string().min(6,"Password must 6 letters").required("Password must required"),
    name:yup.string().required("Name must required")
  })

 const defaultValues=useMemo(()=>({
  email:"",
  password:"",
  name:""
 }),[])
  
  const methode=useForm({
    resolver:yupResolver(validation),
    defaultValues
})
  const{control,handleSubmit,reset,formState:{errors}}=methode
  const onsubmit=(data)=>{
    dispatch(fetchinData(data))
  }

  useEffect(()=>{
    if(SignupData &&SignupSuccess){
      cookie.set("userData",JSON.stringify({fullname:SignupData.name,email:SignupData.email,token:SignupData.token}))
      reset()
      navigate('/home')
      sessionStorage.setItem("userData",JSON.stringify(SignupData))
    }
  },[])
  
  return (
    <>
    <div className='w-screen h-screen relative'>
      <div className='w-[50%] bg-blue-500 h-screen absolute'>
      </div>
      <div className='flex justify-center relative top-40 '>
        <div className='text-center   w-[300px] h-auto lg:w-[400px] lg:h-auto bg-white rounded flex felx-col-2'>
          <div className=''>
            <img  className='object-cover rounded h-100 top-0' src="https://img.freepik.com/free-photo/adorable-kitty-with-monochrome-wall-her_23-2148955142.jpg?t=st=1741180699~exp=1741184299~hmac=8f9a383d260882e937d1ee6da9bd20c56e07de254a13a503b3aa7bc6a7d1c960&w=900" alt="" />
          </div>
          <div className='grid p-2 gap-5'>
            <h1 className='text-2xl font-bold mb-5 mt-4'>Signup</h1>
            <form onSubmit={handleSubmit(onsubmit)}>

            <div className="w-full max-w-sm min-w-[200px]">
              <input type='name' {...methode.register('name')} className="mb-2 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Name here" />
              {errors.name&&<p className='text-red-600'>{errors.name.message}</p>}
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <input type='email' {...methode.register('email')} className="mb-2 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Email here" />
               {errors.email&&<p className='text-red-600'>{errors.email.message}</p>}
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
             <input type='password' {...methode.register('password')} className="mb-2 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Password here" />
            {errors.password&&<p className='text-red-600'>{errors.password.message}</p>}
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mb-2 cursor-pointer'>Submit</button>
            {SignupFetching&&"Loading..."}
            {SignupError&&<p>{SignupErrorMessage}</p>}
            {SignupSuccess&&"Submited successfully"}
            </form>
            <p className='mb-4 text-blue-400 text-sm'>Already a member? <Link to={'/login'} className='text-blue-500 font-semibold hover:text-blue-600 cursor-pointer'>Signin</Link></p>
          </div>
        </div>
      </div>

    </div>
  </>
  )
}

export default Signup
