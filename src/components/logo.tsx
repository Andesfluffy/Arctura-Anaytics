import Image from 'next/image'
import Link from 'next/link'

type LogoVariant = 'dark' | 'light'

type Props = {
  size?: number
  priority?: boolean
  variant?: LogoVariant
  usePng?: boolean
  showText?: boolean
  textClassName?: string
  className?: string
  withLink?: boolean
  href?: string
  ariaLabel?: string
}

export function Logo({
  size = 32,
  priority = true,
  variant = 'dark',
  usePng = false,
  showText = true,
  textClassName,
  className,
  withLink = true,
  href = '/',
  ariaLabel = 'Arctura Analytics home',
}: Props) {
  const src = '/brand/Arctura_Logo.png'
  const containerClass = ['flex items-center gap-3', className].filter(Boolean).join(' ')
  const content = (
    <>
      <div className="relative">
        <Image 
          src={src} 
          alt="Arctura Analytics" 
          width={size} 
          height={size} 
          priority={priority}
          className="drop-shadow-[0_0_12px_rgba(255,111,60,0.4)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b39]/10 to-[#ffb347]/10 mix-blend-overlay rounded-full" />
      </div>
      {showText ? (
        <span className={textClassName ?? 'text-base font-bold tracking-wider'}>
          <span className="bg-gradient-to-r from-[#ff7b39] via-[#ff8a47] to-[#ffb347] bg-clip-text text-transparent">Arctura</span>
          <span className="text-white/80"> Analytics</span>
        </span>
      ) : null}
    </>
  )

  if (withLink) {
    return (
      <Link href={href} className={containerClass} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <span className={containerClass}>
      {content}
    </span>
  )
}
