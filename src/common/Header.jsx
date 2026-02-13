import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/images/logo/logo.png';
import talkToUsGif from '../assets/images/nav/talk-to-us.gif';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex flex-col items-start translate-y-1">
          <Link href="/" className="block">
            <Image
              src={logo}
              alt="yokobaine Logo"
              width={140}
              height={50}
              className="w-auto h-10 object-contain"
            />
          </Link>
          <span className="text-[10px] text-gray-500 font-medium tracking-wide mt-1 pl-1">
            Nurturing What&apos;s Next
          </span>
        </div>

        {/* Navigation Section */}
        <nav className="hidden lg:flex items-center bg-white rounded-full px-10 py-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] space-x-10">
          <Link href="/" className="text-sm font-bold text-gray-900 underline decoration-2 decoration-wavy decoration-orange-500 underline-offset-8">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            About Us
          </Link>
          <Link href="/for-institutions" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            For Institutions
          </Link>
          <Link href="/for-educators" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            For Educators
          </Link>
          <Link href="/for-learners" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            For Learners
          </Link>
          <Link href="/the-core" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            The Core
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Right Section - Talk to us */}
        <div className="hidden lg:flex items-center">
          <Link href="/contact" className="flex items-center bg-white rounded-full pl-6 pr-1.5 py-1.5 shadow-[0_2px_15px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all group">
            <span className="text-sm font-extrabold text-gray-900 mr-3 group-hover:text-orange-600 transition-colors">
              Talk to us
            </span>
            <div className="w-10 h-10 relative rounded-full overflow-hidden bg-gray-100">
              <Image
                src={talkToUsGif}
                alt="Chat"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
