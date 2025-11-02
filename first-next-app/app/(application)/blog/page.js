
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Blogs'
}
export default async function Blogs() {
  return (
    <div>
      <h1>Blogs</h1>
      <p>This is a blog page</p>
      <h2><Link href='/blog/1'>Blog 1</Link></h2>
      <h2><Link href='/blog/2'>Blog 2</Link></h2>
      <h2><Link href='/blog/3'>Blog 3</Link></h2>
      <h2><Link href='/blog/4'>Blog 4</Link></h2>
    </div>
  )
}
