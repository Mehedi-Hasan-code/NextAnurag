

import React from 'react'

export default async function Blog({ params }) {
  console.log(await params);
  const { blogID, comments } = await params;
  return (
    <div>This is {blogID} comment {comments}</div>
  )
}
