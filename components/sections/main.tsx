// importing from next
import Image from "next/image";
import Link from "next/link";

// importing image
import playstore from "@/public/images/playstore.svg";
import webapp from "@/public/images/webapp.svg";

export function Main() {
    return (
        <>
            <div className="section">
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
            </div>
        </>
    );
};
