import Link from 'next/link'
import { Container } from './container'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-2 opacity-90 hover:opacity-100">
          <Image src="/brand/logo-dark.svg" alt="Arctura" width={24} height={24} />
          <span className="text-sm">Arctura Analytics Limited</span>
        </Link>
        <nav className="text-sm text-slate-400">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/solutions">Solutions</Link>
            </li>
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
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Arctura Analytics Limited</p>
      </Container>
    </footer>
  )
}
