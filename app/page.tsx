// importing from next
import Image from "next/image";

// importing components
import { Faq } from "@/components/sections/faq";
import { ContactUs } from "@/components/sections/contact-us";

export default function Home() {
    return (
        <>
            <div className="page">
                <section className="section">
                    <Faq />
                </section>

                <section className="section">
                    <ContactUs />
                </section>
            </div>
        </>
    );
}
