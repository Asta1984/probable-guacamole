import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Sheet = ({ isOpen, onClose, children, position = 'right' }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const sheetRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  if (!isOpen && !isAnimating) {
    return null;
  }

  const sheetClasses = `
    fixed top-0 ${position === 'left' ? 'left-0' : 'right-0'} z-50
    w-64 h-full bg-gray-800 shadow-lg
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : position === 'left' ? '-translate-x-full' : 'translate-x-full'}
  `;

  const overlayClasses = `
    fixed inset-0 z-40 bg-black bg-opacity-50
    transition-opacity duration-300 ease-in-out
    ${isOpen ? 'opacity-100' : 'opacity-0'}
  `;

  return createPortal(
    <>
      <div className={overlayClasses} onClick={onClose} />
      <div
        ref={sheetRef}
        className={sheetClasses}
        onTransitionEnd={handleAnimationEnd}
        aria-hidden={!isOpen}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-cyan-400 focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6">{children}</div>
      </div>
    </>,
    document.body
  );
};

export default Sheet;

