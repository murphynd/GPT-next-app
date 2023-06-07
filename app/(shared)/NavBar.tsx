import Image from "next/image";
import Link from "next/link";
import React from "react";

//type Props = {}

// add three links to the navbar
// add signin and signout buttons to the navbar
function NavBar() {
  return (
    <header className='mb-5'>
      <nav className='flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4'>
        <div className='hidden sm:block'>social links</div>
        <div className='flex items-center gap-10 justify-between'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className='flex items-center'>Sign In</div>
      </nav>
      <div className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
        <div className='basis-2/3 md:mt-3'>
          <h1 className='font-bold text-3xl md:text-5xl'>Next.js Blog</h1>
          <p className='text-sm mt-3'>A simple blog built with Next.js</p>
        </div>
        <div className='basis-full relative w-auto h-32 bg-wh-500'>Image</div>
      </div>
      <hr className='border-1 mx-10' />
    </header>
  );
}

export default NavBar;
