'use client'

import React from 'react';

interface CustomCursorProps {
  children: React.ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="custom-cursor relative"
    >
      {children}
      <div className={`${isHovering ? 'custom-cursor hover' : ''}`} />
    </div>
  );
};

export default CustomCursor;