import React,{useState} from 'react'
import Input from './components/Input'
import Button from './components/Button'
import Header from './Header'
import List1 from './components/List1'
import Completed from './components/Completed'
import NewList from "./components/NewList";


export default function App() {
  const [index,setIndex]= useState(1)
  const [input, setInput]= useState("")
  const [list1, setList1]= useState<string[]>([])
  const [list2, setList2]= useState<string[]>([])
  const [list3, setList3]= useState<string[]>([])
  const [newList1, setNewList1] = useState<string[]>([])
  const [newList2, setNewList2] = useState<string[]>([])
  const [newList3, setNewList3] = useState<string[]>([])
  const [a, setA] = useState(true);
  return (
    <>
    <div className='flex items-center justify-center h-screen '>
     <div className='border-2 border-black py-2 px-2 h-[500px] flex flex-col justify-between '>
      <div className='space-y-2'>
    <div className='flex gap-4'>
      <Header setIndex={setIndex} index={1} activeIndex={index} data1="Mukesh's list" />
      <Header setIndex={setIndex} index={2} activeIndex={index} data1="My list" />
      <Header setIndex={setIndex} index={3} activeIndex={index} data1="+ New list" />
      
    </div>
    <div>

    {index === 1 ? <List1 setList={setList1} setNewList={setNewList1} newList={newList1}  data2={list1}></List1> : null }
    {index === 2 ? <List1 setList={setList2}  setNewList={setNewList2} newList={newList2}   data2={list2}></List1> : null }
    {index === 3 ? <List1 setList={setList3} setNewList={setNewList3} newList={newList3}    data2={list3}></List1> : null }
    </div>
    <Completed  value={a} flip={setA}  />
    { a ? (
    <div>

    {index ==1 ? <NewList data3={newList1}></NewList> : null}
    {index ==2 ? <NewList data3={newList2}></NewList> : null}
    {index ==3 ? <NewList data3={newList3}></NewList> : null}
    </div> ) : null}
    </div>
    
    

    {/* <div>
     {list1.map((e)=>{
      return (
        <div className=''>{e}</div>
      )
     })}
        </div>  */}
     
     
    <div className='flex items-center gap-2 '>
      <Input setInput={setInput} input={input}  />
      <Button onClick={()=>{
        if(index ==1){

          setList1([...list1, input]); setInput('')
        } else if(index ==2){
          setList2([...list2, input]); setInput('')

        } else if(index==3){
          setList3([...list3, input]); setInput('')

        }
        }} />
    </div>
     </div>
    </div>
    </>
  )
}
