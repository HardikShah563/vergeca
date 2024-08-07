// importing from next
import Image from "next/image";

// importing images
import daughter1 from "@/public/images/daughters1.png";
import daughter2 from "@/public/images/daughters2.png";

// importing compoentns
import { ArrowButton } from "./arrow-button";

// importing image

export function Daughters() {
    return (
        <>
            <section className="section">
                <h2 className="heading mb-5">
                    Daughters of India
                </h2>
                <p className="paragraph text-xl text-muted-foreground md:w-[90%] text-center md:text-left">
                    See what students are saying about their experience with our platform.
                </p>

                <div className="flex gap-10 px-40">
                    <a
                        target="_blank"
                        href="http://www.swamisharnanandji.org/"
                    >
                        <Image
                            src={daughter1}
                            alt={"daughter 1"}
                            className="w-full"
                        />
                    </a>

                    <a
                        target="_blank"
                        href="http://www.swamisharnanandji.org/"
                    >
                        <Image
                            src={daughter2}
                            alt={"daughter 2"}
                            className="w-full"
                        />
                    </a>
                </div>
            </section>
        </>
    );
};
