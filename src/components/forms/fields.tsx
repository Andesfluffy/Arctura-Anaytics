"use client"
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 outline-none placeholder:text-slate-400 focus:border-white/30',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 outline-none placeholder:text-slate-400 focus:border-white/30',
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'
