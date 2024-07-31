// importing shadcn components
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
    const questions = [
        {
            "question": "q1",
            "answer": "a1"
        },
        {
            "question": "q2",
            "answer": "a2"
        },
        {
            "question": "q3",
            "answer": "a3"
        },
        {
            "question": "q4",
            "answer": "a4"
        },
        {
            "question": "q5",
            "answer": "a5"
        },
    ];

    return (
        <>
            <div className="section">
                <h1 className="heading mb-10">
                    Frequently Asked Questions
                </h1>

                <div className="flex gap-5">
                    <Accordion type="single" collapsible className="w-full">
                        {questions.map((question) => (
                            <AccordionItem value={question.question} className="my-2 px-4 border rounded-md">
                                <AccordionTrigger>{question.question}</AccordionTrigger>
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
