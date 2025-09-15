import { cn } from '@/lib/utils'
import * as React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bleed?: boolean
  tone?: 'dark' | 'light'
}

export function Section({ className, bleed = false, tone = 'dark', children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        bleed ? '' : 'py-16 md:py-24',
        tone === 'light' ? 'bg-white text-[#0D1B2A]' : '',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-slate-300">{subtitle}</p> : null}
    </div>
  )
}
