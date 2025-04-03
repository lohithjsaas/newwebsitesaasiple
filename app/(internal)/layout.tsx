import type { ReactNode } from "react"

interface InternalLayoutProps {
  children: ReactNode
}

export default function InternalLayout({ children }: InternalLayoutProps) {
  return <div className="pt-48">{children}</div>
}

