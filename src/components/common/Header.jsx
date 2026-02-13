'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/images/logo/logo.png';
import personGif from '@/assets/images/nav/talk-to-us.gif';

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'For Institutions', path: '/for-institutions' },
    { name: 'For Educators', path: '/for-educators' },
    { name: 'For Learners', path: '/for-learners' },
    { name: 'The Core', path: '/the-core' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm shadow-gray-300' : 'bg-transparent'
        }`}
    >
      <div className={`container h-auto flex items-center justify-between transition-all duration-500 ease-in-out ${scrolled ? 'py-1' : 'py-3 2xl:py-6'
        }`}>
        <div className="flex items-center gap-4">
          <button
            className="2xl:hidden text-[#22B891] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Link href="/">
            <Image
              src={logo}
              alt="yokobaine Logo"
              width={150}
              height={40}
              className="w-auto h-8 md:h-12 2xl:h-24 transition-all duration-500"
            />
          </Link>
        </div>
        <nav className="hidden 2xl:flex items-center space-x-4 xl:space-x-8 bg-white rounded-lg py-3 px-6 shadow shadow-gray-300">
          {navLinks.map((link) => {
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
                    <svg width="40" height="6" viewBox="0 0 63 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
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
            className="bg-white rounded-lg py-1.5 px-3 md:px-4 shadow shadow-gray-300 flex items-center text-sm md:text-base whitespace-nowrap"
          >
            <span className="hidden sm:inline">Talk to Us</span>
            <span className="sm:ml-2"><Image src={personGif} alt="Talk to Us" width={30} height={30} className="md:w-10 md:h-10" /></span>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 h-screen w-screen z-60 transition-all duration-500 ease-in-out 2xl:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className="absolute inset-0 bg-white/80 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />

        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#F47522]/10 rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-80 h-80 bg-[#22B891]/10 rounded-full blur-3xl animate-blob pointer-events-none animation-delay-2000" />

        <div className="relative flex flex-col h-full z-10">
          <div className="flex items-center justify-between p-6">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image src={logo} alt="yokobaine Logo" width={120} height={35} className="w-auto h-8" />
            </Link>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#22B891] text-white shadow-lg transition-transform active:scale-90"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`tracking-tight transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    } ${isActive ? 'text-black' : 'text-[#1F1F1F]'}`}
                >
                  <div className="relative px-2 py-1">
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full text-[#F47522] leading-none">
                        <svg width="63" height="9" viewBox="0 0 63 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                          <path d="M1 7.99954C4.54651 4.33986 16.25 -1.8816 34.6919 2.51002C57.7442 7.99954 59.1628 3.97388 62 3.60792" stroke="#F47522" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
          <div className="p-10 flex justify-center">
            <div className="flex items-center">
              <button
                onClick={() => window.open('https://wa.me/2348033037700', '_blank')}
                className="bg-white rounded-lg py-1.5 px-3 md:px-4 shadow shadow-gray-300 flex items-center text-sm md:text-base whitespace-nowrap"
              >
                <span className="inline">Talk to Us</span>
                <span className="ml-2"><Image src={personGif} alt="Talk to Us" width={30} height={30} className="md:w-10 md:h-10" /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header >
  );
};

export default Header;
