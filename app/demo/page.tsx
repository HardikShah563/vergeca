// importing images
import demo1 from "@/public/images/demo1.png";
import demo2 from "@/public/images/demo2.png";
import demo3 from "@/public/images/demo3.png";
import demo4 from "@/public/images/demo4.png";
import demo5 from "@/public/images/demo5.png";
import demo6 from "@/public/images/demo6.png";
import demo7 from "@/public/images/demo7.png";
import demo8 from "@/public/images/demo8.png";
import demo9 from "@/public/images/demo9.png";
import demo10 from "@/public/images/demo10.png";
import demo11 from "@/public/images/demo11.png";
import demo12 from "@/public/images/demo12.png";
import demo13 from "@/public/images/demo13.png";
import demo14 from "@/public/images/demo14.png";

export default function page() {
    return (
        <>
            <div className="section md:my-10">
                <h2 className="heading mb-10 text-center">
                    Demo
                </h2>

                <div className="flex justify-center">
                    <iframe
                        className="aspect-video w-[90vw] sm:w-[80vw] md:w-[700px]"
                        src="https://www.youtube.com/embed/V6Q3N2BW1Oc?si=tzyrsmYJrG6RRLK7"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    >
                    </iframe>
                </div>

                <div className=""></div>
            </div>
        </>
    );
};
