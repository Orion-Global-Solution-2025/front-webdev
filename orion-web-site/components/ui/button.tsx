import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  showArrow?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#00b4ff] to-[#a56bff] text-white border-0 shadow-lg",
  outline:
    "bg-transparent text-primary border border-primary bg-white", // vai ser sobrescrito pelo className que vc passar
  ghost: "bg-transparent text-white border-transparent",
};

export default function Button({
  children,
  onClick,
  showArrow = false,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold " +
    "transition-all duration-300 ring-offset-background focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-60 " +
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 " +
    "[&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1";

  const finalClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  return (
    <button
      {...props}
      onClick={onClick}
      className={finalClasses}
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
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </button>
  );
}
