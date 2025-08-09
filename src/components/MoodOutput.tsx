import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Tooltip,TooltipContent,TooltipTrigger, } from '@/components/ui/tooltip'
type Props={
  subject: string,
  footer: string,
  copyText: string,
  onReset:() => void
  handleCopyClipboard: (text: string) => void

}
const MoodOutput = ({subject,footer,copyText,onReset,handleCopyClipboard}:Props) => {
 
  return (
    <div className='space-y-4'>
      <div>
        <label className='block text-sm font-medium text-gray-700 text-left'>Subject:</label>
        <Input type='text' value={subject} placeholder='Enter subject here' className='w-full' readOnly/>
          
        <Tooltip open={!!copyText}>
          <TooltipTrigger asChild>
            <Button variant="outline" onClick={() => handleCopyClipboard(subject)} className='mt-2'>
              Copy To Clipboard
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copyText || "Copy to clipboard"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700 text-left'>Footer Signature:</label>
        <Textarea placeholder='Enter footer here' value={footer} className='w-full' readOnly/> 
      </div>
      <div>
        <Button variant='destructive' className='w-full' onClick={onReset}>Reset</Button>
      </div>
    </div>
  )
}

export default MoodOutput
