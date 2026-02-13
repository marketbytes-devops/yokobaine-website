import Image from 'next/image';
import yellowButton from '@/components/Icon/yellowbutton.svg';

import yellowLine from '@/components/Icon/yellowline.svg';
import laptopLogo from '@/components/Icon/laptoplogo.svg';

const InsightsSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-24 items-center">
                    <div className="flex flex-col">
                        <div className="relative mb-2">
                            {/* "Our Features" Tag with yellowbutton.svg */}
                            <div className="relative w-[140px] md:w-[165px] h-[70px] md:h-[85px]">
                                <Image
                                    src={yellowButton}
                                    alt="Features Background"
                                    className="w-full h-full object-contain"
                                />
                                <span className="absolute inset-0 flex items-start justify-center pt-2 md:pt-2.5 text-white font-poppins font-medium text-[16px] md:text-[20px] leading-[20px] md:leading-[25px] tracking-[0.03em] capitalize">
                                    Our Features
                                </span>
                            </div>
                        </div>

                        <h2 className="font-syne font-medium text-[42px] md:text-[80px] xl:text-[96px] leading-[1.1] md:leading-[90px] xl:leading-[100px] text-[#000000] tracking-[0.03em] capitalize flex flex-col max-w-[720px]">
                            <span>Empowering</span>
                            <span>Every Mind</span>
                        </h2>

                        <div className="mt-2 mb-10 md:mb-14">
                            {/* Wavy Yellow Line - yellowline.svg */}
                            <Image
                                src={yellowLine}
                                alt="Yellow Line Border"
                                width={548}
                                height={19}
                                className="w-auto h-auto max-w-[300px] md:max-w-[548px]"
                            />
                        </div>

                        <p className="font-poppins text-[#2A2A2A] text-[16px] md:text-[18px] leading-[24px] md:leading-[25px] max-w-[625px] text-justify capitalize mt-12 md:mt-24">
                            YoKoBaine is not just a tool, it’s an intelligent, dynamic ecosystem that connects every part of your school, empowering each stakeholder to perform at their best. Our features are built to break down the barriers in traditional education, enhancing collaboration, boosting efficiency, and providing a personalized experience for all.
                        </p>
                    </div>

                    <div className="relative flex justify-center lg:justify-end items-center pt-32 lg:pt-40">
                        {/* Stacked Cards Container */}
                        <div className="relative w-full max-w-[769px] flex items-end justify-center">

                            {/* Card 3 (Back) - Cream */}
                            <div
                                className="absolute -top-[15%] left-1/2 -translate-x-1/2 z-10 bg-[#F3EFE0] rounded-[24px] md:rounded-[42px] w-[86%] h-full"
                            ></div>

                            {/* Card 2 (Middle) - Green */}
                            <div
                                className="absolute -top-[7.5%] left-1/2 -translate-x-1/2 z-20 bg-[#22B891] rounded-[24px] md:rounded-[42px] w-[93%] h-full"
                            ></div>

                            {/* Card 1 (Top) - Orange */}
                            <div
                                className="relative z-30 bg-[#F47522] rounded-[24px] md:rounded-[42px] p-6 md:p-12 flex flex-col justify-between w-full aspect-[769/635]"
                            >
                                <div className="flex justify-between items-start gap-4">
                                    <div className="font-syne font-bold text-white text-[32px] sm:text-[45px] md:text-[75px] leading-[1.1] md:leading-[85px] max-w-[80%] capitalize">
                                        Real-Time <br /> Data Insights
                                    </div>

                                    {/* Icon Container */}
                                    <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-white rounded-full flex items-center justify-center shrink-0">
                                        <Image
                                            src={laptopLogo}
                                            alt="Laptop Icon"
                                            width={76}
                                            height={76}
                                            className="w-[40px] h-[40px] md:w-[76px] md:h-[76px]"
                                        />
                                    </div>
                                </div>

                                <p className="font-poppins text-white text-[14px] md:text-[18px] lg:text-[20px] leading-[1.5] md:leading-[1.6] max-w-full opacity-90 mt-4 md:mt-0">
                                    Empower Your Institution With Real-Time Data That Gives You A Comprehensive View Of Your School's Performance, Student Progress, And Resource Utilization. With YoKoBaine, You Can Access Actionable Insights Instantly, Making Data-Driven Decisions That Improve Outcomes Across The Board.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;
