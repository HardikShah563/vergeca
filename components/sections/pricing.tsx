// importing shadcn components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricing } from "@/lib/data";

// importing icons
import {
    Check,
    X
} from "lucide-react";

interface PriceCardInterface {
    name: string,
    cost: number,
    costDivision: string,
    duration: number,
    userCount: number,
    features: string[]
}

export function PricingCard(props: PriceCardInterface) {
    return (
        <>
            <Card className="group flex flex-col items-center justify-between rounded-lg p-6 text-center shadow-sm transition-all w-[80vw] sm:w-60 border border-muted hover:border-muted-foreground hover:bg-muted">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{props.name}</h3>
                    <p className="text-4xl font-bold">₹{props.cost}</p>
                    <p className="text-muted-foreground">{props.costDivision}</p>
                </div>
                <ul className="my-6 space-y-2 text-left">
                    {props.features.map((feature) => (
                        <li className="flex items-center gap-2" key={feature}>
                            <Check className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <Button variant={"default"} className="w-full bg-accent group-hover:bg-foreground">Get Started</Button>
            </Card>
        </>
    );
}

export function Pricing() {
    return (
        <>
            <section id={"pricing"} className={"section"}>
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="heading">
                                Pricing
                            </h1>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Choose the plan that fits your needs.
                            </p>
                        </div>

                        <div className="w-full max-w-3xl flex flex-wrap justify-center gap-5">
                            {pricing.map((pricingCard) => (
                                <PricingCard
                                    key={pricingCard.name}
                                    name={pricingCard.name}
                                    cost={pricingCard.cost}
                                    costDivision={pricingCard.costDivision}
                                    duration={pricingCard.duration}
                                    userCount={pricingCard.userCount}
                                    features={pricingCard.features}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
