import { notFound } from 'next/navigation';
import React from 'react';

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
    description: `This is blog ${blogID}`,
  };
}
export default async function Blog({ params }) {
  console.log(await params);
  const { blogID } = await params;
  if (blogID == 'test') notFound();
  return <div>Blog is {blogID}</div>;
}
