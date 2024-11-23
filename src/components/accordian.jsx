import * as React from "react"
import { ChevronDown } from "lucide-react"

const AccordionContext = React.createContext({
  activeItems: [],
  toggleItem: () => {},
  type: 'single'
})

const Accordion = ({ 
  children, 
  type = 'single', 
  defaultValue = [], 
  className = '',
  ...props 
}) => {
  const [activeItems, setActiveItems] = React.useState(
    Array.isArray(defaultValue) ? defaultValue : [defaultValue]
  )

  const toggleItem = (itemId) => {
    if (type === 'single') {
      setActiveItems(activeItems.includes(itemId) ? [] : [itemId])
    } else {
      setActiveItems(
        activeItems.includes(itemId)
          ? activeItems.filter(i => i !== itemId)
          : [...activeItems, itemId]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ activeItems, toggleItem, type }}>
      <div className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = React.forwardRef(({ 
  children, 
  value, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`border-b ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ 
  children, 
  className = '', 
  value,
  ...props 
}, ref) => {
  const { activeItems, toggleItem } = React.useContext(AccordionContext)
  const isOpen = activeItems.includes(value)

  return (
    <div className="flex">
      <button
        ref={ref}
        type="button"
        onClick={() => toggleItem(value)}
        className={`flex flex-1 items-center justify-between py-4 font-medium 
          transition-all  ${className}`}
        {...props}
      >
        {children}
        <ChevronDown 
          className={`h-4 w-4 shrink-0 transition-transform duration-200
            ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
    </div>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ 
  children, 
  className = '', 
  value,
  ...props 
}, ref) => {
  const { activeItems } = React.useContext(AccordionContext)
  const isOpen = activeItems.includes(value)
  const [height, setHeight] = React.useState(0)
  const contentRef = React.useRef(null)

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [children])

  return (
    <div
      ref={ref}
      style={{
        height: isOpen ? `${height}px` : '0',
        overflow: 'hidden',
        transition: 'height 200ms ease-out'
      }}
      className={`text-sm ${className}`}
      {...props}
    >
      <div ref={contentRef} className="pb-4 pt-0">
        {children}
      </div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }