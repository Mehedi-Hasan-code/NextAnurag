import React from 'react'

export default async function Shares() {
  await new Promise(resolve => setTimeout(resolve, 9000))
  return (
    <div>43 shares</div>
  )
}
