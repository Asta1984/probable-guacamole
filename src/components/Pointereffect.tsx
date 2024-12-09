import React, { useEffect, useRef, useState } from "react";

const PointerEffect: React.FC = () => {
  const pointerRef = useRef<HTMLDivElement>(null);

  // Track mouse movement with state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (pointerRef.current) {
        pointerRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (pointerRef.current) {
        pointerRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPointerPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }));
    }, 25); // Update position every 25ms for a smoother effect

    return () => clearInterval(interval);
  }, [mousePos]);

  useEffect(() => {
    if (pointerRef.current) {
      pointerRef.current.style.transform = `translate(${pointerPos.x}px, ${pointerPos.y}px)`;
    }
  }, [pointerPos]);

  return <div ref={pointerRef} className="pointer-light"></div>;
};

export default PointerEffect;
