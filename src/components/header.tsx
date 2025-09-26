'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Container } from './container'
import { Logo } from './logo'
import { motion, AnimatePresence } from 'framer-motion'
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/[0.02]' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Logo usePng size={32} />
            <div className="flex items-baseline gap-1">
              <span className="text-white font-medium">ARCTURA</span>
              <span className="text-white/80 text-sm">ANALYTICS</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            <div className="flex items-center gap-8">
              <Link
                href="/platform"
                className="text-[13px] font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wide"
              >
                Solutions
              </Link>
              <Link
                href="/services"
                className="text-[13px] font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wide"
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="text-[13px] font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wide"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="text-[13px] font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wide"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[13px] font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wide"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="md:hidden fixed inset-0 top-20 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <Container className="py-12">
              <nav className="flex flex-col">
                <Link href="/platform" className="py-4 text-lg text-white/80 hover:text-white">Solutions</Link>
                <Link href="/services" className="py-4 text-lg text-white/80 hover:text-white">Services</Link>
                <Link href="/case-studies" className="py-4 text-lg text-white/80 hover:text-white">Case Studies</Link>
                <Link href="/about" className="py-4 text-lg text-white/80 hover:text-white">About</Link>
                <Link href="/contact" className="py-4 text-lg text-white/80 hover:text-white">Contact</Link>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )

        <motion.button
          className="md:hidden relative rounded-lg border border-white/10 bg-white/5 p-2.5 hover:bg-white/10 transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={open ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="h-0.5 w-4 bg-white absolute"
          />
          <motion.div
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-0.5 w-4 bg-white"
          />
          <motion.div
            animate={open ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="h-0.5 w-4 bg-white absolute"
          />
        </motion.button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="md:hidden fixed inset-0 top-20 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <Container className="py-12">
              <nav className="flex flex-col">
                {mainNav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-4 text-lg font-medium text-white/80 hover:text-white transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (mainNav.length * 0.1) + 0.2 }}
                >
                  <Link 
                    href="/contact"
                    className="mt-8 block rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-center font-medium text-white hover:bg-white/10 transition-all"
                    onClick={() => setOpen(false)}
                  >
                    Let's Talk
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
