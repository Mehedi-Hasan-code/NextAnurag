import React from 'react';

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
    description: `This is blog ${blogID}`,
  };
}
export default async function Blog({ params }) {
  const { blogID } = await params;
  return <div>Blog is {blogID}</div>;
}
