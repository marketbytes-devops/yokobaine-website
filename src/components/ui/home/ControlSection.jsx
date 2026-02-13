"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../assets/images/home/all-seeing-control-img-1.jpg';
import img2 from '../assets/images/home/all-seeing-control-img-2.jpg';
import img3 from '../assets/images/home/all-seeing-control-img-3.jpg';

const ControlSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const categories = ["Overview", "Attendance", "Reports", "Billing", "Others"];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        All-Seeing Control
                    </h2>
                    <p className="text-gray-500 text-lg italic">
                        Everything you need, right where you need it.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`px-8 py-2 rounded-full font-bold text-sm transition-all ${idx === 1 ? 'bg-[#1A1A1A] text-white shadow-xl' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-0">
                    <Slider {...settings} className="control-slider">
                        {[img1, img2, img3, img1, img2].map((img, index) => (
                            <div key={index} className="px-4 outline-none">
                                <div className={`relative group transition-all duration-500 rounded-4xl overflow-hidden ${index % 2 === 0 ? 'bg-green-500' : 'bg-[#1A1A1A]'} p-4 pt-12 text-white`}>
                                    <div className="relative aspect-3/4 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                                        <Image src={img} alt="Control Feature" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="px-4 pb-4">
                                        <h3 className="text-2xl font-bold mb-2">Detailed Metrics</h3>
                                        <p className="text-white/70 text-sm mb-6">Track every data point with precision and ease using our dashboard.</p>
                                        <button className="px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-xs font-bold transition-all transform group-hover:translate-y-[-4px]">
                                            View More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx global>{`
        .control-slider .slick-dots {
          bottom: -50px;
        }
        .control-slider .slick-dots li button:before {
          font-size: 12px;
          color: #00B67A;
        }
        .control-slider .slick-dots li.slick-active button:before {
          color: #1A1A1A;
        }
      `}</style>
        </section>
    );
};

export default ControlSection;
