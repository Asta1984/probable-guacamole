import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordian";

const accordionData = [
  {
    question: "40 Million+ Questions Practiced",
    answer: "Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas",
  },
  {
    question: "1 Million+ hours of learning content consumed",
    answer: "Watch live or recorded lectures from ALLEN's top faculty, covering every topic and difficulty level.",
  },
  {
    question: "1 Million+ Doubts Solved",
    answer: "Get instant answers with faculty help & our AI Assistant available 24/7 in any language.",
  },
];

const AccordionWithImages = () => {
  return (
    <div className="p-5  md:p-6 ">
      <Accordion type="single" style={{ minHeight: "300px" }}>
        {accordionData.map((item, index) => (
          <AccordionItem key={index} value={item.question}>
            <AccordionTrigger value={item.question}>
              {item.question}
            </AccordionTrigger>
            <AccordionContent value={item.question}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionWithImages;
