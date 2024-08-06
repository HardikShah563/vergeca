// importing components
import { Main } from "@/components/sections/main";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { ContactUs } from "@/components/sections/contact-us";
import { AOS_Component } from "@/components/aos/aos";
import { Vision } from "@/components/sections/vision";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
    const aosDelay = 200;
    const aosDuration = 600;

    return (
        <>
            <div className="page max-w-[1640px] mx-auto">
                <AOS_Component />

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
                    <Faq />
                </section>

                <section
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={aosDelay}
                    data-aos-duration={aosDuration}
                >
                    <ContactUs />
                </section>
            </div>
        </>
    );
}
