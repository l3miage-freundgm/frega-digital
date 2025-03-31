"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimateWhenVisible from "@/components/shared/animate-when-visible"

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
  example: {
    role: string
    quote: string
  }
  iconClassName?: string
}

export default function BenefitCard({
  icon,
  title,
  description,
  example,
  iconClassName = "bg-purple-100 text-purple-600 dark:bg-purple-800/20 dark:text-purple-400",
}: BenefitCardProps) {
  return (
    <AnimateWhenVisible>
      <Card className="border-0 shadow-lg h-full">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className={`rounded-full p-2 w-10 h-10 flex items-center justify-center ${iconClassName}`}>{icon}</div>
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-sm">{example.role} :</p>
            <p className="text-sm text-muted-foreground">"{example.quote}"</p>
          </div>
        </CardContent>
      </Card>
    </AnimateWhenVisible>
  )
}

