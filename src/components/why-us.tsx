import React from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { mainHeroImage } from "../constants/media"

export default function WhyUs() {
    return <section className="w-full flex flex-wrap items-center bg-yellow-normal px-spacing-normal py-10 relative before:h-96 before:w-96 before:left-0 before:absolute before:bg-red-normal before:rounded-full before:-translate-x-2/3 before:md:-translate-x-1/2">
        <h2 className="text-3xl z-10 font-bold md:text-5xl lg:text-7xl flex-none text-center lg:text-left w-full -mb-4 lg:-mb-20 px-spacing-small">
            Why STEM Teacher Training?
        </h2>
        <div className="flex z-10 flex-1 flex-col basis-80 items-center md:items-start text-center overflow-x-clip md:text-left py-10 md:p-20 gap-10 justify-center">
            <p className="z-10 md:text-4xl">
                This isn't just a training course; it's a gateway to transforming your teaching practice.
                We believe every educator has the power to inspire curiosity and creativity in students.
                With our STEM Teacher Training, you'll learn how to design a classroom experience that prepares students for the future,
                nurtures critical thinking, and bridges the gap between school and the real world.
            </p>

            <a href="#waitlist-form" className="border-none outline-none bg-blue-normal text-white flex items-center md:text-2xl gap-2 hover:gap-5 px-5 py-2 rounded-full transition-all">
                Join the Waitlist <FaArrowRightLong size={20} />
            </a>
        </div>

        <img src={mainHeroImage} className="w-[30em] md:w-[40em] z-10 object-contain" />
    </section>
}