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

// Card Slider Component
function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const cards = [
    <img
      key="card1"
      src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1731570554%2Folympiads_ukjyot.webp&w=640&q=75"
      alt="allencard1"
    />,
    <img
      key="card2"
      src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fw_1600%2Cf_auto%2Cq_auto%2Fv1732015029%2Fbtkzqgbysvyva0rnpdsa.png%3F_upload_ref%3Dic_img_tool&w=640&q=75"
      alt="allencard2"
    />,
    <img
      key="card3"
      src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fw_1600%2Cf_auto%2Cq_auto%2Fv1732015029%2Faoor9potdqdeknauqy8e.png%3F_upload_ref%3Dic_img_tool&w=640&q=75"
      alt="allencard3"
    />,
    <img
      key="card4"
      src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1731570587%2Fcbse_fwissm.webp&w=640&q=75"
      alt="allencard4"
    />,
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  return (
    <div 
      className="slider-container" 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "300px", 
        overflow: "hidden" 
      }}
    >
      <Card variant="slider">{cards[currentIndex]}</Card>
    </div>
  )
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