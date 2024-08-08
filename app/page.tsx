// importing components
import { Main } from "@/components/sections/main";
import { FixedIcons } from "@/components/sections/fixed-icons";
import { About } from "@/components/sections/about";
import { Daughters } from "@/components/sections/daughters";
import { Vision } from "@/components/sections/vision";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Introduction } from "@/components/sections/introduction";
import { Demo } from "@/components/sections/demo";
import { Analysis } from "@/components/sections/analysis";
import { Faq } from "@/components/sections/faq";
import { ContactUs } from "@/components/sections/contact-us";
import { AOS_Component } from "@/components/aos/aos";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
    const aosDelay = 200;
    const aosDuration = 600;

    return (
        <>
            <div className="page max-w-[1640px] mx-auto">
                <AOS_Component />

                <FixedIcons />

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <Main />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <About />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <Vision />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <Features />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <Testimonials />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <Pricing />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <Introduction />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <Demo />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <Analysis />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    className="bg-muted"
                >
                    <Faq />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <Daughters />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                    className="bg-muted"
                >
                    <ContactUs />
                </section>
            </div>
        </>
    );
}
