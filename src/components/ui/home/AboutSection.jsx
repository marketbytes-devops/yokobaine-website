import CalloutIcon from '@/components/Icon/CalloutIcon';
import UnderLineIcon from '@/components/Icon/UnderLineIcon';
import { Play } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="pt-4 md:pt-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
                    <div className="md:w-[45%] flex flex-col justify-center">
                        <div className="relative">
                            <h2 className="text-[#000000] mb-4 md:mb-8">
                                Where Data <br />
                                Exists, But <br />
                                Connection <br />
                                <span className="flex flex-wrap items-center gap-4">
                                    Is Lost.
                                    <button className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-[#1B9D20] text-white hover:bg-brand-yellow transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap">
                                        Request Access
                                    </button>
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="hidden md:block w-px bg-black/20 self-stretch"></div>
                    <div className="md:w-[55%] flex flex-col justify-center">
                        <div className="mb-4 md:mb-8">
                            <div className="relative inline-block -mt-8 md:mt-0 -mb-4 md:mb-0">
                                <CalloutIcon title="The Friction" />
                            </div>

                            <div className="mt-4">
                                <h3 className="text-[#000000] font-bold mb-1">
                                    The Disconnected Silos
                                </h3>
                                <div className="w-fit">
                                    <UnderLineIcon />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 text-[#475569] mb-4 md:mb-10">
                            <p>
                                Today's Education System Feels Like A Collection Of Disconnected Islands. Admins, Teachers, Students, And Parents Operate In Silos, Each With Their Own Data And Insight, But There's No Real Connection Between Them.
                            </p>
                            <p>
                                This Disconnection Creates Inefficiency, Confusion, And Frustration. Despite Having Data, Schools Lack The True Connection That Drives Actionable Insights And Unified Operations.
                            </p>
                        </div>

                        <ul className="space-y-5 mb-4 md:mb-10">
                            {[
                                "It's Time For A Solution That Breaks Down These Silos",
                                "Brings Everything Together In A Way That Makes Sense",
                                "A System That Connects, Empowers, And Unites."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-[#0f172a] font-medium group">
                                    <div className="mt-1 shrink-0">
                                        <Play className="w-5 h-5 text-[#1B9D20] fill-[#1B9D20]" />
                                    </div>
                                    <span className="ml-3">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-fit px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-[#1B9D20] text-white hover:bg-brand-yellow transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
