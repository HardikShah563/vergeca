// importing icons
import { Linkedin } from "lucide-react";

export function FixedIcons() {
    return (
        <>
            <a
                target="_blank"
                href={"https://www.linkedin.com/in/vergeca"}
                className="fixed -left-12 top-[20vh] md:top-[40vh] -rotate-90 bg-accent z-20 px-4 py-1 flex gap-2 text-background rounded-md"
            >
                <Linkedin className="text-background" /> VergeCA
            </a>
        </>
    );
};
