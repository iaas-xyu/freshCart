import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function FaqAccodion({question, answer}) {
  return (
    <>
        <Accordion collapseAll className="text-[13px] md:text-base">
        <AccordionPanel>
            <AccordionTitle>{question}</AccordionTitle>
            <AccordionContent className="bg-green-500 text-white">
            <p className="mb-2 dark:text-gray-400">{answer}</p>
            </AccordionContent>
        </AccordionPanel>
        </Accordion>
    </>
  );
}

export default FaqAccodion