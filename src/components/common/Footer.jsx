import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo/logo.png';
import qrCode from '@/assets/images/home/qr-code.png';

const Footer = () => {
  return (
    <footer className="relative bg-brand-teal">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-6 md:py-12 lg:py-16 xl:py-24 gap-4 md:gap-0">
          <h2 className='font-400 text-[#050505] text-center md:text-left'>Lorem Ipsum</h2>
          <p className='text-[#050505CC] text-center md:text-right'>
            <span className='block'>Lorem Ipsum is simply dummy</span>
            <span className='block'>and text of the printing</span>
            <span className='block'>typesetting industry.</span>
          </p>
        </div>
        <div className='w-full flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 mb-6 md:mb-8'>
          <div className='w-full lg:w-[70%]'>
            <div className="bg-white relative p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 lg:space-y-8 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] h-full flex flex-col">
              <div className="flex justify-center">
                <Image src={logo} alt="Logo" width={100} height={100} />
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 lg:w-44 lg:h-48 shadow-xl md:shadow-2xl shadow-gray-400 flex items-end justify-center p-4 md:p-5 lg:p-6 font-semibold bg-brand-orange border-4 md:border-6 lg:border-8 border-white rounded-[16px] md:rounded-[20px] lg:rounded-[24px]">
                  <h3 className='text-white font-syne!'>Nurturing</h3>
                </div>
                <div className="w-36 h-40 sm:w-40 sm:h-44 md:w-44 md:h-48 lg:w-48 lg:h-52 shadow-inner shadow-gray-400 flex items-end justify-center p-4 md:p-5 lg:p-6 font-semibold bg-brand-yellow border-4 md:border-6 lg:border-8 border-white rounded-[16px] md:rounded-[20px] lg:rounded-[24px]">
                  <h3 className='text-white font-syne!'>What's</h3>
                </div>
                <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 lg:w-44 lg:h-48 shadow-xl md:shadow-2xl shadow-gray-400 flex items-end justify-center p-4 md:p-5 lg:p-6 font-semibold bg-brand-green border-4 md:border-6 lg:border-8 border-white rounded-[16px] md:rounded-[20px] lg:rounded-[24px]">
                  <h3 className='text-white font-syne!'>Next</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                <div>
                  <h4 className="mb-2 text-sm md:text-base">Location</h4>
                  <ul className='space-y-1'>
                    <li className='text-[12px]!'>Lorem Ipsum</li>
                    <li className='text-[12px]!'>Lorem Ipsum is simply dummy</li>
                    <li className='text-[12px]!'>text of the printing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm md:text-base">Contact Us</h4>
                  <ul className='space-y-1'>
                    <li className='text-[12px]!'>
                      <a href="mailto:hello@yokobaine.com" className="text-[12px]! hover:text-brand-teal transition-colors">
                        hello@yokobaine.com
                      </a>
                    </li>
                    <li className='text-[12px]!'>
                      <a href="tel:+6288899990000" className="text-[12px]! hover:text-brand-teal transition-colors">
                        Sales — +62 888 9999 0000
                      </a>
                    </li>
                    <li className='text-[12px]!'>
                      <a href="tel:+6277744440000" className="text-[12px]! hover:text-brand-teal transition-colors">
                        Enquiry — +62 777 4444 0000
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm md:text-base">Social Media</h4>
                  <ul className='space-y-1'>
                    <li className='text-[12px]!'>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[12px]! hover:text-brand-teal transition-colors">
                        Instagram
                      </a>
                    </li>
                    <li className='text-[12px]!'>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[12px]! hover:text-brand-teal transition-colors">
                        Facebook
                      </a>
                    </li>
                    <li className='text-[12px]!'>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[12px]! hover:text-brand-teal transition-colors">
                        Youtube
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm md:text-base">Useful Link</h4>
                  <ul className='space-y-1'>
                    <li className='text-[12px]!'>
                      <Link href="/about" className="text-[12px]! hover:text-brand-teal transition-colors">
                        About us
                      </Link>
                    </li>
                    <li className='text-[12px]!'>
                      <Link href="/core" className="text-[12px]! hover:text-brand-teal transition-colors">
                        The Core
                      </Link>
                    </li>
                    <li className='text-[12px]!'>
                      <Link href="/contact" className="text-[12px]! hover:text-brand-teal transition-colors">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[30%]'>
            <div className="bg-white/80 relative p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 lg:space-y-8 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] h-full flex flex-col justify-between">
              <div className='grid items-center justify-center lg:justify-start space-y-2'>
                <h4 className='text-black text-sm md:text-base'>
                  Upcoming Soon...
                </h4>
                <p className='text-[12px]!'>
                  Lorem Ipsum is simply dummy
                </p>
              </div>
              <div className='flex items-center justify-center flex-1'>
                <Image src={qrCode} alt="QR code" width={150} height={150} className='md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] object-contain rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border-2 border-white' />
              </div>
              <div>
                <div className='grid grid-cols-3 gap-2 md:gap-3'>
                  <div className='grid items-center justify-start'>
                    <h6 className='text-[12px]! text-[#050505]/60'>
                      Lorem Ipsum
                    </h6>
                    <p className='text-[12px]!'>
                      Lorem Ipsum
                    </p>
                  </div>
                  <div className='grid items-center justify-center'>
                    <h6 className='text-[12px]! text-[#050505]/60'>
                      Lorem Ipsum
                    </h6>
                    <p className='text-[12px]!'>
                      Lorem Ipsum
                    </p>
                  </div>
                  <div className='grid items-center justify-end'>
                    <h6 className='text-[12px]! text-[#050505]/60'>
                      Lorem Ipsum
                    </h6>
                    <p className='text-[12px]!'>
                      Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className='button-container flex items-center justify-center'>
                <button className='button px-4 py-2 md:px-6 md:py-2 text-xs md:text-sm rounded-full bg-[#1B9D20] text-white hover:bg-[#F5B11B] transition-colors duration-300 hover:shadow-xl md:hover:shadow-2xl hover:shadow-gray-600'>
                  Talk To Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center justify-center md:justify-between py-4 md:py-6 lg:py-8 xl:py-12">
          <div className='text-center md:text-left'>
            <p>
              Copyright 2026 YoKoBaine all rights reserved
            </p>
          </div>
          <div className='w-full'>
            <ul className='flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 md:gap-6 lg:gap-8 xl:gap-12'>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors ">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
