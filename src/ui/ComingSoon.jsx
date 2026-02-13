import Link from 'next/link';

const ComingSoon = ({ title }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/50 rounded-full blur-3xl"></div>
            </div>

            <div className="text-center space-y-12 animate-in fade-in zoom-in duration-1000">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 uppercase tracking-tighter leading-none font-outfit">
                        {title}
                    </h1>
                    <div className="h-2 w-24 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative inline-block group">
                    <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative px-12 py-6 bg-[#1A1A1A] text-white text-5xl md:text-7xl font-black rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 font-outfit">
                        Coming Soon
                    </div>
                </div>

                <p className="text-gray-500 text-xl max-w-lg mx-auto font-medium leading-relaxed italic">
                    Our team is currently building something <br className="hidden md:block" /> revolutionary for the education world.
                </p>

                <div className="pt-8">
                    <Link href="/" className="px-10 py-4 bg-white border border-gray-100 text-gray-900 font-bold rounded-full hover:bg-gray-50 hover:shadow-2xl hover:shadow-gray-200 transition-all inline-flex items-center group">
                        <svg className="mr-3 w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Return to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
