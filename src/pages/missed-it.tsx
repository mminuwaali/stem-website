import React from "react";
import Overview from "../components/overview";
import { microscopeIcon } from "../constants/media"

export default function Page() {
    return <>
        <Overview>
            <div className="w-full rounded-[2em] bg-white shadow-md gap-10 flex flex-col items-center py-20 p-4 relative">
                <header className="w-full flex flex-col items-center">
                    <h2 className="text-center font-bold text-xl md:text-4xl text-blue-600">Here's what educators loved about the last session:</h2>
                </header>

                <ul className="list-disc flex flex-col items-center text-lg">
                    <li>Creating interdisciplinary, hands-on lessons that make STEM relevantand engaging for every student</li>
                    <li>Discovering how to make learning meaningful through real-world problem-solving</li>
                    <li>Building an inquiry-based classroom culture that promotes critical thinking and collaboration</li>
                </ul>

                <img src={microscopeIcon} alt="" className="h-20 absolute bottom-0 right-10 translate-y-1/2" />
            </div>
        </Overview>

        <section className="w-full flex gap-10 flex-col py-10 pl-spacing-normal px-spacing-small md:pl-spacing-x-large md:px-spacing-normal">
            <header className="w-full flex flex-col items-center">
                <h3 className="text-center text-xl md:text-3xl text-blue-600">Here's how to prepare for the course:</h3>
            </header>

            <ul className="list-disc flex flex-col items-center text-xl">
                <li>A classroom filled with students eager to explore, learn, and grow</li>
                <li>Lessons that connect multiple subjects, helping students see how STEM impacts their daily lives</li>
                <li>A confident, STEM-savvy teacher (that's you!) equipped with skills to inspire the next generation</li>
            </ul>
        </section>
    </>;
}
