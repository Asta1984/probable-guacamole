import { Card } from "./card";
import { useState } from "react";
import { useEffect } from "react";

export function CardSlider2() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const cards = [
      <img
        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1731914707/jvxufnoysgcl6krun5dr.webp?_upload_ref=ic_img_tool"
        alt="allencard5"
      />,
      <img
        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1731914764/zlcrmzpxjw9vgpftodn7.png?_upload_ref=ic_img_tool"
        alt="allencard6"
      />,
      <img
        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1731918410/n9alnsdsg9vwlylkbzq7.webp?_upload_ref=ic_img_tool"
        alt="allencard7"
      />,
      <img
        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1731914792/g3oyr3gu38j0ollhjeno.png?_upload_ref=ic_img_tool"
        alt="allencard8"
      />,
      <img
      src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1731914815/egtumfugrnpf1isdotdj.webp?_upload_ref=ic_img_tool"
      alt="allencard9"
      />,
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 3000);
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [cards.length]);
  
    return (
    <div className="flex justify-center items-center w-3/5 ">
        <Card>{cards[currentIndex]}</Card>
    </div>
    );
}