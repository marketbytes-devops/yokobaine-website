const FAQSection = () => {
    const faqs = [
        {
            id: "01",
            question: "How do I get started?",
            answer: "Simply sign up for an account and follow our onboarding guide. It takes less than 5 minutes to set up your institution.",
        },
        {
            id: "02",
            question: "Is my data secure?",
            answer: "We use military-grade encryption and comply with all major data protection regulations (GDPR, COPPA) to ensure your safety.",
        },
        {
            id: "03",
            question: "Can I customize the reports?",
            answer: "Yes, our reporting engine is fully flexible, allowing you to create custom dashboards and automated exports.",
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="md:w-1/2">
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-none mb-4 uppercase tracking-tighter">
                            ANY <br /> QUESTIONS? <br /> WE GOT YOU
                        </h2>
                        <div className="flex gap-2 mb-10">
                            <div className="h-1 w-12 bg-orange-400 rounded-full"></div>
                            <div className="h-1 w-8 bg-orange-200 rounded-full"></div>
                            <div className="h-1 w-4 bg-orange-100 rounded-full"></div>
                        </div>
                    </div>

                    <div className="md:w-1/2 space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="flex gap-8 group">
                                <div className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${index === 0 ? 'bg-[#1A1A1A] text-white' : 'bg-orange-100 text-orange-600 group-hover:bg-[#1A1A1A] group-hover:text-white'}`}>
                                        {faq.id}
                                    </div>
                                    {index !== faqs.length - 1 && <div className="w-[2px] h-full bg-orange-100 group-hover:bg-gray-100 transition-colors my-2"></div>}
                                </div>

                                <div className="bg-gray-50 p-8 rounded[2rem] flex-1 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 border border-transparent hover:border-gray-100">
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">{faq.question}</h3>
                                    <p className="text-gray-600 leading-relaxed italic">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
