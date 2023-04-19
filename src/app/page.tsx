import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
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

import {
  Button,
  CardPlaylist,
  IconsMinMaxClose,
  Navigation,
  Title,
  CardPlaylistMadeFor,
  Footer,
} from '@/components'

import { navigationData, playListsSideBar, playlistCards } from '@/data'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6 [@media(max-width:660px)]:hidden">
          <div className="flex items-center gap-2">
            <IconsMinMaxClose />
          </div>
          <nav className="space-y-5 mt-10">
            {navigationData.map((item) => (
              <Navigation key={item.title} withIcon {...item} />
            ))}
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            {playListsSideBar.map((item) => (
              <Navigation key={item.title} {...item} />
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <Button icon={<ChevronLeftIcon />} />
            <Button icon={<ChevronRightIcon />} />
            <Button />
          </div>
          <Title
            styleClass="font-semibold text-3xl mt-10"
            title="Good Afternoon"
            h1Title
          />

          <div className="grid grid-cols-3 gap-4 mt-4 [@media(max-width:1024px)]:grid-cols-1">
            {playlistCards.map((item) => (
              <CardPlaylist
                styleClass="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group"
                key={item.src}
                width={104}
                height={104}
                {...item}
              />
            ))}
          </div>

          <Title
            styleClass="font-semibold text-2xl mt-10"
            title="Made for Alan Fereira"
          />
          <div className="grid gap-4 mt-4 -1sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
            {playlistCards.map((item) => (
              <CardPlaylistMadeFor key={item.src} {...item} />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
