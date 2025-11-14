import React from 'react';


export default function Button({ children, onClick, showArrow = false, ...props }) {

  return (
    <button
      {...props}
      onClick={onClick}
      className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-lg font-semibold px-8 py-3 bg-gradient-to-r from-[#00b4ff] to-[#a56bff] text-white shadow-lg transform transition-all duration-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1"}
    >
      <span>{children}</span>
      {showArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      )}
    </button>
  );
}
