import React, { useState, useEffect } from "react";

const CardStyle = ({ children }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        overflow: "inherit",
        objectFit: "contain",
        display: "inline-block",
        width: "auto",
        height: "auto",
      }}
    >
      {children}
    </div>
  );
};

export function Card({ children }) {
  return <CardStyle>{children}</CardStyle>;
}

export function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    <img
      src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1731570554%2Folympiads_ukjyot.webp&w=640&q=75"
      alt="allencard1"
    />,
    <img
      src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fw_1600%2Cf_auto%2Cq_auto%2Fv1732015029%2Fbtkzqgbysvyva0rnpdsa.png%3F_upload_ref%3Dic_img_tool&w=640&q=75"
      alt="allencard2"
    />,
    <img
      src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fw_1600%2Cf_auto%2Cq_auto%2Fv1732015029%2Faoor9potdqdeknauqy8e.png%3F_upload_ref%3Dic_img_tool&w=640&q=75"
      alt="allencard3"
    />,
    <img
      src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1731570587%2Fcbse_fwissm.webp&w=640&q=75"
      alt="allencard4"
    />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [cards.length]);

  return (
    <div className="slider-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px", overflow: "hidden" }}>
      <Card>{cards[currentIndex]}</Card>
    </div>
  );
}
