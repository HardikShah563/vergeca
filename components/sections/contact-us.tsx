// importing shadcn components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// importing icons
import { ArrowUpRight } from "lucide-react";

export function ContactUs() {
    return (
        <>
            <section className="section pt-10">
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
                            <Input id="last-name" placeholder="Enter your mobile number" />
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
                    <Button
                        variant={"default"}
                        className="w-full bg-accent group-hover:bg-foreground gap-1"
                    >
                        Send message <ArrowUpRight className="w-4 h-4" />
                    </Button>

                    <div className="flex items-center gap-5 w-full py-5">
                        <div className="border w-full"></div>
                        <span>OR</span>
                        <div className="border w-full"></div>
                    </div>

                    <Card className="p-5">
                        <h1 className="text-xl font-semibold">
                            You can drop us a text:
                        </h1>

                        <br />

                        <div className="my-2">
                            <span className="mr-2">Email: </span>
                            <a href="mailto:vergecainfo@gmail.com" className="font-semibold">
                                vergecainfo@gmail.com
                            </a>
                        </div>

                        <div>
                            <span className="mr-2">Phone: </span>
                            <span>
                                <a target="_blank" href="https://wa.me/919870942020" className="font-semibold whitespace-nowrap">
                                    +91 9870942020
                                </a>
                            </span>
                            /
                            <span>
                                <a target="_blank" href="https://wa.me/919821342020" className="font-semibold whitespace-nowrap">
                                    +91 9821342020
                                </a>
                            </span>
                        </div>
                    </Card>
                </div>
            </section>
        </>
    )
}