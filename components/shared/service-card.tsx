"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { cardHover, iconHover } from "@/styles/animations"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  iconClassName?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  iconClassName = "bg-purple-100 text-purple-600 dark:bg-purple-800/20 dark:text-purple-400",
}: ServiceCardProps) {
  return (
    <motion.div whileHover="hover" initial="rest">
      <motion.div variants={cardHover}>
        <Card className="border-0 shadow-lg h-full">
          <CardHeader className="pb-2">
            <motion.div
              variants={iconHover}
              className={`mb-2 rounded-full p-2 w-10 h-10 flex items-center justify-center ${iconClassName}`}
            >
              {icon}
            </motion.div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

