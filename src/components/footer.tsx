import Link from 'next/link'
import { Container } from './container'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <Logo size={24} showText={false} variant="light" withLink={false} />
          <span className="text-sm bg-gradient-to-r from-[#ff7b39] via-[#ff8a47] to-[#ffb347] bg-clip-text text-transparent font-medium">
            Arctura Analytics Limited
          </span>
        </Link>
        <nav className="text-sm text-slate-400">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <p className="text-xs text-slate-500">
          {'\u00A9'} {new Date().getFullYear()} Arctura Analytics Limited
        </p>
      </Container>
    </footer>
  )
}
