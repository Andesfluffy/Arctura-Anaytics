'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'
import { Container } from './container'
import { Button } from './ui/button'
import { mainNav } from '@/lib/links'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const r = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', open)
  }, [open])

  const headerBase =
    'sticky top-0 z-50 border-b backdrop-blur shadow-soft-lg transition-[background-color,height] duration-200 ease-out'
  const headerTone = `border-white/10 ${scrolled ? 'bg-[var(--raisin-black)]' : 'bg-[color:rgba(37,38,52,0.92)]'}`
  const rowH = scrolled ? 'h-14' : 'h-16'

  return (
    <header className={`${headerBase} ${headerTone}`}>
      {/* Mobile top row */}
      <Container className={`flex ${rowH} items-center justify-between md:hidden`}>
        <motion.div
          initial={r ? undefined : { opacity: 0, y: -6 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Logo
            usePng
            size={40}
            textClassName={`text-white font-extrabold text-lg tracking-tight`}
          />
        </motion.div>
        <button
          className={`rounded-md p-2 border border-white/10 bg-white/5 text-white/90`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Desktop simple top bar */}
      <Container className={`hidden ${rowH} items-center justify-between md:flex`}>
        <motion.div
          initial={r ? undefined : { opacity: 0, y: -6 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Logo
            usePng
            size={40}
            textClassName={`text-white font-extrabold text-xl tracking-tight`}
          />
        </motion.div>
        <nav className="flex items-center justify-center gap-6" aria-label="Primary">
          {mainNav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative rounded-full px-4 py-2 text-lg font-extrabold tracking-tight transition-all ${active ? 'text-white underline decoration-2 decoration-fluorescent_cyan/60 underline-offset-8' : 'text-white/90 hover:text-white'} hover:translate-y-[1px]`}
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] w-[calc(100%-1.5rem)] origin-center scale-x-0 bg-gradient-to-r from-accent-teal via-accent-emerald to-accent-cyan transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            )
          })}
          <Button asChild variant="coral" shape="pill" className="ml-2 shadow-soft-lg">
            <Link href="/contact">Get a demo</Link>
          </Button>
        </nav>
      </Container>

      {/* 2px animated accent bar (uses accent vars for light/dark) */}
      <div className="accent-bar" aria-hidden />

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={r ? undefined : { x: '100%', opacity: 0 }}
            animate={r ? undefined : { x: 0, opacity: 1 }}
            exit={r ? undefined : { x: '100%', opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-[color:rgba(37,38,52,0.95)] p-6 shadow-soft-lg md:hidden"
          >
            <div className="mb-4 flex items-center justify-between">
              <Logo usePng size={36} textClassName={`text-white font-extrabold tracking-tight`} />
              <button
                aria-label="Close menu"
                className={`rounded-md p-2 border border-white/10 bg-white/5`}
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="grid gap-2" aria-label="Mobile">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 ${pathname === item.href ? 'bg-white/10 text-white' : 'text-white/90 hover:bg-white/5'}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="coral" shape="pill" className="mt-2">
                <Link href="/contact">Get a demo</Link>
              </Button>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}
