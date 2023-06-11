import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
    title: "Dashboard",
  }


  export default function DashboardPage() {

    return (
        <DashboardShell>
             
        </DashboardShell>
    )
  }