// importing from next
import Link from "next/link";

// importing shadcn components
import { Button } from "@/components/ui/button";

// importing components
import { Testimonials } from "@/components/sections/testimonials";

// importing icons
import { ArrowLeft } from "lucide-react";


export default function page() {
    const aosDelay = 200;
    const aosDuration = 600;

    return (
        <>
            <Button className="sticky left-3 top-24 gap-2 pl-2.5 bg-accent" asChild>
                <Link href={"/"}>
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </Button>

            <section
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={aosDelay}
                data-aos-duration={aosDuration}
                id="testimonials"
            >
                <Testimonials />
            </section>
        </>
    );
};
