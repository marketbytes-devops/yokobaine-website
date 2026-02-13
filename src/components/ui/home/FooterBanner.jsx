import Image from 'next/image';
import logo from '../assets/images/logo/logo.png';

const FooterBanner = () => {
    return (
        <section className="py-24 bg-[#00B67A] overflow-hidden">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 px-4">
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Lorem Ipsum
                    </h2>
                    <p className="text-white/80 max-w-xs mt-4 md:mt-0 italic">
                        Connecting dots in education through innovation and empathy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Card 1 */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden flex flex-col items-center">
                        <div className="mb-8">
                            <Image src={logo} alt="Logo" width={120} height={40} className="w-auto h-8" />
                        </div>

                        <div className="grid grid-cols-3 gap-4 w-full mb-10">
                            <div className="bg-orange-600 h-24 rounded-2xl flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest p-4 text-center">Foundation</div>
                            <div className="bg-yellow-500 h-24 rounded-2xl flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest p-4 text-center">Pathways</div>
                            <div className="bg-teal-600 h-24 rounded-2xl flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest p-4 text-center">Impact</div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 w-full border-t pt-8">
                            <div>
                                <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Location</p>
                                <p className="text-sm font-bold text-gray-800">Global Hub, Education City</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Since</p>
                                <p className="text-sm font-bold text-gray-800">2024</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: QR Code */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl flex flex-col items-center justify-center relative group">
                        <div className="absolute top-6 left-10">
                            <p className="text-xs font-black text-gray-300 uppercase italic">Connect Now</p>
                        </div>

                        <div className="w-48 h-48 bg-gray-50 rounded-3xl p-4 mb-8 border-4 border-gray-100 flex items-center justify-center group-hover:bg-green-50 transition-colors">
                            {/* Simplified QR Placeholder */}
                            <div className="w-full h-full bg-slate-800 rounded opacity-20 relative">
                                <div className="absolute inset-2 border-2 border-dashed border-white/50"></div>
                                <div className="absolute inset-10 bg-white/10 rounded-lg"></div>
                            </div>
                        </div>

                        <button className="px-10 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg shadow-green-100 transform hover:scale-105 active:scale-95 transition-all">
                            Scan To Join
                        </button>
                        <p className="mt-4 text-[10px] text-gray-400 font-medium">Available on iOS & Android</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterBanner;
