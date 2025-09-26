'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

import { Container } from './container'
import { Logo } from './logo'
import { mainNav } from '@/lib/links'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', open)
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (!pathname) return false
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      )}
    >
      <Container className="flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Arctura Analytics home">
            <Logo usePng size={32} />
            <div className="flex items-baseline gap-1">
              <span className="text-white font-semibold tracking-wide">ARCTURA</span>
              <span className="text-white/70 text-xs uppercase">Analytics</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-sm font-medium uppercase tracking-wide transition-colors',
                  isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/case-studies"
            className="hidden lg:inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white hover:border-white/30"
          >
            View Proof
          </Link>
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4d4d] to-[#ff6b00] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,77,77,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Let’s Talk
          </Link>

          <motion.button
            className="lg:hidden relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute h-0.5 w-5 bg-white"
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-0.5 w-5 bg-white"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute h-0.5 w-5 bg-white"
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-20 z-40 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <Container className="px-6 py-8">
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {mainNav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: mainNav.length * 0.05 }}>
                  <Link
                    href="/contact"
                    className="mt-4 block rounded-lg bg-gradient-to-r from-[#ff4d4d] to-[#ff6b00] px-4 py-3 text-center text-base font-semibold text-white shadow-[0_10px_30px_rgba(255,77,77,0.35)]"
                  >
                    Let’s Talk
                  </Link>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
