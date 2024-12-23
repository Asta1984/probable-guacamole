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
      }, 5000);
  
      return () => clearInterval(interval);
    }, [cards.length]);
  
    return (
      <div
      className="slider-container flex justify-center items-center w-3/5 "
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="slider-track"
        style={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
          width: `${cards.length * 100}%`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}