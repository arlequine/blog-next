'use client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link';

const Page = () => {

  const [post, setPost] = useState()
  
  const { slug } = useParams()
  const url = process.env.NEXT_PUBLIC_WP_URL
  console.log('chale',url)
  const getPost = async () => {
    const result = await fetch(`${url}?slug=${slug}`);
    const postData = await result.json();
    setPost(postData[0])
    console.log('res', post)
  }

  useEffect(() => {
    getPost()
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full flex justify-start">
        <Link href="/" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </Link>
      </section>
      <section className="flex flex-col items-center justify-center" >
        <h2 className="text-4xl">{post?.title?.rendered}</h2>
        <img className="py-8" src={post?.jetpack_featured_media_url} alt={post?.slug} />
      </section>

      <section className="" >
        <div className="text-xl" dangerouslySetInnerHTML={{__html: post?.content?.rendered}} />
      </section>

    </main>
  )
}

export default Page