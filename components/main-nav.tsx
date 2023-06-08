"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "types"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { DashboardHeader } from "./header"

interface MainNavProps {
  items?: NavItem[]
  children?: React.ReactNode
}

export function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.menu className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <nav className="flex gap-6 ml-20">
        <DashboardHeader
          heading="Good Morning, John"
          text="Performance Summary and Wifi Manager"
        ></DashboardHeader>
      </nav>
    </div>
  )
}
