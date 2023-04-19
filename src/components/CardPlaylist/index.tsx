import { PlayIcon } from 'lucide-react'
import Image from 'next/image'

export interface ICardPlaylistProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  width: number
  height: number
  src: string
  alt: string
  title: string
  styleClass: string
}

export const CardPlaylist = ({
  height,
  width,
  src,
  alt,
  title,
  styleClass,
  ...rest
}: ICardPlaylistProps) => {
  return (
    <a className={styleClass} {...rest}>
      <Image src={src} width={width} height={height} alt={alt} />
      <strong className="text-ellipsis overflow-hidden">{title}</strong>
      <button className="rounded-full bg-green-400 text-black ml-auto mr-8 flex items-center justify-center w-12 h-12 pl-0.5 invisible group-hover:visible [@media(max-width:440px)]:hidden">
        <PlayIcon fill="black" />
      </button>
    </a>
  )
}
