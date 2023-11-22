import React from 'react'

export default function Input(props:{
    setInput: Function;
    input : string;
}) {
  return (
    <div>
      <input value={props.input} onChange={(event)=>{ let a = event.target.value;props.setInput(a)}}  type="text" placeholder='Text Here' className=' border-2 border-gray-400 h-12 ' />
    </div>
  )
}
