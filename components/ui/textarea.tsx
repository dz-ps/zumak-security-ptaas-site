import * as React from "react"
import { clsx } from "clsx"
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({className, ...props}, ref) => (
  <textarea ref={ref} className={clsx("w-full rounded-2xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60", className)} {...props}/>
))
Textarea.displayName = "Textarea"
