'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/assets/images/logo/logo.png';
import personGif from '@/assets/images/nav/talk-to-us.gif';

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className={`container h-auto flex items-center justify-between transition-all duration-500 ease-in-out ${scrolled ? 'py-1' : 'py-3 md:py-6'
        }`}>
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="yokobaine Logo"
              width={150}
              height={40}
              className="w-auto h-8 md:h-24"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8 bg-white rounded-lg py-3 px-6 shadow shadow-gray-300">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about-us' },
            { name: 'For Institutions', path: '/for-institutions' },
            { name: 'For Educators', path: '/for-educators' },
            { name: 'For Learners', path: '/for-learners' },
            { name: 'The Core', path: '/the-core' },
            { name: 'Contact Us', path: '/contact-us' },
          ].map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative flex flex-col items-center transition-colors duration-300 ${isActive ? 'text-black' : 'text-[#404040] hover:text-black'
                  }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 text-[#F47522] leading-none">
                    <svg width="62" height="8" viewBox="0 0 63 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.99954C4.54651 4.33986 16.25 -1.8816 34.6919 2.51002C57.7442 7.99954 59.1628 3.97388 62 3.60792" stroke="#F47522" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <button
            onClick={() => window.open('https://wa.me/2348033037700', '_blank')}
            className="bg-white rounded-lg py-1.5 px-4 shadow shadow-gray-300 flex items-center"
          >
            Talk to Us <span className="ml-2"><Image src={personGif} alt="Talk to Us" width={40} height={40} /></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
