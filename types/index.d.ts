import type { Icon } from "lucide-react"

import { Icons } from "@/components/icons"

export type NavItem = {
    title: string
    href: string
    disabled?: boolean | undefined;
    external?: boolean | undefined;
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type MainNavItem = NavItem

export type DashboardConfig = {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
  }