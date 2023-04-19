import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface CardPlaylistMadeForProps extends HTMLAttributes<HTMLAnchorElement> {
  src: string
  alt: string
  title: string
  description: string
}

export const CardPlaylistMadeFor = ({
  src,
  alt,
  title,
  description,
  ...rest
}: CardPlaylistMadeForProps) => {
  return (
    <a
      href="/"
      className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
      {...rest}
    >
      <Image width={120} height={120} className="w-full" src={src} alt={alt} />
      <strong className="font-semibold">{title}</strong>
      <span className="text-sm text-zinc-400">{description}</span>
    </a>
  )
}
