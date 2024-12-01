import React from "react";
import Cta from "../components/cta";
import WhyUs from "../components/why-us";
import Expect from "../components/expect";
import Enroll from "../components/enroll";
import Waitlist from "../components/waitlist";
import Overview from "../components/overview";
import { engagements } from "../constants/config";
import { microscopeIcon, smilyIcon } from "../constants/media";

export default function Page() {
    const [index, setIndex] = React.useState(0);

    return <>
        <Overview>
            <div className="w-full relative rounded-[2em] bg-white shadow-md gap-10 flex flex-col p-10">
                <img src={microscopeIcon} alt="" className="h-20 absolute left-3/4 md:left-1/5 -top-6 md:top-auto md:bottom-0 translate-y-1/2" />
                <img src={smilyIcon} alt="" className="absolute -bottom-4 md:bottom-auto md:top-10 right-0 md:right-10 h-10 md:h-20" />

                <h2 className="text-2xl md:text-5xl capitalize px-10 text-center md:text-left">imagine this</h2>

                <div className="md:w-4/5 mx-auto flex overflow-hidden items-center justify-start">
                    {engagements.map(item => (
                        <p key={item.content} style={{ transform: `translateX(-${index * 100}%)` }} className="flex-none w-full text-md md:text-2xl transition-all duration-700 text-justify md:text-center">
                            {item.content}
                        </p>
                    ))}
                </div>

                <div className="flex gap-2 items-center justify-center">
                    {engagements.map((_, id) => (
                        <input key={id} type="radio" checked={id === index} onChange={() => setIndex(id)} />
                    ))}
                </div>

            </div>

            <p className="font-bold mt-10 md:pl-20 flex-none w-full text-md md:text-2xl text-gray-700 text-justify md:text-center">
                STEM Teacher Training is designed to empower educators with the skills to thoughtfully connect different
                subjects, so that the knowledge from each one complements and enriches the others, creating a
                well-rounded and meaningful learning experience for students.
            </p>
        </Overview>
        <Expect />
        <Cta />
        <Waitlist />
        <WhyUs />
        <Enroll />
    </>;
}
