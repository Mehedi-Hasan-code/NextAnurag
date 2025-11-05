import React from 'react'

export default async function Comments() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    <div>12 comments</div>
  )
}
