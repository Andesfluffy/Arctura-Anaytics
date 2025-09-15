import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const chipVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border'
      },
      color: {
        slate: '',
        accent: '',
        success: '',
        warning: ''
      }
    },
    compoundVariants: [
      { variant: 'solid', color: 'slate', className: 'bg-white/10 text-white' },
      { variant: 'solid', color: 'accent', className: 'text-black gradient' },
      { variant: 'solid', color: 'success', className: 'bg-emerald-400/20 text-emerald-200' },
      { variant: 'solid', color: 'warning', className: 'bg-amber-400/20 text-amber-200' },
      { variant: 'outline', color: 'slate', className: 'border-white/20 text-white' },
      { variant: 'outline', color: 'accent', className: 'border-arctura/50 text-arctura' },
      { variant: 'outline', color: 'success', className: 'border-emerald-300/30 text-emerald-200' },
      { variant: 'outline', color: 'warning', className: 'border-amber-300/30 text-amber-200' }
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'slate'
    }
  }
)

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {}

export function Chip({ className, variant, color, ...props }: ChipProps) {
  return <div className={cn(chipVariants({ variant, color }), className)} {...props} />
}

export { chipVariants }
