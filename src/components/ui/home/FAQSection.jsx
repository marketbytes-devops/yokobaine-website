import Image from 'next/image';
import arrow1 from '@/components/Icon/arrow1.svg';
import arrow2 from '@/components/Icon/arrow2.svg';

const FAQSection = () => {
    const faqs = [
        {
            id: "01",
            question: "How this work",
            answer: "Our process is simple: start with an online application, followed by a consultation to assess your child's needs. We then provide a tailored plan and guide you through the final enrollment steps",
        },
        {
            id: "02",
            question: "How this work",
            answer: "Our process is simple: start with an online application, followed by a consultation to assess your child's needs. We then provide a tailored plan and guide you through the final enrollment steps",
        },
        {
            id: "03",
            question: "How this work",
            answer: "Our process is simple: start with an online application, followed by a consultation to assess your child's needs. We then provide a tailored plan and guide you through the final enrollment steps",
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="md:w-[60%] lg:w-[40%]">
                        <h4 className="font-syne font-medium text-[42px] md:text-[80px] leading-[1.1] md:leading-[100px] tracking-[0.03em] text-[#000000] uppercase flex flex-col">
                            <span>ANY</span>
                            <span>QUESTIONS?</span>
                            <span className="whitespace-nowrap">WE GOT YOU</span>
                        </h4>
                        <div className="mt-6">
                            {/* Wavy Orange Line - Vector 315 Approximation */}
                            <svg className="w-full max-w-[602px]" height="21" viewBox="0 0 602 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 19C50 19 100 2 200 2C300 2 400 19 500 19C550 19 600 14 602 12.5" stroke="#F47522" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="lg:w-[60%] flex-1 relative pl-28">
                        {/* Vertical Orange Line */}
                        <div
                            className="absolute left-[31px] top-[200px] w-[2px] bg-[#FE9800]"
                            style={{ height: '612px' }}
                        ></div>

                        {/* Navigation Arrows */}
                        <div className="absolute left-0 top-0 flex flex-col gap-4">
                            {/* Black Arrow Button */}
                            <button className="w-[63px] h-[63px] rounded-full bg-[#1F2327] border-4 border-white flex items-center justify-center text-white shadow-xl transition-transform hover:scale-105 active:scale-95">
                                <Image src={arrow1} alt="Arrow Up" width={28} height={28} />
                            </button>

                            {/* Orange Arrow Button */}
                            <button className="w-[63px] h-[63px] rounded-full bg-[#FE9800] border-4 border-white flex items-center justify-center text-white shadow-xl transition-transform hover:scale-105 active:scale-95">
                                <Image src={arrow2} alt="Arrow Down" width={28} height={28} />
                            </button>
                        </div>

                        <div className="space-y-20">
                            {faqs.map((faq, index) => (
                                <div key={index} className={`flex flex-col group transition-all duration-500 ${index === 1 ? '-ml-14' : 'ml-0'}`}>
                                    <div className="bg-[#E9E9E9] px-10 py-7 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-200 min-h-[140px]">
                                        <h3 className="text-[24px] font-medium mb-2 text-[#1F2327] font-poppins leading-[120%]">{faq.question}</h3>
                                        <p className="text-[#1F2327] text-[20px] leading-[1.4] font-poppins max-w-[850px]">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
