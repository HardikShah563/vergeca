"use client";

// importing from react
import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// importing from next
import Image from "next/image";
import Link from "next/link";

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
import mainBanner from "@/public/images/mainBanner.svg";
import playstore from "@/public/images/playstore.svg";
import appstore from "@/public/images/appstore.svg";
import webapp from "@/public/images/webapp.svg";
import { MoveLeft, MoveRight } from "lucide-react";
import { Availability } from "./availability";

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
                    <CarouselItem key={1}>
                        <Card className="md:h-[60vh] items-center bg-muted m-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full items-center w-[80%] mx-auto py-5 md:py-0">
                                <div>
                                    <h1 className="heading md:text-6xl lg:text-7xl text-center md:text-left uppercase">
                                        Verge CA
                                    </h1>

                                    <h1 className="sub-heading text-center md:text-left">
                                        Revision App for CA Inter & CA Final Students
                                    </h1>

                                    <Availability />
                                </div>

                                <div>
                                    <Image
                                        src={mainBanner}
                                        alt={"main banner"}
                                        className="w-full"
                                        fetchPriority="high"
                                    />
                                </div>
                            </div>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key={2} className="flex items-center">
                        <Card className="md:h-[60vh] items-center bg-muted m-1 w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full items-center w-[80%] mx-auto py-5 md:py-0">
                                <div>
                                    <h1 className="heading text-center md:text-left leading-snug">
                                        App Introduction by <br /> CA Hrudyesh Pankhania
                                    </h1>

                                    <p className="paragraph text-xl text-muted-foreground text-center md:text-left capitalize">
                                        {/* Learn from professionals about our app */}
                                    </p>

                                    <Availability />
                                </div>

                                <div>
                                    <iframe
                                        className="aspect-video w-full"
                                        src="https://www.youtube.com/embed/V6Q3N2BW1Oc?si=OjWcp_C3DQmjLN91"
                                        title="Verge CA App Introduction by Sir CA Hrudyesh Pankhania"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    >
                                    </iframe>
                                </div>
                            </div>
                        </Card>
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
