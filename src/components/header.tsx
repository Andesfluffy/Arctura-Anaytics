'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Menu, PhoneCall, X } from 'lucide-react'

import { Container } from './container'
import { Logo } from './logo'
import { mainNav } from '@/lib/links'

export function Header() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMounted])

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', isMobileOpen)
  }, [isMobileOpen])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (!pathname) return false
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-200 ease-out',
        isScrolled
          ? 'border-[color:var(--border)] bg-[color:rgba(10,5,7,0.9)] shadow-[0_8px_24px_rgba(6,3,5,0.55)] backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-3 text-[color:var(--ink)]"
          aria-label="Arctura Analytics home"
        >
          <Logo size={36} withLink={false} showText={true} textClassName="text-lg font-bold tracking-wider" />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)]/80 p-1 text-sm text-muted md:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'relative inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors duration-150 hover:text-[color:var(--ink)]',
                isActive(item.href) && 'text-[color:var(--ink)]'
              )}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              <span
                aria-hidden="true"
                className={clsx(
                  'absolute inset-y-1 left-1 right-1 rounded-full bg-[linear-gradient(120deg,var(--accent-start),var(--accent-mid),var(--accent-end))] opacity-0 transition-opacity duration-150',
                  isActive(item.href) && 'opacity-100'
                )}
              />
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--accent-start),var(--accent-mid),var(--accent-end))] px-4 py-2 text-sm font-semibold text-[#1a0505] shadow-[0_18px_48px_rgba(255,100,60,0.32)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(255,100,60,0.4)]"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Talk to us
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--fg)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--ink)] md:hidden"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="border-t border-[color:var(--border)] bg-[color:rgba(6,3,5,0.98)] backdrop-blur md:hidden">
          <Container className="flex flex-col gap-6 py-6">
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'block rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-[color:var(--surface-muted)] hover:text-[color:var(--ink)]',
                    isActive(item.href) && 'bg-[color:var(--surface-muted)] text-[color:var(--ink)]'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <Link
                href="/contact"
                className="block rounded-xl bg-[linear-gradient(120deg,var(--accent-start),var(--accent-mid),var(--accent-end))] px-4 py-3 text-center text-base font-semibold text-[#1a0505] transition hover:brightness-110"
              >
                Talk to us
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
