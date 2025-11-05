import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbProps {
  children: React.ReactNode
  className?: string
}

interface BreadcrumbItemProps {
  href?: string
  children: React.ReactNode
  active?: boolean
  className?: string
}

export function Breadcrumb({ children, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center space-x-2">{children}</ol>
    </nav>
  )
}

export function BreadcrumbItem({ href, children, active, className }: BreadcrumbItemProps) {
  return (
    <li className={cn("flex items-center", className)}>
      {href && !active ? (
        <Link 
          href={href} 
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          {children}
        </Link>
      ) : (
        <span className={cn(active ? "text-gray-900 font-medium" : "text-gray-500")}>
          {children}
        </span>
      )}
      {!active && (
        <ChevronRight className="h-4 w-4 text-gray-400 ml-2" />
      )}
    </li>
  )
}