import Link from 'next/link';
import React from 'react';

export default async function Blog({ params }) {
  const { blogID } = await params;
  return (
    <div>
      {blogID}
      <br />
      <Link href={`/blog/${blogID}/comments/1`}>Comment 1</Link>
      <br />
      <Link href={`/blog/${blogID}/comments/2`}>Comment 2</Link>
    </div>
  );
}
