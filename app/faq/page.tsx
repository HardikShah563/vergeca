// importing from next
import Link from "next/link";

// importing shadcn components
import { Button } from "@/components/ui/button";

// importing icons
import { ArrowLeft } from "lucide-react";

// importing components
import { Faq } from "@/components/sections/faq";
import { Support } from "@/components/sections/support";

export default function page() {
    return (
        <>
            <Button className="sticky left-3 top-24 gap-2 pl-2.5 bg-accent" asChild>
                <Link href={"/"}>
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </Button>

            <Support />

            <div className="pt-10">
                <Faq />
            </div>
        </>
    );
};
