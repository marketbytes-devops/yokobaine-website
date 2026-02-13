const UpgradeSection = () => {
    return (
        <section className="py-24 bg-[#1A1A1A] text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="mb-6">
                                <div className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium text-white/60 mb-8">
                                    The Vision
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                    Upgrade To The <br />
                                    Education System
                                </h2>
                            </div>

                            <div className="flex items-center gap-8 mt-4">
                                <div className="text-5xl md:text-7xl font-black text-white/20 select-none">
                                    yo ko <br /> bane
                                </div>
                                <div className="h-20 w-[1px] bg-white/10 hidden md:block"></div>
                                <p className="text-white/60 text-lg leading-relaxed md:max-w-md">
                                    We believe every heart and every mind should have access to an education system that adapts to them, not the other way around. Our platform is the bridge to that future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpgradeSection;
