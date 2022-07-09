import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div classname="fixed w-full h-20 shadow-xl z-[100]">
        <div classname="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/assets/skills/navlogo.png" alt="/" 
        width="55" 
        height="47" 
        />
        <div>
            <ul className="hidden md:flex">
                <Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b-4">Home</li>
                    </Link>
                    <Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                    </Link><Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                    </Link><Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                    </Link><Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                    </Link>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default navbar