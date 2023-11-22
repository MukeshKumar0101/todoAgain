import React from 'react'
import {BsCheck} from "React-icons/bs";
export default function NewList(props:{
    data3 : string[]
}) {
  return (
    <div className='line-through'>
      {props.data3.map((e)=>{
       
        return <div className='flex items-center gap-4 '>  <BsCheck className="text-blue-600" /> {e}</div>
      })}
    </div>
  )
}
