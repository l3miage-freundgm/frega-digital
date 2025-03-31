"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cardHover } from "@/styles/animations"

interface TestimonialCardProps {
  name: string
  role: string
  testimonial: string
  imageSrc?: string
}

export default function TestimonialCard({
  name,
  role,
  testimonial,
  imageSrc = "/placeholder.svg?height=50&width=50",
}: TestimonialCardProps) {
  return (
    <motion.div whileHover="hover" initial="rest">
      <motion.div variants={cardHover}>
        <Card className="border-0 shadow-lg h-full">
          <CardHeader>
            <div className="flex items-center gap-4">
              <motion.img
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                alt={`Photo de ${name}`}
                className="rounded-full object-cover h-12 w-12"
                src={imageSrc}
              />
              <div>
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{role}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">"{testimonial}"</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

