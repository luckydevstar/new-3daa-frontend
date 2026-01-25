import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
    return (
        <div className="max-w-7xl mx-auto py-20">
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1">
                    <h1 className="text-6xl font-bold text-primaryMain">
                        FAQs
                    </h1>
                    <h4 className="text-2xl text-black mt-4 mb-6">
                        Frequeltny Asked Questions About Our Still Renderings Online Course
                    </h4>
                    <p className="text-lg text-black">
                        We've gathered the most common questions from our learners to help you get started with confidence.
                    </p>
                </div>
                <div className="col-span-1">
                    <Accordion type="single" collapsible defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg text-black font-bold hover:no-underline cursor-pointer">Are the courses self-paced or live?</AccordionTrigger>
                            <AccordionContent className="text-base text-black">
                                All of osur courses are designed to be 100% self-paced. You can start anytime, learn at your own speed, and revisit lessons as needed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg text-black font-bold hover:no-underline cursor-pointer">Will I receive a certificate after completing a course?</AccordionTrigger>
                            <AccordionContent className="text-base text-black">
                                All of osur courses are designed to be 100% self-paced. You can start anytime, learn at your own speed, and revisit lessons as needed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg text-black font-bold hover:no-underline cursor-pointer">Do I need any prior experience to enrol?</AccordionTrigger>
                            <AccordionContent className="text-base text-black">
                                All of osur courses are designed to be 100% self-paced. You can start anytime, learn at your own speed, and revisit lessons as needed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg text-black font-bold hover:no-underline cursor-pointer">How do I access the courses after purchasing?</AccordionTrigger>
                            <AccordionContent className="text-base text-black">
                                All of osur courses are designed to be 100% self-paced. You can start anytime, learn at your own speed, and revisit lessons as needed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-lg text-black font-bold hover:no-underline cursor-pointer">What payment methods are accepted?</AccordionTrigger>
                            <AccordionContent className="text-base text-black">
                                All of osur courses are designed to be 100% self-paced. You can start anytime, learn at your own speed, and revisit lessons as needed.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq;