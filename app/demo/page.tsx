// importing from next
import Image from "next/image";

// importing images
import web1 from "@/public/images/web1.png";

// importing data
import { demoImages } from "@/lib/data";

export default function Demo() {
    return (
        <>
            <div className="section md:mt-10">
                <h2 className="heading mb-10 text-center">
                    Demo of the App
                </h2>

                <div className="space-y-10 mx-auto">
                    <iframe
                        className="aspect-video w-[90vw] sm:w-[80vw] md:w-[700px] mx-auto"
                        src="https://www.youtube.com/embed/V6Q3N2BW1Oc?si=tzyrsmYJrG6RRLK7"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    >
                    </iframe>
                </div>

            </div>
            <div className="section pt-0 mb-20">
                <h2 className="heading mb-10 text-center capitalize">
                    Application Previews
                </h2>

                <Image
                    src={web1}
                    alt={"demo image - webapp"}
                    className="h-full mt-10"
                />
                <h1 className="text-lg md:text-2xl font-bold text-center mt-2 leading-normal mb-10 md:mb-20">
                    Demo interface of our web app
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 space-y-14 md:space-y-10">
                    {demoImages.map((demoImg, index) => (
                        <div key={index}>
                            <Image
                                src={demoImg.image}
                                alt={"demo image " + (index + 1)}
                                className="h-full"
                            />
                            {demoImg.title && (
                                <h1 className="text-xs md:text-lg font-bold text-center mt-2 leading-normal">
                                    {demoImg.title}
                                </h1>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
