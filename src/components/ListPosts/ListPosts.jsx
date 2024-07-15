import Link from 'next/link'
import React from 'react'
import CardPost from '../CardPost/CardPost'

const ListPosts = ({data}) => {
  return (
    <div className="w-full flex flex-wrap justify-center" >
      {
        data && data.map(item => (
          <Link href={`post/${item.slug}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4">
            <CardPost dataCard={item} />
          </Link>
        ))
      }
    </div>
  )
}

export default ListPosts