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
        Autoplay({ delay: 2000 })
    );

    return (
        <>
            <Carousel
                className="w-full"
                plugins={[plugin.current]}
                setApi={setApi}
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="h-[80vh] flex flex-col justify-center items-center">
                                    <h1 className="heading md:text-6xl lg:text-7xl text-center uppercase">
                                        Verge CA
                                    </h1>
                                    <h1 className="sub-heading text-center">
                                        One stop destination for complete CA Revision
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
                    ))}
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
