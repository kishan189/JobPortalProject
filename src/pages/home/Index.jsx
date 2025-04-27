import React from 'react'
import { Header } from '../../components/home/Header'
import ResponsiveAppBar from '../../components/home/ResponsiveAppBar'
import SplitButton from '../../components/home/DropDown'
import InternshalaDropdown from '../../components/home/Internshala'

export const Index = () => {

  return (
    <div className='flex flex-col w-full h-full px-12 bg-amber-300'>
        <div className='flex flex-col w-full py-1 bg-green-200'>
            {/* <SplitButton/> */}
            <InternshalaDropdown/>

        </div>
        <div className='flex flex-col w-full h-full bg-pink-100'>
           <h3>
             thi dhdhd dhhddhd hdhdhd dhdhdh
           </h3>
        </div>
    </div>
  )
}
