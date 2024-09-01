// importing from next
import Link from "next/link";

// importing components
import { Features } from "@/components/sections/features";
import { Support } from "@/components/sections/support";
import { Vision } from "@/components/sections/vision";
import { Button } from "@/components/ui/button";

// importing icons
import { ArrowLeft } from "lucide-react";

export default function page() {
    const aosDelay = 200;
    const aosDuration = 600;

    return (
        <>
            <Support />

            <Button className="sticky left-3 top-24 gap-2 pl-2.5 bg-accent" asChild>
                <Link href={"/"}>
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </Button>

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
            </div>
        </>
    );
};
