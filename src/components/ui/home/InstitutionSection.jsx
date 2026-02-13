import Image from 'next/image';
import institutionImg from '../assets/images/home/for-institutions-img.png';

const InstitutionSection = () => {
    return (
        <section className="py-20 bg-[#F9FAFB]">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 relative">
                        {/* Dark green background polygon/shape */}
                        <div className="absolute -inset-10 bg-emerald-900 rounded-[3rem] -rotate-3 -z-10"></div>
                        <div className="relative rounded-4xl overflow-hidden shadow-2xl">
                            <Image
                                src={institutionImg}
                                alt="For Institutions"
                                className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        {/* Floating orange curved line decoration */}
                        <div className="absolute top-1/4 -right-10 w-32 h-32 border-4 border-orange-400 border-t-transparent border-l-transparent rounded-full rotate-45 hidden md:block"></div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="inline-flex items-center space-x-2 text-orange-500 font-bold mb-4">
                            <span className="w-8 h-[2px] bg-orange-500"></span>
                            <span className="uppercase tracking-[0.2em] text-sm">For Institutions</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Leading With <br /> Heart And Data.
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
                            Empower your school with the most advanced data orchestration platform. Transform administrative overhead into classroom triumphs by making every interaction count.
                        </p>
                        <button className="px-12 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 transform hover:scale-105 active:scale-95">
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstitutionSection;
