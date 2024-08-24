// importing from next
import Image from "next/image";

// importing images
import playstore from "@/public/images/playstore.png";
import appstore from "@/public/images/appstore.png";
import webapp from "@/public/images/webapp.png";

export function Availability() {
    return (
        <>
            <h1 className="text-md font-semibold mb-1">Now Available At: </h1>
            <div className="flex gap-3">
                <a target="_blank" href={"https://play.google.com/store/apps/details?id=com.vergeca&hl=en_IN"}>
                    <Image
                        src={playstore}
                        alt=""
                        className="w-[120px] sm:w-[140px] h-[42px]"
                        fetchPriority="high"
                    />
                </a>

                <a target="_blank" href={"https://vergeca.in/web/login"}>
                    <Image
                        src={webapp}
                        alt=""
                        className="w-[120px] sm:w-[140px] h-[42px] border rounded-lg border-muted"
                        fetchPriority="high"
                    />
                </a>
            </div>

            <h1 className="text-md font-semibold mb-1">Coming Soon: </h1>
            <div>
                <Image
                    src={appstore}
                    alt=""
                    className="w-[120px] sm:w-[140px] h-[42px]"
                    fetchPriority="high"
                />
            </div>
        </>
    );
};
