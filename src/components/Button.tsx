import React from 'react'

export default function Button(props:{
  onClick:Function;
}) {
  return (
    <div>
      <button onClick={()=>props.onClick()} className='text-3xl bg-blue-500 px-3 py-1'>+</button>
    </div>
  )
}
