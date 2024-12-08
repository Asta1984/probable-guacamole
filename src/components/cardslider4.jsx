import { useState } from "react";
import { useEffect } from "react";

export function CardSlider4() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const cards = [
      <img
        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1731330769/vtga4hno9tvp668jm34i.svg?_upload_ref=ic_img_tool"
        alt="allencard11"
      />,
      <img
        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1731330769/vtga4hno9tvp668jm34i.svg?_upload_ref=ic_img_tool"
        alt="allencard12"
      />,
      <img
        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1731330851/jncudghayyflxuxoodkg.svg?_upload_ref=ic_img_tool"
        alt="allencard13"
      />
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, [cards.length]);
  
    return (
      <div
      className="slider-container rounded-xl justify-self-center -mt-10 w-8/12 md:w-full"
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