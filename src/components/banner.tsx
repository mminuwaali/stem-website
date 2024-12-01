import React from "react";

export default function Banner(props: React.PropsWithChildren) {
    return <section id="banner" className="py-10 flex flex-wrap relative px-spacing-small md:px-spacing-normal">
        <div className="basis-80 flex-1">
            {props.children}
        </div>

        <div className="relative basis-60">
            <div className="h-full w-full rounded-3xl bg-pink-normal"></div>
        </div>
    </section>
}
