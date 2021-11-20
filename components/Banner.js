import React from 'react'
import Link from 'next/link'
import Search from './Search'

const Banner = () => {
   return (
      <div className="min-h-[300px] w-full bg-[#F7EFEF] rounded-md flex flex-col justify-center px-8">
         <div>
            <h1 className="font-bold text-3xl md:text-4xl">
               Welcome to YelpCamp!
            </h1>
            <p className="text-sm  font-headings mt-2">
               View our hand-picked campgrounds from all over <br /> the world,
               or add your own.
            </p>
            <Search />
            <Link href="/newCamp">
               <a className="underline font-headings mt-3 block text-[#464646cc] hover:text-gray-500 hover:no-underline">
                  Or add your own Campground
               </a>
            </Link>
         </div>
      </div>
   )
}

export default Banner
