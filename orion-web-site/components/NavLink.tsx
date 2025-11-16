import React from 'react';

export default function NavLink({ 
  className,        
  activeClassName,  
  to,               
  children,
  paginaAtual,      
  onNavigate,      
  ...props 
}) {
  

  const isActive = paginaAtual === to;

 
  const combinedClasses = [
    className || '',
    isActive ? activeClassName : ''
  ]
  .filter(Boolean) 
  .join(' ');


  return (
    <button
      {...props} 
      className={combinedClasses}

      onClick={() => onNavigate(to)}
    >
      {children}
    </button>
  );
}