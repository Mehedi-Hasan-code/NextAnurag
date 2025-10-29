import React from 'react'

export default function layout({children}) {
  return (
    <div>
      <h1>This is layout for services</h1>
      <nav className='bg-cyan-500 text-white p-3 text-center'>Service page nav</nav>
      {children}
      <footer className='bg-cyan-500 text-white p-3 text-center'>Service page footer</footer>
    </div>
  )
}
