import { Check } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Where Data <br />
                            Exists, But <br />
                            Connection <br />
                            Is Lost.
                            <span className="inline-block ml-4 px-6 py-2 bg-green-500 text-white text-lg rounded-lg transform -rotate-2">Who we are</span>
                        </h2>
                    </div>

                    <div className="md:w-1/2">
                        <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-bold mb-6 uppercase tracking-wider">
                            The Problem We Color
                        </div>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Yo Ko Bane bridges the critical gap between raw educational data and meaningful, actionable human connections. We don't just provide numbers; we provide the narrative that helps educators and parents understand every student's unique journey.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Personalized Learning Pathways",
                                "Real-time Behavioral Insights",
                                "Seamless Parent-Teacher Sync"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-800 font-medium group">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-500 transition-colors">
                                        <Check className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="px-10 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all shadow-xl shadow-green-100 transform hover:scale-105">
                            Know more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
