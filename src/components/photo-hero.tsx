'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function PhotoHero() {
  const r = useReducedMotion()
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background photo covers entire hero */}
      <Image
        src="/brand/hero-laptop.jpg"
        alt="Laptop glow in the dark symbolizing modern data work"
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-80"
      />
      {/* Overlay for legibility and beauty */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/80" />
      {/* Subtle grain for texture */}
      <div className="grain absolute inset-0 opacity-[0.10] mix-blend-overlay" aria-hidden />

      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={r ? undefined : { opacity: 0, y: 14 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl mb-4"
        >
          Strong & Reliable Data Solutions
        </motion.h1>
        <motion.p
          initial={r ? undefined : { opacity: 0, y: 10 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
          className="mt-2 max-w-2xl text-lg md:text-2xl text-white/90 mx-auto drop-shadow-lg"
        >
          We digitize, integrate, and analyze data so teams move faster and decide with confidence.
        </motion.p>
        <motion.div
          initial={r ? undefined : { opacity: 0, y: 8 }}
          animate={r ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild variant="gradient" shape="pill" className="shadow-lg text-lg px-8 py-3">
            <Link href="/contact">Start now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            shape="pill"
            className="border-white/80 text-white hover:bg-white/10 text-lg px-8 py-3"
          >
            <Link href="#what">Get in touch</Link>
          </Button>
        </motion.div>
      </div>

      {/* Subtle slanted divider */}
      <svg
        className="absolute -bottom-1 left-0 right-0"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M0 80L1440 0V80H0Z" fill="white" />
      </svg>
    </section>
  )
}
