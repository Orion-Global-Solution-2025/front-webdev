import React from 'react';

const baseClasses = `
  inline-flex items-center justify-center rounded-full border 
  px-4 py-1.5 text-sm font-semibold transition-colors 
  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
  cursor-pointer 
`;

const activeClasses = `
  border-transparent bg-gradient-to-r from-[#00b4ff] to-[#8b5cf6] text-white shadow-sm hover:opacity-95
`;

const inactiveClasses = `
  border-gray-200 bg-white text-gray-700 
  hover:bg-gray-50
`;

export default function FlagTipo({ children, active = false, className = '', ...props }: { children?: React.ReactNode; active?: boolean; className?: string; [key: string]: any }) {

  return (
    <div
      {...props}
      className={`
        ${baseClasses}
        ${active ? activeClasses : inactiveClasses}
        ${className || ''}
        `}
    >
      {children}
    </div>
  );
}