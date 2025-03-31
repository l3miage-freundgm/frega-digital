"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="w-full border-t py-6 md:py-0"
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2023 Frega Digital. Tous droits réservés.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-muted-foreground">
          <motion.div whileHover={{ y: -2 }}>
            <Link href="#" className="text-sm underline-offset-4 hover:underline">
              Mentions Légales
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }}>
            <Link href="#" className="text-sm underline-offset-4 hover:underline">
              Politique de Confidentialité
            </Link>
          </motion.div>
          <motion.button
            whileHover={{ y: -2 }}
            onClick={scrollToTop}
            className="text-sm underline-offset-4 hover:underline cursor-pointer"
          >
            Retour en haut
          </motion.button>
        </div>
      </div>
    </motion.footer>
  )
}

