import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'

type Props={
  mood:string,
  setMood:(val:string)=>void,
  onGenerated:()=>void,
  disabled:boolean,
  
}
const MoodInput = ({mood,setMood,onGenerated,disabled,}:Props) => {

  return (
    <div className=' space-y-4'>
      <Input type="text" value={mood} placeholder="How are you feeling today?(happy,sad,angry,nervous,excited....)" className=" mb-4" onChange={(e)=>setMood(e.target.value)}/>
      <Button className="bg-gray-800 text-white hover:bg-blue-600 w-full" disabled={disabled} onClick={onGenerated}>
        Generate Email Template</Button>
    </div>
  )
}

export default MoodInput
