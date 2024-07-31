// importing from next
import Image from "next/image";

// importing shadcn components
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactUs() {
    return (
        <>
            <section className="section bg-muted">
                <div className="my-5">
                    <h1 className="heading text-center my-10">
                        Contact Us
                    </h1>
                </div>

                <div className="px-[5vw] md:px-[10vw] lg:px-[20vw] space-y-4">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label htmlFor="first-name">Name</Label>
                            <Input id="first-name" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="last-name">Phone Number</Label>
                            <Input id="last-name" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" type="email" />
                    </div>
                    <div className="space-y-1">
                        <Label>Subject</Label>
                        <Input id="subject" placeholder="Enter your subject" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
                    </div>
                    <Button type="submit" className="bg-gray-800 text-white">
                        Send message
                    </Button>

                    <div className="md:w-[500px]">
                        {/* <Image
                            src={""}
                            alt={""}
                            width={500}
                            height={500}
                            className="h-full"
                        /> */}
                    </div>
                </div>
            </section>
        </>
    )
}