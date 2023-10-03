import React from 'react'
import Image from 'next/image'

function Loading() {
  return (
    <div className='w-full flex justify-center items-center min-h-screen'>
      <Image
          src='/Assets/lemon.png'
          alt='logout'
          width={80}
          height={80}
          className='animate-spin mb-60'
      />
    </div>
  )
}

export default Loading