import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="yokobaine Logo" width={150} height={40} className="w-auto h-8 md:h-10" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">Who we are</Link>
          <Link href="/for-institutions" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">For Institutions</Link>
          <Link href="/for-parents" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">For Parents</Link>
          <Link href="/for-students" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">For Students</Link>
          <Link href="/support" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
          <Link href="/careers" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">Careers</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="px-6 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-full transition-colors">
            Login
          </Link>
          <Link href="/signup" className="px-6 py-2 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-colors flex items-center shadow-lg shadow-orange-200">
            Sign Up <span className="ml-1">👤</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
