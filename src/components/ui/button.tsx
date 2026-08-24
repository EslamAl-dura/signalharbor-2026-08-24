import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva('inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint disabled:pointer-events-none disabled:opacity-50', {
  variants: {
    variant: { default: 'bg-mint text-ink hover:bg-mint/90', outline: 'border border-slate-200 bg-white/70 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10', ghost: 'hover:bg-slate-100 dark:hover:bg-white/10', danger: 'bg-rose-500 text-white hover:bg-rose-600' },
    size: { default: 'h-10 px-4', sm: 'h-8 px-3 text-xs', lg: 'h-12 px-6' }
  },
  defaultVariants: { variant: 'default', size: 'default' }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />)
Button.displayName = 'Button'