import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo/logo.png';
import qrCode from '@/assets/images/home/qr-code.png';

const Footer = () => {
  return (
    <footer className="relative bg-brand-teal">
      <div className="container">
        <div className="flex items-center justify-center md:justify-between py-6 md:py-24">
          <h2 className='font-400 text-[#050505]'>Lorem Ipsum</h2>
          <p className='text-[#050505CC]'><span className='block'>Lorem Ipsum is simply dummy</span><span className='block'>and text of the printing</span><span className='block'>typesetting industry.</span></p>
        </div>
        <div className='w-full flex items-stretch gap-6'>
          <div className='w-full md:w-[70%]'>
            <div className="bg-white relative p-6 md:p-8 space-y-6 md:space-y-8 rounded-[24px] h-full flex flex-col">
              <div className="flex justify-center">
                <Image src={logo} alt="Logo" width={100} height={100} />
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-44 h-48 shadow-2xl shadow-gray-400 flex items-end justify-center p-6 font-semibold bg-brand-orange border-8 border-white rounded-[24px]">
                  <h3 className='text-white font-syne!'>Nurturing</h3>
                </div>
                <div className="w-48 h-52 shadow-inner shadow-gray-400 flex items-end justify-center p-6 font-semibold bg-brand-yellow border-8 border-white rounded-[24px]">
                  <h3 className='text-white font-syne!'>What's</h3>
                </div>
                <div className="w-44 h-48 shadow-2xl shadow-gray-400 flex items-end justify-center p-6 font-semibold bg-brand-green border-8 border-white rounded-[24px]">
                  <h3 className='text-white font-syne!'>Next</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                  <h4 className="mb-2">Location</h4>
                  <ul>
                    <li className='text-[12px]!'>Lorem Ipsum</li>
                    <li className='text-[12px]!'>Lorem Ipsum is simply dummy</li>
                    <li className='text-[12px]!'>text of the printing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2">Contact Us</h4>
                  <ul>
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
                  <h4 className="mb-2">Social Media</h4>
                  <ul>
                    <li className='text-[12px]!'>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[12px]! hover:text-brand-teal transition-colors flex items-center gap-2">
                        Instagram
                      </a>
                    </li>
                    <li className='text-[12px]!'>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[12px]! hover:text-brand-teal transition-colors flex items-center gap-2">
                        Facebook
                      </a>
                    </li>
                    <li className='text-[12px]!'>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[12px]! hover:text-brand-teal transition-colors flex items-center gap-2">
                        Youtube
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2">Useful Link</h4>
                  <ul>
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
          <div className='w-full md:w-[30%]'>
            <div className="bg-white/80 relative p-6 md:p-8 space-y-6 md:space-y-8 rounded-[24px] h-full flex flex-col justify-between">
              <div className='grid items-center justify-center md:justify-start space-y-2'>
                <h4 className='text-black'>
                  Upcoming Soon...
                </h4>
                <p className='text-[12px]!'>
                  Lorem Ipsum is simply dummy
                </p>
              </div>
              <div className='flex items-center justify-center flex-1'>
                <Image src={qrCode} alt="QR code" width={200} height={200} className='object-contain rounded-[24px] border-2 border-white' />
              </div>
              <div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                  <div className='grid item-center justify-start'>
                    <h6 className='text-[12px]! text-[#050505]/60'>
                      Lorem Ipsum
                    </h6>
                    <p className='text-[12px]!'>
                      Lorem Ipsum
                    </p>
                  </div>
                  <div className='grid item-center justify-center'>
                    <h6 className='text-[12px]! text-[#050505]/60'>
                      Lorem Ipsum
                    </h6>
                    <p className='text-[12px]!'>
                      Lorem Ipsum
                    </p>
                  </div>
                  <div className='grid item-center justify-end'>
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
                <button className='button px-6 py-2 rounded-full bg-[#1B9D20] text-white hover:bg-[#F5B11B] transition-colors duration-300 hover:shadow-2xl hover:shadow-gray-600'>
                  Talk To Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-between py-6 md:py-16">
          <div>
            <p>

            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
