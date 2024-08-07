"use client";

// importing from react
import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// importing from next
import Image from "next/image";

// importing shadcn component
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel";

// importing image
import playstore from "@/public/images/playstore.svg";
import webapp from "@/public/images/webapp.svg";
import { MoveLeft, MoveRight } from "lucide-react";

export function Main() {
    const [api, setApi] = useState<CarouselApi>();

    const plugin = useRef(
        Autoplay({ delay: 5000 })
    );

    return (
        <>
            <Carousel
                className="w-full"
                plugins={[plugin.current]}
                setApi={setApi}
                opts={{
                    align: "center",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {/* {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="h-[80vh] flex flex-col justify-center items-center">
                                    <h1 className="heading md:text-6xl lg:text-7xl text-center uppercase">
                                        Verge CA
                                    </h1>
                                    <h1 className="sub-heading text-center">
                                        Revision App for CA Inter & CA Final Students
                                    </h1>

                                    <div className="flex justify-center gap-2 sm:gap-5">
                                        <Image
                                            src={playstore}
                                            alt=""
                                            className="w-[120px] sm:w-[160px]"
                                        />

                                        <Image
                                            src={webapp}
                                            alt=""
                                            className="w-[120px] sm:w-[160px]"
                                        />
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))} */}
                    <CarouselItem key={1}>
                        <div className="p-1">
                            <Card className="h-[60vh] flex flex-col justify-center items-center">
                                <h1 className="heading md:text-6xl lg:text-7xl text-center uppercase">
                                    Verge CA
                                </h1>
                                <h1 className="sub-heading text-center">
                                    Revision App for CA Inter & CA Final Students
                                </h1>

                                <div className="flex justify-center gap-2 sm:gap-5">
                                    <Image
                                        src={playstore}
                                        alt=""
                                        className="w-[120px] sm:w-[160px]"
                                    />

                                    <Image
                                        src={webapp}
                                        alt=""
                                        className="w-[120px] sm:w-[160px]"
                                    />
                                </div>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem key={2} className="flex items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mx-10 md:mx-20">
                            <div>
                                <h1 className="heading text-center md:text-left">
                                    App Introduction by CA Hrudyesh Pankhania
                                </h1>
                                <p className="paragraph text-xl text-muted-foreground text-center md:text-left capitalize">
                                    Learn from professionals about our app
                                </p>
                            </div>

                            <div>
                                <iframe
                                    className="aspect-video w-full"
                                    src="https://www.youtube.com/embed/V6Q3N2BW1Oc?si=OjWcp_C3DQmjLN91"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                >
                                </iframe>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <div className="flex justify-center gap-5 mt-2 mb-3">
                    <Button variant={"secondary"} onClick={() => { api?.scrollPrev() }}>
                        <MoveLeft />
                    </Button>
                    <Button variant={"secondary"} onClick={() => { api?.scrollNext() }}>
                        <MoveRight />
                    </Button>
                </div>
            </Carousel>
        </>
    );
};
