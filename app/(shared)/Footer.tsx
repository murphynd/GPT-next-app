import React from "react";

// responsive footer
// add social links to the footer
// add a link to the github repo

const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
      <div className='justify-between mx-auto gap-16 sm:flex'>
        {/* FIRST COLUMN */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>Next.js</h4>
          <p className='my-5'>
            Pretend not to be evil if it fits, i sits eat and than sleep on your
            face so hell is other people. Fall over dead (not really but gets
            sypathy) stare at ceiling be a nyan cat, feel great about it, be
            annoying 24/7 poop rainbows in litter box all day, so hey! you
            there, with the hands, inspect anything brought into the house, for
            missing until dinner time, yet avoid the new toy and just play with
            the box it came in. Stare at owner accusingly then wink pet right
            here, no not there, here, no fool, right here that other cat smells
            funny you should really give me all the treats because i smell the
            best and omg you finally got the right spot and i love you right now
            so human is behind a closed door, emergency! abandoned!
            meeooowwww!!!. Lies down .
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>human is alive, hiss at human, feed me.</p>
          <p className='my-5'>Gnaw the corn cob scoot butt on the rug</p>
          <p>Cat meoooow i iz master of hoomaan</p>
        </div>
        {/* THIRD COLUMN */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>
            The best thing in the universe is a cardboard box
          </p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
