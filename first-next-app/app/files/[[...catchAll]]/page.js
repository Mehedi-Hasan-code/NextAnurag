import React from 'react'

export default async function File( {params} ) {
  const  { catchAll }  = await params;
  console.log(catchAll);
  return (
    <div>File is /{catchAll?.join('/')}</div>
  )
}
