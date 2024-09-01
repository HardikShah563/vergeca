// importing compoments
import { Icai } from "@/components/sections/icai";

export default function page() {
    const aosDelay = 200;
    const aosDuration = 600;

    return (
        <>
            <section
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={aosDelay}
                data-aos-duration={aosDuration}
                id="icai"
            >
                <Icai />
            </section>
        </>
    );
};
