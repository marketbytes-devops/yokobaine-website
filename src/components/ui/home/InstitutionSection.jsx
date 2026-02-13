import Image from 'next/image';
import institutionImg from '@/assets/images/home/for-institutions-img.png';
import InstitutionIcon from '@/components/Icon/InstitutionIcon';
import UnderLine from '@/components/Icon/UnderLine';

const InstitutionSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="">
        <div className="w-full flex flex-col md:flex-row items-center gap-56">
          {/* Left Side: Illustration and Background */}
          <div className="md:w-[40%] relative min-h-[400px] flex items-center justify-center">
            {/* Custom Dark Green Shape */}
            <div 
              className="absolute inset-0 bg-[#0A3E27]  rounded-[2rem]"
              style={{
                clipPath: 'polygon(0% 12%, 100% 42%, 100% 85%, 0% 100%)'
              }}
            ></div>

            {/* White bar at the bottom of the illustration */}
            <div className="absolute bottom-[10%] left-[5%] right-[5%] h-14 bg-white -z-5"></div>

            {/* Orange Curly Icon (InstitutionIcon) */}
            <div className="absolute top-[10%] -right-[45%] z-20 pointer-events-none transform rotate-[-5deg]">
              <InstitutionIcon />
            </div>

            {/* Main Image */}
            <div className="relative z-10 w-full transform translate-y-[-10%]
                           pl-4">
              <Image
                src={institutionImg}
                alt="For Institutions"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="md:w-[60%]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-sm font-bold text-gray-900 tracking-wider">
                For Institutions
              </span>
            </div>

            <div className="relative inline-block mb-10">
              <h5 className="text-[24px] font-bold text-gray-900 leading-tight">
                All-Seeing Control
              </h5>
              <div className="mt-1">
                <UnderLine />
              </div>
            </div>

            <div className="space-y-6 max-w-xl">
              <p className="text-gray-700 text-[17px] leading-relaxed">
                Admins Need Clarity, Control, And Efficiency. Provides An Eagle-Eye View Of Every Aspect Of School Operations. From Student Performance To Faculty Management, You Have Complete Oversight With Zero Blind Spots.
              </p>
              <p className="text-gray-700 text-[17px] leading-relaxed">
                Stay In Control While Increasing Productivity, Making Informed Decisions Faster, And Leading With Precision. No More Chaos—Just Streamlined Operations.
              </p>
            </div>

            <div className="mt-12">
              <button className="px-10 py-4 bg-[#FF9900] text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-[0_12px_24px_-8px_rgba(255,153,0,0.6)] transform hover:scale-105 active:scale-95 text-sm uppercase tracking-widest">
                Request Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionSection;

