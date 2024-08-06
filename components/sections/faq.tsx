// importing shadcn components
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// importing data
import { faq } from "@/lib/data";

export function Faq() {
    return (
        <>
            <div className="section bg-muted">
                <h1 className="heading mb-10 text-center md:text-left">
                    Frequently Asked Questions
                </h1>

                <div className="flex gap-5">
                    <Accordion type="single" collapsible className="w-full">
                        {faq.map((question) => (
                            <AccordionItem
                                value={question.question}
                                key={question.question}
                                className="my-2 px-4 border rounded-md"
                            >
                                <AccordionTrigger className="text-left mr-2">{question.question}</AccordionTrigger>
                                <AccordionContent>
                                    {question.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="hidden md:flex border">
                        some image
                    </div>
                </div>
            </div>
        </>
    );
};
