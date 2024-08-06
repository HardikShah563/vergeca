// importing from next
import Link from "next/link";

// importing shadcn compoentns
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function About() {
    return (
        <>
            <section className="section bg-muted">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div>
                        <h2 className="heading mb-5">
                            About Verge CA
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
                            He has also&nbsp;
                            <span className="font-bold text-foreground">
                                completed all three levels of the CFA (USA) program,
                            </span>
                            with the Charter Pending as of February 2023, and both levels of the CIPM (CFA USA) &nbsp;program in February 2024.
                            Neel has played a pivotal role in developing and curating online content and practice materials to aid CA aspirants in their journey.
                        </p>

                        <Button className="bg-accent" asChild>
                            <Link
                                className="mt-8 inline-flex gap-1 h-10 items-center justify-center rounded-md px-4 text-sm font-medium"
                                href={"/about-app"}
                            >
                                Learn more about the App <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            alt="Neel Paresh Doshi Picture"
                            className="object-cover bg-background"
                            height="400"
                            src="/placeholder.svg"
                            width="300"
                        />
                        <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                            CA Neel Paresh Doshi
                        </h3>
                        <p className="mt-2 text-muted-foreground font-medium">
                            Founder
                        </p>
                        <p className="mt-2 text-muted-foreground font-medium">
                            Chartered Accountant
                        </p>
                        <p className="mt-2 text-muted-foreground font-medium">
                            CFA & CIPM (USA)
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
