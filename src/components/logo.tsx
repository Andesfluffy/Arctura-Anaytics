import Image from 'next/image'
import Link from 'next/link'

type Props = {
  size?: number
  priority?: boolean
  variant?: 'dark' | 'light'
  usePng?: boolean
  showText?: boolean
  textClassName?: string
}

export function Logo({ size = 32, priority = true, variant = 'dark', usePng = false, showText = true, textClassName }: Props) {
  const svgSrc = variant === 'light' ? '/brand/logo-light.svg' : '/brand/logo-dark.svg'
  const src = usePng ? '/brand/Arctura_Logo.png' : svgSrc
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Arctura Analytics home">
      <Image src={src} alt="Arctura Analytics" width={size} height={size} priority={priority} />
      {showText ? (
        <span className={textClassName ?? 'text-base font-semibold tracking-wide'}>Arctura Analytics</span>
      ) : null}
    </Link>
  )
}
