import Image from 'next/image';
import img1 from '../assets/images/home/home-banner-bottom-img-1.jpg';
import img2 from '../assets/images/home/home-banner-bottom-img-2.jpg';
import img3 from '../assets/images/home/home-banner-bottom-img-3.jpg';
import img4 from '../assets/images/home/home-banner-bottom-img-4.jpg';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-orange-200/50 rounded-full blur-3xl opacity-60 transition-all duration-700 animate-pulse"></div>
      <div className="absolute top-20 left-10 -z-10 w-[400px] h-[400px] bg-green-100/50 rounded-full blur-3xl opacity-40"></div>

      <div className="container text-center">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter font-outfit">
          The Awakening
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
          Academic excellence starts at your fingertips.
        </p>

        <div className="flex justify-center mb-16">
          <button className="px-8 py-3 bg-white border border-gray-200 rounded-full text-gray-800 font-semibold shadow-sm hover:shadow-md transition-all flex items-center group">
            Know more
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Banner Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-end max-w-6xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 border-4 border-white aspect-3/4 md:aspect-2/3">
            <Image src={img1} alt="Education" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -translate-y-8 hover:-translate-y-10 transition-transform duration-300 border-4 border-white aspect-3/4 md:aspect-2/3 bg-green-500">
            <Image src={img2} alt="Students" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -translate-y-4 hover:-translate-y-6 transition-transform duration-300 border-4 border-white aspect-3/4 md:aspect-2/3 bg-orange-400">
            <Image src={img3} alt="Classroom" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 border-4 border-white aspect-3/4 md:aspect-2/3">
            <Image src={img4} alt="Learning" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
