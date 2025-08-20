import * as React from "react"
import { clsx } from "clsx"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant="primary", size="md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/60"
    const variants = {
      primary: "bg-sky-600 hover:bg-sky-500 text-white",
      ghost: "bg-transparent hover:bg-white/5 text-white",
      outline: "border border-white/10 hover:bg-white/5 text-white"
    }
    const sizes = { sm: "text-sm py-1 px-3", md: "text-sm", lg: "text-base px-5 py-3" }
    return <button ref={ref} className={clsx(base, variants[variant], sizes[size], className)} {...props} />
  }
)
Button.displayName = "Button"
