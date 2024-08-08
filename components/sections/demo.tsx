// importing from next
import Image from "next/image";
import Link from "next/link";

// importing component
import { ArrowButton } from "./arrow-button";

// importing images
import demoBanner from "@/public/images/demoBanner.svg";

export function Demo() {
    return (
        <>
            <div className="section grid grid-cols-1 md:grid-cols-2 items-center bg-muted">
                <div className="space-y-10">
                    <h1 className="heading">
                        View Demo
                    </h1>

                    <p className="paragraph">
                        The app is available in the form of Web App as well as an android app. You can check our video in which CA Hrudyesh Pankhania explains the functions of the app. Below is a detailed summary with screenshots.
                    </p>

                    <ArrowButton
                        text={"View Demo"}
                        link={"/demo"}
                    />
                </div>

                <Link href={"/demo"} className="ml-auto">
                    <Image
                        src={demoBanner}
                        alt="demo banner"
                        className="w-[80%]"
                    />
                </Link>
            </div>
        </>
    );
};
