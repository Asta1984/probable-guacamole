import * as React from "react"
import { useState, useEffect } from "react"

// Utility function for merging classNames
const mergeClassNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

// Basic Card Style Component (for CardSlider)
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
  )
}

// Enhanced Card Components
const Card = React.forwardRef(({ variant = 'default', className, style, ...props }, ref) => {
  if (variant === 'slider') {
    return <CardStyle {...props} />
  }
  
  return (
    <div
      ref={ref}
      className={mergeClassNames(
        "dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm",
        className
      )}
      style={{
        ...style,
      }}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeClassNames("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={mergeClassNames(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={mergeClassNames(
      "text-sm text-gray-500 dark:text-gray-400",
      className
    )}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeClassNames("p-6 pt-0", className)}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeClassNames(
      "flex items-center p-6 pt-0",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    <img
      key="card1"
      src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1733223161/mqhy3go6yar1qvslzse7.webp?_upload_ref=ic_img_tool"
      alt="allencard1"
    />,
    <img
      key="card2"
      src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1733223161/tsptwedgtx3vqsyo7xb0.webp?_upload_ref=ic_img_tool"
      alt="allencard2"
    />,
    <img
      key="card3"
      src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_auto,q_auto/v1733406973/atuips0rlsthj8xm1pus.webp?_upload_ref=ic_img_tool"
      alt="allencard3"
    />,
    <img
      key="card4"
      src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1733223161/rq014eg6s7lpjbwtkf6z.webp?_upload_ref=ic_img_tool"
      alt="allencard4"
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
      className="slider-container"
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

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardSlider
}