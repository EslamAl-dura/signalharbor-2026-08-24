import { forwardRef, type SelectHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(({ className, ...props }, ref) => <select ref={ref} className={cn('h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 dark:border-white/10 dark:bg-slate-900', className)} {...props} />)
Select.displayName = 'Select'