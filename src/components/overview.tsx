import React from "react";

export default function Overview(properties: React.PropsWithChildren) {
    return <section id="overview" className="w-full bg-white p-4 rounded-xl">
        {properties.children}
    </section>
}
