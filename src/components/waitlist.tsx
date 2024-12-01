import React from "react";
import WaitlistForm from "./forms/waitlist";

export default function Waitlist() {
    return <section id="waitlist" className="py-10 md:px-spacing-large">
        <div className="w-full flex flex-wrap gap-4 md:rounded-3xl p-10 bg-green-700">
            <div className="flex-1 flex text-white basis-80 justify-evenly flex-col gap-4">
                <h2 className="text-xl text-yellow-600 md:text-4xl">
                    What the Program Covers
                </h2>

                <p className="text-lg">
                    Each element of our program is designed to be practical, actionable, and relevant. Here's what's included:
                </p>

                <div className="w-2/5 h-0.5 bg-yellow-600" />

                <ul className="flex flex-col text-lg">
                    <li className="flex items-center gap-2 before:w-1.5 before:h-1.5 before:bg-yellow-400">7 Self-Paced Online Courses covering key STEM integration principles</li>
                    <li className="flex items-center gap-2 before:w-1.5 before:h-1.5 before:bg-yellow-400">4 Live Webinars with interactive Q&A and deep dives into specific STEM strategies.</li>
                    <li className="flex items-center gap-2 before:w-1.5 before:h-1.5 before:bg-yellow-400">STEM Curriculum Templates to jumpstart your lesson planning</li>
                    <li className="flex items-center gap-2 before:w-1.5 before:h-1.5 before:bg-yellow-400">Course Certificate to showcase your new skills and dedication to STEM education.</li>
                </ul>
            </div>

            <WaitlistForm />
        </div>
    </section>;
}
