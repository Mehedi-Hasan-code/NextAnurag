import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Services'
};
export default function services() {
  return (
    <>
      <div>This is services page</div>
      <Link href='/'>Go to Home</Link>
    </>
  );
}
