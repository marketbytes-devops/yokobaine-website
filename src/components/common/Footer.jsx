import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo/logo.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Image
              src={logo}
              alt="yokobaine"
              width={160}
              height={40}
              className="w-auto h-8"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Revolutionizing the education landscape through data-driven
              empathy and human-centric technology.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:shadow-md transition-all"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:shadow-md transition-all"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:shadow-md transition-all"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:shadow-md transition-all"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 text-sm hover:text-orange-500 transition-colors"
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  href="/for-institutions"
                  className="text-gray-500 text-sm hover:text-orange-500 transition-colors"
                >
                  For Institutions
                </Link>
              </li>
              <li>
                <Link
                  href="/for-parents"
                  className="text-gray-500 text-sm hover:text-orange-500 transition-colors"
                >
                  For Parents
                </Link>
              </li>
              <li>
                <Link
                  href="/for-students"
                  className="text-gray-500 text-sm hover:text-orange-500 transition-colors"
                >
                  For Students
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/help"
                  className="text-gray-500 text-sm hover:text-orange-500 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 text-sm hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 text-sm hover:text-orange-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-500 text-sm hover:text-orange-500 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-500">
                <MapPin size={18} className="text-orange-500 shrink-0" />
                <span>123 Innovation Drive, Tech City, 56001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-500">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-500">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <span>hello@yokobane.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-[10px]">
            &copy; {new Date().getFullYear()} Yo Ko Bane. All rights reserved.
            Designed with ❤️ for Education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
