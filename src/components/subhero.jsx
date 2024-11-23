import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordian";
import {
  Card,
  CardContent,
} from "./card";

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

const AccordionWithImages = () => {
  const [activeImage, setActiveImage] = React.useState("");
  const [activeItem, setActiveItem] = React.useState(""); // New state to track active accordion item

  const handleToggle = (image, question) => {
    setActiveImage(image);  // Set image for the selected accordion item
    setActiveItem(question); // Update active item for accordion toggle
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Accordion Section */}
      <Accordion type="single" className="w-full md:w-1/2" style={{ minHeight: "300px" }}>
        {accordionData.map((item, index) => (
          <AccordionItem key={index} value={item.question}>
            <AccordionTrigger
              value={item.question}
              //onClick={() => handleToggle(item.image, item.question)} // Trigger both actions
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent value={item.question}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Card Section */}
      <div className="w-full md:w-1/2">
        {activeImage && (
          <Card>
            <CardContent>
              <img
                src={activeImage}
                alt="Selected content visual"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AccordionWithImages;
