// importing components
import { Main } from "@/components/sections/main";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { ContactUs } from "@/components/sections/contact-us";
import { About } from "@/components/sections/about";

export default function Home() {
    return (
        <>
            <div className="page">
                <section>
                    <Main />
                </section>

                <section>
                    <About />
                </section>

                <section>
                    <Features />
                </section>

                <section>
                    <Pricing />
                </section>

                <section>
                    <Faq />
                </section>

                <section>
                    <ContactUs />
                </section>
            </div>
        </>
    );
}
