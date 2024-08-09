// importing from next
import Image from "next/image";

// importing compoentns
import { ArrowButton } from "./arrow-button";

// importing image
import founder from "@/public/images/founder.svg";

export function About() {
    return (
        <>
            <section className="section pt-20 bg-muted">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div>
                        <h2 className="heading mb-5">
                            VergeCA
                        </h2>

                        <p className="mt-3 text-muted-foreground text-justify text-sm md:text-lg">
                            Verge CA is an innovative platform dedicated to
                            &nbsp;<span className="font-bold text-foreground">assisting aspiring Chartered Accountants</span>.
                            Founded in November 2020, the platform aims to provide high-quality educational resources, focusing on comprehensive and efficient revision for
                            &nbsp;<span className="font-bold text-foreground">CA Final and CA Inter students</span>.
                        </p>

                        <h2 className="sub-heading mt-10">
                            About The Founder
                        </h2>

                        <p className="mt-3 text-muted-foreground text-justify text-sm md:text-lg">
                            <span className="font-bold text-foreground">Neel Paresh Doshi</span>, the co-founder of Verge CA, is a
                            &nbsp;<span className="font-bold text-foreground">Chartered Accountant</span>&nbsp;
                            who achieved success in the CA Final exams on his first attempt in November 2023.
                            Additionally, completed all 3 levels of the CFA (USA) program in Feb 2023, with the Charter Pending. Also completed both levels of CIPM (CFA USA) program in Feb 2024.
                            Neel has played a pivotal role in developing and curating online content and practice materials to aid CA aspirants in their journey.
                        </p>

                        <div className="mt-10">
                            <ArrowButton
                                text={"Learn more about the app"}
                                link={"/about"}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            alt="Neel Paresh Doshi Picture"
                            className="object-cover bg-background"
                            height="400"
                            src="/placeholder.svg"
                            width="300"
                        />
                        {/* 
                        <Image
                            src={founder}
                            alt="Neel Paresh Doshi Picture"
                            className="-rotate-90 w-[300px]"
                        />
                         */}
                        <h3 className="mt-4 text-xl font-bold text-foreground">
                            CA Neel Paresh Doshi
                        </h3>
                        <p className="mt-2 text-muted-foreground font-medium">
                            Co-Founder
                        </p>
                        <p className="mt-2 text-muted-foreground font-medium">
                            Chartered Accountant
                        </p>
                        <p className="mt-2 text-muted-foreground font-medium">
                            CFA (USA) & CIPM (CFA USA)
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
