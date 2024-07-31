// importing from next
import Link from "next/link";

// importing shadcn compoentns
import { Button } from "@/components/ui/button";

export function About() {
    return (
        <>
            <section className="section">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                    <div>
                        <h2 className="heading mb-5">
                            About Verge CA
                        </h2>

                        <p className="mt-4 text-muted-foreground text-justify text-sm lg:text-md">
                            Verge CA is an innovative platform dedicated to assisting aspiring Chartered Accountants. Founded in November 2020, the platform aims to provide high-quality educational resources, focusing on comprehensive and efficient revision for CA Final and CA Inter students.
                        </p>

                        <p className="mt-4 text-muted-foreground text-justify text-sm lg:text-md">
                            It is especially designed to serve students in Tier II and Tier III cities, offering a complete set of institute materials and practice questions in one place. Verge CA emphasizes in-depth subject knowledge and technical guidance, ensuring students have access to the best educational quality available.
                        </p>

                        <h2 className="sub-heading">
                            About The Founder
                        </h2>

                        <p className="mt-4 text-muted-foreground text-justify text-sm lg:text-md">
                            <span className="font-bold text-foreground">Neel Paresh Doshi</span>, the co-founder of Verge CA, is a Chartered Accountant who achieved success in the CA Final exams on his first attempt in November 2023.
                            He has also&nbsp;
                            <span className="font-bold text-foreground">
                                all three levels of the CFA (USA) program, with the Charter Pending as of February 2023, and both levels of the CIPM (CFA USA)
                            </span>
                            &nbsp;program in February 2024.
                            Neel has played a pivotal role in developing and curating online content and practice materials to aid CA aspirants in their journey.
                        </p>

                        <Button asChild>
                            <Link
                                className="mt-8 inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium"
                                href={"/about-app"}
                                prefetch={false}
                            >
                                Learn more about the App
                            </Link>
                        </Button>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            alt="Neel Paresh Doshi Picture"
                            className="object-cover bg-muted"
                            height="400"
                            src="/placeholder.svg"
                            width="300"
                        />
                        <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                            CA Neel Paresh Doshi
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                            Founder
                        </p>
                        <p className="mt-2 text-muted-foreground">
                            CFA & CIPM (USA)
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
