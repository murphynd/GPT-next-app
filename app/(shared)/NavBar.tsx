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
        <div className='flex items-center'>signin/signout</div>
      </nav>
    </header>
  );
}

export default NavBar;
