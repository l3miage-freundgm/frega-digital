"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { fadeIn } from "@/styles/animations"

interface AnimateWhenVisibleProps {
  children: ReactNode
  variants?: any
  className?: string
}

export default function AnimateWhenVisible({ children, variants = fadeIn, className = "" }: AnimateWhenVisibleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

