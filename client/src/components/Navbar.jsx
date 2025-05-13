import React, { useEffect, useState } from 'react'
import { UseUserData } from '../utils/customHook/useCookieData'

export default function Navbar() {
    const{userData}=UseUserData({key:"userData"})

  return (
    <>
      <div className='top-0 w-full h-10.5 border z-0'>
       <div className='flex justify-center items-center'>
      {
        userData? <p className='text-blue-600 text-2xl'>{userData.username}</p>:"Please Login"
      }
       </div>
      </div>
    </>
  )
}
