import Image from 'next/image';
import img1 from '../assets/images/home/all-in-one-platform-video-thumbnail-img-1.jpg';
import img2 from '../assets/images/home/all-in-one-platform-video-thumbnail-img-2.jpg';
import img3 from '../assets/images/home/all-in-one-platform-video-thumbnail-img-3.jpg';

const VideoSection = () => {
    return (
        <section className="py-24 bg-gray-100">
            <div className="container text-center">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    All-In-One Platform For <br className="hidden md:block" /> Education
                </h2>
                <div className="flex justify-center gap-2 mb-16">
                    <div className="h-1 w-12 bg-orange-400 rounded-full"></div>
                    <div className="h-1 w-8 bg-orange-200 rounded-full"></div>
                    <div className="h-1 w-4 bg-orange-100 rounded-full"></div>
                </div>

                <div className="max-w-5xl mx-auto relative group">
                    <div className="flex justify-center -space-x-12">
                        <div className="w-1/4 aspect-3/4 rounded-4xl overflow-hidden shadow-2xl rotate-[-5deg] border-4 border-white transform hover:rotate-0 transition-transform duration-500 scale-90 translate-y-10 group-hover:translate-y-8">
                            <Image src={img2} alt="Thumbnail 2" fill className="object-cover" />
                        </div>
                        <div className="w-1/2 aspect-4/3 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] z-10 border-8 border-[#004D3F] relative group/video cursor-pointer">
                            <Image src={img1} alt="Main Video" fill className="object-cover group-hover/video:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                                    <div className="w-0 h-0 border-l-18 border-l-white border-y-12 border-y-transparent ml-2"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-8 text-left text-white drop-shadow-lg">
                                <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Watch Now</p>
                                <h4 className="text-2xl font-black">Life At Yo Ko Bane</h4>
                            </div>
                        </div>
                        <div className="w-1/4 aspect-3/4 rounded-4xl overflow-hidden shadow-2xl rotate-[5deg] border-4 border-white transform hover:rotate-0 transition-transform duration-500 scale-90 translate-y-10 group-hover:translate-y-8">
                            <Image src={img3} alt="Thumbnail 3" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
