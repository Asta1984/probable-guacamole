import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordian"
import { Card, CardContent } from "./card"

const accordionData = [
  {
    question: "40 Million+ Questions Practiced",
    answer: "Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas",
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1731330769/vtga4hno9tvp668jm34i.svg?_upload_ref=ic_img_tool" 
  },
  {
    question: "1 Million+ hours of learning content consumed",
    answer: "Watch live or recorded lectures from ALLEN's top faculty, covering every topic and difficulty level.",
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1731330884/lls3agf6fwmht6zba5vx.svg?_upload_ref=ic_img_tool" 
  },
  {
    question: "1 Million+ Doubts Solved",
    answer: "Get instant answers with faculty help & our AI Assistant available 24/7 in any language.",
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1731330851/jncudghayyflxuxoodkg.svg?_upload_ref=ic_img_tool" 
  }
];

export function AccordionWithImages() {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleAccordionChange = (value) => {
    setExpandedItem(value === expandedItem ? null : value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Accordion 
        type="single" 
        defaultValue={expandedItem}
        className="w-full md:w-1/2"
      >
        {accordionData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger 
              className="text-left"
              value={`item-${index}`}
              //onClick={() => handleAccordionChange(`item-${index}`)}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent value={`item-${index}`}>
              <div className="text-sm text-slate-500">
                {item.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Card className="w-full md:w-1/2">
        <CardContent className="p-4">
          {expandedItem ? (
            <img 
              src={accordionData[parseInt(expandedItem.split('-')[1])].image} 
              alt={`Illustration for ${accordionData[parseInt(expandedItem.split('-')[1])].question}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-[300px] bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">
              Select an item to view image
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

