import React from 'react'

interface Props {
  title: string
}

export default function SignButton({title}: Props) {
  return (
    <div className='px-6 py-1.5 text-sm border-2 border-orange-500 rounded-full font-bold uppercase'>
      {title}
    </div>
  )
}
