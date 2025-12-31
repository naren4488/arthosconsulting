import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  icon: LucideIcon
  number: string
  label: string
  className?: string
}

export default function StatCard({ icon: Icon, number, label, className }: StatCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-lg",
      className
    )}>
      <div className="flex flex-col items-start gap-3">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
        <div>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
            {number}
          </div>
          <div className="text-sm md:text-base text-gray-600">
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

