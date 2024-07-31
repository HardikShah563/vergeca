// importing shadcn components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// importing icons
import {
    Check,
    X
} from "lucide-react";

export function Pricing() {
    return (
        <>
            <section id="pricing" className="section">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="heading">
                                Pricing
                            </h1>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Choose the plan that fits your needs.
                            </p>
                        </div>
                        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            <Card className="flex flex-col items-center justify-between rounded-lg border border-gray-200 p-6 text-center shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">Starter</h3>
                                    <p className="text-4xl font-bold">$9</p>
                                    <p className="text-gray-500 dark:text-gray-400">per month</p>
                                </div>
                                <ul className="my-6 space-y-2 text-left">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>100 messages per month</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Basic analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <X className="h-4 w-4 text-red-500" />
                                        <span>No scheduling</span>
                                    </li>
                                </ul>
                                <Button className="w-full">Get Started</Button>
                            </Card>

                            <Card className="flex flex-col items-center justify-between rounded-lg border-2 border-[#25D366] bg-[#25D366]/10 p-6 text-center shadow-sm transition-all hover:border-[#25D366]/80 dark:border-[#25D366] dark:bg-[#25D366]/20 dark:hover:border-[#25D366]/80">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">Pro</h3>
                                    <p className="text-4xl font-bold">$19</p>
                                    <p className="text-gray-500 dark:text-gray-400">per month</p>
                                </div>
                                <ul className="my-6 space-y-2 text-left">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>1,000 messages per month</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Advanced analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Scheduling</span>
                                    </li>
                                </ul>
                                <Button className="w-full">Get Started</Button>
                            </Card>

                            <Card className="flex flex-col items-center justify-between rounded-lg border border-gray-200 p-6 text-center shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">Enterprise</h3>
                                    <p className="text-4xl font-bold">$49</p>
                                    <p className="text-gray-500 dark:text-gray-400">per month</p>
                                </div>
                                <ul className="my-6 space-y-2 text-left">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Unlimited messages</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Comprehensive analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Dedicated support</span>
                                    </li>
                                </ul>
                                <Button className="w-full">Get Started</Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
