// importing shadcn components
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";

// importing data
import { testimonials } from "@/lib/data";

export function InfiniteTestimonialScroll() {
    return (
        <>
            <div>
                <div className="relative w-full flex items-center p-10 sm:p-20 md:p-40 overflow-x-hidden">
                    <div className="flex absolute left-0 animate-marquee-infinite">
                        <div className="flex gap-5">
                            {testimonials.map((testimonial) => (
                                <TestimonialCard />
                            ))}
                            {testimonials.map((testimonial) => (
                                <TestimonialCard />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function TestimonialCard() {
    return (
        <>
            <Card className="min-w-[300px]">
                <CardContent className="p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Feedback</p>
                    <p className="mt-1.5 text-lg font-semibold lg:text-base xl:text-xl">
                        &ldquo;The platform allowed our team to focus on shipping features instead of managing
                        infrastructure.&ldquo;
                    </p>
                </CardContent>
                <CardFooter>
                    <div className="flex items-center space-x-3">
                        <img
                            src="/placeholder.svg"
                            width="40"
                            height="40"
                            alt="Avatar"
                            className="rounded-full bg-muted"
                            style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                        <div className="text-sm font-semibold">
                            Jane Cooper
                            <div className="text-xs font-normal text-gray-500 dark:text-gray-400">CEO, Example Inc</div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}

export function Testimonials() {
    return (
        <section className={"py-32"}>
            <div className="px-[5vw] md:px-[10vw] pb-10 container grid items-center gap-4 lg:grid-cols-2 xl:gap-10">
                <div className="space-y-4">
                    <h2 className="heading">
                        Loved and trusted by students.
                    </h2>
                    <p className="paragraph text-xl text-muted-foreground md:w-[90%]">
                        See what students are saying about their experience with our platform.
                    </p>
                </div>
            </div>

            <InfiniteTestimonialScroll />
        </section>
    )
}