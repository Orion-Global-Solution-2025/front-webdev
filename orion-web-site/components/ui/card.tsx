import React from 'react';

export default function FeatureCard({ 
  Icon, 
  title, 
  children,
  ...props 
}) {
  
  return (
    <div
      {...props} 
      className={`rounded-lg border border-slate-200 bg-white p-6 shadow-sm flex flex-col dark:border-slate-800 dark:bg-slate-950 $`}
    >
      
      <div className="mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform`}>
          {Icon && (
            <Icon 
              className={`
                w-6 h-6 
                bg-gradient-to-r from-[#00b4ff] to-[#a56bff] 
                bg-clip-text text-transparent
              `} 
            />
          )}

        </div>
      </div>
      
      <h3 className={"text-xl font-semibold leading-none tracking-tight mb-2 text-slate-500 dark:text-slate-400"}>
        {title}
      </h3>
      
      <p className={"text-sm text-slate-500 dark:text-slate-400"}>
        {children}
      </p>
    </div>
  );
}