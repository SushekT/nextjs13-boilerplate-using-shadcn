import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "UI Elements",
      icon: "post",
    },
    {
      title: "Premium Users",
      href: "/dashboard/billing",
      icon: "user",
    },
    {
      title: "Transaction",
      href: "/dashboard/settings",
      icon: "settings",
    },
    {
      title: "Monitor",
      href: "/dashboard/settings",
      icon: "settings",
    },
    {
      title: "Topology",
      href: "/dashboard/settings",
      icon: "settings",
    },
    {
      title: "Access Page",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
