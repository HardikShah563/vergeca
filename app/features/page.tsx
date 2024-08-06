export default function page() {
    return (
        <>
            <div className="section md:my-10">
                <h2 className="heading mb-10 text-center">
                    Features
                </h2>

                <div className="flex justify-center">
                    <iframe
                        className="aspect-video w-[90vw] sm:w-[80vw] md:w-[700px]"
                        src="https://www.youtube.com/embed/V6Q3N2BW1Oc?si=OjWcp_C3DQmjLN91"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </>
    );
};
