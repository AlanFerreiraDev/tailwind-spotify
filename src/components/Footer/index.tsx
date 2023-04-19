import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  PlayIcon,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from 'lucide-react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between [@media(max-width:1052px)]:flex-col">
      <div className="flex items-center gap-3">
        <Image width={56} height={56} src="/queen-II.jpg" alt="Album Queen" />
        <div className="flex flex-col">
          <strong
            className="font-normal
            "
          >
            Bohemian Rapsody
          </strong>
          <span className="text-xs text-zinc-400">Queen</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-6">
          <Shuffle
            size={20}
            className="text-zinc-200 cursor-pointer hover:text-white"
          />
          <SkipBack
            size={20}
            className="text-zinc-200 cursor-pointer hover:text-white"
          />
          <button className="rounded-full bg-white text-black flex items-center justify-center w-10 h-10 pl-1 hover:bg-white/80">
            <PlayIcon fill="black" />
          </button>
          <SkipForward
            size={20}
            className="text-zinc-200 cursor-pointer hover:text-white"
          />
          <Repeat
            size={20}
            className="text-zinc-200 cursor-pointer hover:text-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full" />
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full" />
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}
