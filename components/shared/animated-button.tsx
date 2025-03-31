"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { buttonHover } from "@/styles/animations"

interface AnimatedButtonProps {
  children: ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

export default function AnimatedButton({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  type = "button",
}: AnimatedButtonProps) {
  return (
    <motion.div whileHover="hover" whileTap="tap" initial="rest" variants={buttonHover}>
      <Button variant={variant} size={size} className={className} onClick={onClick} type={type}>
        {children}
      </Button>
    </motion.div>
  )
}

