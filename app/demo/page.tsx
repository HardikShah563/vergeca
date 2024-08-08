// importing from next
import Image from "next/image";

// importing data
import { demoImages } from "@/lib/data";

export default function page() {
    return (
        <>
            <div className="section md:mt-10">
                <h2 className="heading mb-10 text-center capitalize">
                    Demo of the App
                </h2>

                <div className="space-y-10 mx-auto">
                    <div>
                        <p className="paragraph text-center sm:w-[80%] lg:w-[60%] mx-auto">
                            The app is available in the form of Web App as well as an android app.
                            You can check our video in which CA Hrudyesh Pankhania explains the functions of the app.
                            Below is a detailed summary with screenshots.
                        </p>
                    </div>

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
            <div className="section pt-0">
                <h2 className="heading mb-10 text-center capitalize">
                    Application Previews
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 space-y-10">
                    {demoImages.map((demoImg, index) => (
                        <div key={index}>
                            <Image
                                src={demoImg.image}
                                alt={"demo image " + (index + 1)}
                                className="h-full"
                            />
                            {demoImg.title && (
                                <h1 className="text-md md:text-lg font-bold text-center mt-2 leading-normal">
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
