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
  const svgSrc = variant === 'light' ? '/brand/logo-light.svg' : '/brand/logo-dark.svg'
  const src = usePng ? '/brand/Arctura_Logo.png' : svgSrc
  const containerClass = ['flex items-center gap-2', className].filter(Boolean).join(' ')
  const content = (
    <>
      <Image src={src} alt="Arctura Analytics" width={size} height={size} priority={priority} />
      {showText ? (
        <span className={textClassName ?? 'text-base font-semibold tracking-wide'}>Arctura Analytics</span>
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
