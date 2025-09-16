'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe, Clock, Mail, Menu, X } from 'lucide-react'
import { Container } from './container'
import { Logo } from './logo'
import { Button } from './ui/button'
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
      className={`sticky top-0 z-50 border-b border-white/10 ${scrolled ? 'bg-oxford_blue/95' : 'bg-oxford_blue/90'} backdrop-blur supports-[backdrop-filter]:bg-oxford_blue/85`}
    >
      {/* Utility bar */}
      <div className="hidden border-b border-white/10 bg-black/40 text-xs text-slate-300 md:block">
        <Container className="flex h-8 items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Globe className="h-3.5 w-3.5" /> Remote‑first
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" /> Mon–Fri 9–5
            </span>
            <a
              className="flex items-center gap-2 hover:text-white"
              href="mailto:hello@arctura-analytics.com"
            >
              <Mail className="h-3.5 w-3.5" /> hello@arctura-analytics.com
            </a>
          </div>
          <div className="opacity-80">Arctura Analytics</div>
        </Container>
      </div>

      <Container className="flex h-20 items-center justify-between">
        <Logo usePng size={48} />
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-lg font-extrabold tracking-tight transition-colors ${
                  active
                    ? 'bg-white/10 text-white underline decoration-2 decoration-fluorescent_cyan/60 underline-offset-8'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Button asChild variant="gradient" shape="pill" className="ml-3 shimmer">
            <Link href="/contact">Start now</Link>
          </Button>
        </nav>
        <button
          className="md:hidden rounded-md border border-white/10 bg-white/5 p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden">
          <Container className="pb-6">
            <div className="grid gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-slate-100 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button asChild variant="gradient" shape="pill">
                  <Link href="/contact">Start now</Link>
                </Button>
                <Button asChild variant="outline" shape="pill">
                  <Link href="/about">About</Link>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
