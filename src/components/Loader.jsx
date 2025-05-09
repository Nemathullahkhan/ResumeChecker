import { NotepadText } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='max-w-md'>
        <div className="flex flex-col justify-center items-center">
            <NotepadText className='animate-bounce h-40 w-40 ' />
            <p className='animate-pulse  text-md font-poppins'>Scanning your resume</p>
        </div>
    </div>
  )
}

export default Loader