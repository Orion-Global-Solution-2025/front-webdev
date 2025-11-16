import React from 'react';

export default function Separator({ 
  orientation = "horizontal", 
  className, 
  ...props 
}) {
  
  return (
    <div
      {...props}
      className={`
        shrink-0 bg-border
        ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"}
      `}
      role="separator"
    />
  );
}