import type { ReactNode, ButtonHTMLAttributes } from "react";

type NavLinkProps = {
  className?: string;
  activeClassName?: string;
  to: string;
  children: ReactNode;
  paginaAtual: string;
  onNavigate: (to: string) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function NavLink({
  className,
  activeClassName,
  to,
  children,
  paginaAtual,
  onNavigate,
  ...props
}: NavLinkProps) {
  const isActive = paginaAtual === to;

  const combinedClasses = [
    className || "",
    isActive ? activeClassName : "",
  ]
    .filter(Boolean)
    .join(" ");

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
