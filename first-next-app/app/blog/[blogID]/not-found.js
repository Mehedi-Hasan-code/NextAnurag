"use client";
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NotFound() {
  const path = usePathname();
  console.log(path);
  
  return (
    <div>Page not found with the id</div>
  )
}
