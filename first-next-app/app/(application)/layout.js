import React from 'react'

export default function layout({children}) {
  return (
    <div>
      <nav className='bg-amber-400 p-3 text-center text-white'>Nav of Application </nav>
      {children}
      <footer className='bg-amber-400 p-3 text-center text-white'>Footer of Application</footer>
    </div>
  )
}
