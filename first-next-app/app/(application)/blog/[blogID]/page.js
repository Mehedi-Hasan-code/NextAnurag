import Comments from '@/app/components/Comments';
import Likes from '@/app/components/Likes';
import Loading from '@/app/components/Loading';
import Shares from '@/app/components/Shares';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

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
  return (
    <div>
      <div>Blog is {blogID}</div>
      <Suspense fallback={<Loading>Likes</Loading>}>
        <Likes />
      </Suspense>
      <Suspense fallback={<Loading>Comments</Loading>}>
        <Comments />
      </Suspense>
      <Suspense fallback={<Loading>Shares</Loading>}>
        <Shares />
      </Suspense>
    </div>
  );
}
