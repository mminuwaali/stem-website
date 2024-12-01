import React from "react";
import Cta from "../components/cta";
import Expect from "../components/expect";
import Enroll from "../components/enroll";
import Waitlist from "../components/waitlist";
import { microscopeIcon } from "../constants/media";
import Overview from "../components/overview";

export default function Page() {
    return <>
        <Overview>
            <div className="w-full relative rounded-[2em] bg-white shadow-md gap-10 flex flex-col p-10">
                <h2 className="text-2xl md:text-4xl capitalize">stay tuned</h2>

                <img src={microscopeIcon} alt="" className="h-20 absolute left-1/5 bottom-0 translate-y-1/2" />
            </div>
        </Overview>
        <Expect />
        <Waitlist />
        <Cta />
        <Enroll />
    </>;
}
