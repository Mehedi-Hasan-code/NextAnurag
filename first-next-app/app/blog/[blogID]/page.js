import React from 'react';

export default async function Blog({ params }) {
  const { blogID } = await params;
  return <div>Blog is {blogID}</div>;
}
