import Image from 'next/image';
import yellowButton from '@/components/Icon/yellowbutton.svg';

import yellowLine from '@/components/Icon/yellowline.svg';

const InsightsSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col">
                        <div className="relative mb-2">
                            {/* "Our Features" Tag with yellowbutton.svg */}
                            <div className="relative w-[165px] h-[85px]">
                                <Image
                                    src={yellowButton}
                                    alt="Features Background"
                                    className="w-full h-full object-contain"
                                />
                                <span className="absolute inset-0 flex items-start justify-center pt-2.5 text-white font-poppins font-medium text-[20px] leading-[25px] tracking-[0.03em] capitalize">
                                    Our Features
                                </span>
                            </div>
                        </div>

                        <h2 className="font-syne font-medium text-[42px] md:text-[96px] leading-[1.1] md:leading-[100px] text-[#000000] tracking-[0.03em] capitalize flex flex-col max-w-[720px]">
                            <span>Empowering</span>
                            <span>Every Mind</span>
                        </h2>

                        <div className="mt-2 mb-14">
                            {/* Wavy Yellow Line - yellowline.svg */}
                            <Image
                                src={yellowLine}
                                alt="Yellow Line Border"
                                width={548}
                                height={19}
                                className="w-auto h-auto max-w-[548px]"
                            />
                        </div>

                        <p className="font-poppins text-[#2A2A2A] text-[18px] leading-[25px] max-w-[625px] text-justify capitalize mt-24">
                            YoKoBaine is not just a tool, it’s an intelligent, dynamic ecosystem that connects every part of your school, empowering each stakeholder to perform at their best. Our features are built to break down the barriers in traditional education, enhancing collaboration, boosting efficiency, and providing a personalized experience for all.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Right side placeholder - kept for structure, but could be updated later */}
                        <div className="bg-[#FF7A29] rounded-[2.5rem] p-12 text-white relative z-10 shadow-2xl overflow-hidden group">
                            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                                Real-Time <br /> Data Insights
                            </h3>
                            <p className="text-white/90 text-lg leading-relaxed mb-10">
                                Instantly access performance metrics, attendance trends, and behavioral analysis to make informed decisions that matter.
                            </p>
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute -top-10 -right-10 w-full h-full border border-gray-100 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4"></div>
                        <div className="absolute -top-4 -right-4 w-full h-full bg-gray-50 rounded-[2.5rem] -z-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;
