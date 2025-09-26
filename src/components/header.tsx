'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Menu, PhoneCall, Sparkles, X } from 'lucide-react'

import { Container } from './container'
import { Logo } from './logo'
import { mainNav } from '@/lib/links'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 16)
    }

    updateScrolled()
    window.addEventListener('scroll', updateScrolled)
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', mobileOpen)
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (!pathname) return false
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full border-b border-white/10 transition-[background-color,backdrop-filter,border-color] duration-200',
        scrolled ? 'bg-[rgba(5,6,10,0.9)] backdrop-blur-xl' : 'bg-[rgba(5,6,10,0.6)] backdrop-blur'
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 text-white" aria-label="Arctura Analytics home">
          <Logo usePng size={30} />
          <div className="flex flex-col leading-none">
            <span className="font-heading text-xs uppercase tracking-[0.55em]">Arctura</span>
            <span className="text-[0.65rem] uppercase tracking-[0.38em] text-white/60">Analytics</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'group relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white',
                isActive(item.href) &&
                  'text-white after:absolute after:inset-x-3 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-brand-400 after:to-orange-400'
              )}
            >
              <span
                className={clsx(
                  'hidden h-1.5 w-1.5 rounded-full bg-white/30 transition-transform duration-200 group-hover:scale-110 lg:block',
                  isActive(item.href) && 'bg-gradient-to-r from-brand-400 to-orange-400'
                )}
              />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-white/60 md:flex">
            <Sparkles className="h-3.5 w-3.5 text-orange-300" aria-hidden="true" />
            Civic Data Specialists
          </div>
          <Link
            href="/case-studies"
            className="hidden md:inline-flex items-center text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-400 via-brand-400 to-orange-500 px-5 py-2 text-sm font-semibold text-[#05060a] shadow-[0_18px_40px_rgba(255,123,61,0.35)] transition-transform hover:-translate-y-0.5"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Contact team
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/40 hover:text-white md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[rgba(7,8,12,0.96)] backdrop-blur md:hidden">
          <Container className="flex flex-col gap-6 py-6">
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'block rounded-lg px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white',
                    isActive(item.href) && 'bg-white/5 text-white'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <Link
                href="/case-studies"
                className="block rounded-lg border border-white/10 px-4 py-3 text-center text-base font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
              >
                View work
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg bg-gradient-to-r from-orange-400 via-brand-400 to-orange-500 px-4 py-3 text-center text-base font-semibold text-[#05060a] transition hover:brightness-110"
              >
                Contact team
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
