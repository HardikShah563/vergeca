// importing shadcn components
import { Button } from "@/components/ui/button";

// importing data
import { vision } from "@/lib/data";

interface VisionCardInterface {
    icon: any, 
    heading: string, 
    paragraph: string
}

export function VisionCard(props: { icon: any, heading: string, paragraph: string }) {
    return (
        <div>
            {/* <props.icon className="w-8 h-8 text-primary" /> */}
            <h3 className="mt-4 text-lg font-medium">
                {props.heading}
            </h3>
            <p className="mt-2 text-muted-foreground">
                {props.paragraph}
            </p>
        </div>
    );
}

export function Vision() {
    return (
        <>
            <section id={"vision"} className={"section"}>
                <div className="space-y-2">
                    <p className="max-w-[900px] text-muted-foreground font-semibold md:text-md">
                        WHY CHOOSE US
                    </p>
                    <h1 className="heading">
                        Our Vision
                    </h1>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    {vision.map((vis) => (
                        <VisionCard
                            key={vis.heading}
                            icon={vis.icon}
                            heading={vis.heading}
                            paragraph={vis.paragraph}
                        />
                    ))}
                </div>

                <Button>Learn more about app</Button>
            </section>
        </>
    );
};
