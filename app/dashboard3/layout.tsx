import { Metadata } from "next"

import { Sidebar } from "@/components/sidebar";
import { playlists } from "../data/playlist";
import { Menu } from "@/components/menu";

export const metadata: Metadata = {
    title: "Dashboard 3",
    description: "Example of Dashboard 3",
  }

  interface RootLayoutProps {
    children: React.ReactNode
  }

export default function MusicPage({children}: RootLayoutProps) {
  return (
    <div className="hidden md:block">
        <Menu />
      <div className="border-t">
        <div className="grid lg:grid-cols-5">
            <Sidebar playlists={playlists} className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                    {children}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
