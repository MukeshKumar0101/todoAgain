import React from 'react'

export default function Header(props:{
    data1 : string;
    index : number;
    setIndex: Function;
    activeIndex : number;
}) {
  return (
    <div onClick={()=>{props.setIndex(props.index)}} className={props.activeIndex=== props.index ? "bg-blue-100 px-1" :""}> 
     {props.data1}
    </div>
  )
}
