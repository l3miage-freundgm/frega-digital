"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import AnimatedButton from "@/components/shared/animated-button"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Fermer le menu mobile lors du changement de taille d'écran
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false)
    }
  }, [isMobile, isOpen])

  // Gérer le défilement fluide vers les sections
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Hauteur du header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { href: "services", label: "Services" },
    { href: "how-it-works", label: "Comment ça marche" },
    { href: "benefits", label: "Avantages" },
    { href: "testimonials", label: "Témoignages" },
    { href: "proof", label: "Preuve" },
    { href: "contact", label: "Contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold gradient-text"
            >
              Frega Digital
            </motion.span>
          </Link>
        </div>

        {/* Navigation desktop */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden md:flex items-center space-x-6 text-sm font-medium"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <AnimatedButton onClick={() => scrollToSection("contact")}>Nous Contacter</AnimatedButton>
        </motion.nav>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="py-2 text-foreground/80 hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <AnimatedButton onClick={() => scrollToSection("contact")} className="w-full mt-2">
                Nous Contacter
              </AnimatedButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

