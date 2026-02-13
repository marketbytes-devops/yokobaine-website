const InsightsSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center space-x-2 text-orange-500 font-bold mb-4">
                            <span className="w-8 h-[2px] bg-orange-500"></span>
                            <span className="uppercase tracking-[0.2em] text-sm italic">Innovation</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-10">
                            Empowering <br />
                            Every Mind
                        </h2>
                        <div className="flex gap-2 mb-10">
                            <div className="h-1 w-12 bg-orange-400 rounded-full"></div>
                            <div className="h-1 w-8 bg-orange-200 rounded-full"></div>
                            <div className="h-1 w-4 bg-orange-100 rounded-full"></div>
                        </div>
                        <p className="text-gray-600 text-xl leading-relaxed max-w-lg">
                            Education isn't one-size-fits-all. Our insights provide the granularity needed to nurture individual potential and foster a genuine love for learning at every stage of the student life cycle.
                        </p>
                    </div>

                    <div className="relative">
                        {/* The orange card */}
                        <div className="bg-[#FF7A29] rounded-[2.5rem] p-12 text-white relative z-10 shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                                Real-Time <br /> Data Insights
                            </h3>

                            <p className="text-white/90 text-lg leading-relaxed mb-10">
                                Instantly access performance metrics, attendance trends, and behavioral analysis to make informed decisions that matter.
                            </p>

                            <div className="space-y-4 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="h-2 w-full bg-white/30 rounded-full"></div>
                                <div className="h-2 w-2/3 bg-white/30 rounded-full"></div>
                                <div className="h-2 w-1/2 bg-white/30 rounded-full"></div>
                            </div>
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
