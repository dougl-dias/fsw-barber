import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
}

export default function Section({ children, className }: SectionProps) {
  return <div className={cn('space-y-4 border-t px-5 py-6', className)}>{children}</div>
}
