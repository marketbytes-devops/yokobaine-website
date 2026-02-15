"use client";

import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import institutionImg from '@/assets/images/home/for-institutions-img.png';
import InstitutionIcon from '@/components/Icon/InstitutionIcon';
import UnderLineIcon from '@/components/Icon/UnderLineIcon';
import GreenPolygon from '@/components/Icon/GreenPolygon';
import WhiteBar from '@/components/Icon/WhiteBar';

const slides = [
  {
    title: "All-Seeing Control",
    content1: "Admins Need Clarity, Control, And Efficiency. Provides An Eagle-Eye View Of Every Aspect Of School Operations. From Student Performance To Faculty Management, You Have Complete Oversight With Zero Blind Spots.",
    content2: "Stay In Control While Increasing Productivity, Making Informed Decisions Faster, And Leading With Precision. No More Chaos—Just Streamlined Operations."
  },
  {
    title: "Real-time Analytics",
    content1: "Experience the power of live data at your fingertips. Our platform offers comprehensive reporting and instant insights into institutional performance metrics.",
    content2: "Make data-driven decisions that impact growth and educational quality. Monitor trends and respond to changes as they happen, ensuring your institution stays ahead."
  },
  {
    title: "Unified Management",
    content1: "Ditch the fragmented tools and embrace a single ecosystem. Manage faculty, students, and administrative tasks from one centralized dashboard with ease.",
    content2: "Reduce administrative friction and foster collaboration across departments. Our unified interface simplifies complex workflows, saving time for what truly matters."
  }
];

const InstitutionSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <section className="py-24 bg-white overflow-hidden container">
      <div className="mx-auto px-4 md:px-0">
        <div className="w-full flex flex-col md:flex-row items-center space-x-40">
          {/* Left Side: Illustration and Background */}
          <div className="md:w-[40%] relative flex items-center justify-center">

            <div className='w-[20%] '>
              <GreenPolygon />
            </div>

            {/* White bar at the bottom of the illustration */}
            <div className="absolute bottom-[10%] left-[5%] right-[5%] h-14 bg-white -z-10"></div>

            {/* Orange Curly Icon (InstitutionIcon) */}
            <div className="absolute top-[15%]  -right-[25%] z-20 pointer-events-none transform rotate-2">
              <InstitutionIcon />
            </div>

            {/* Main Image */}
            <div className="relative z-10 w-full transform translate-y-[-25%] left-[-12%]">
              <Image
                src={institutionImg}
                alt="For Institutions"
                width={600}
                height={600}
                className="w-full scale-110 h-auto object-contain -rotate-4"
                priority
              />
            </div>
            <div className='absolute top-[56%]'>
              <WhiteBar />
            </div>
          </div>

          {/* Right Side: Content Slider */}
          <div className="md:w-[60%] ">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                For Institutions
              </span>
            </div>

            <div className="max-w-xl institution-slider relative pb-12">
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={index} className="outline-none">
                    <div className="relative inline-block mb-3">
                      <h5 className="text-[24px] md:text-[32px] font-bold text-black leading-tight">
                        {slide.title}
                      </h5>
                      <div className="mt-1">
                        <UnderLineIcon />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-black text-[17px] leading-relaxed">
                        {slide.content1}
                      </p>
                      <p className="text-black text-[17px] leading-relaxed">
                        {slide.content2}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="mt-8">
                <button className="px-5 py-4 bg-[#FF9900] text-black font-bold rounded-full hover:bg-orange-600 transition-all shadow-[0_12px_24px_-8px_rgba(255,153,0,0.6)] transform active:scale-95 text-sm uppercase">
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .institution-slider .custom-dots {
          bottom: -20px;
          display: flex !important;
          justify-content: flex-start;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .institution-slider .custom-dots li {
          margin: 0 4px;
          width: auto;
          height: auto;
        }
        .institution-slider .custom-dots li button {
          width: 12px;
          height: 12px;
          padding: 0;
          background: #E5E7EB;
          border-radius: 50%;
          border: none;
          transition: all 0.3s ease;
        }
        .institution-slider .custom-dots li button:before {
          display: none;
        }
        .institution-slider .custom-dots li.slick-active button {
          background: #FF9900;
          width: 24px;
          border-radius: 12px;
        }
      `}</style>
    </section>
  );
};

export default InstitutionSection;


