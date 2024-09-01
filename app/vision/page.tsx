// importing components
import { Features } from "@/components/sections/features";
import { Icai } from "@/components/sections/icai";
import { Vision } from "@/components/sections/vision";

export default function page() {
    const aosDelay = 200;
    const aosDuration = 600;

    return (
        <>
            <div className="page max-w-[1640px] mx-auto">
                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    id="vision"
                >
                    <Vision />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    id="features"
                >
                    <Features />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    id="icai"
                >
                    <Icai />
                </section>
            </div>
        </>
    );
};
