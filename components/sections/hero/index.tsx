"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import AnimatedButton from "@/components/shared/animated-button"
import { fadeInLeft, fadeInRight, scaleIn } from "@/styles/animations"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const scrollToResults = () => {
    const element = document.getElementById("benefits")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="hero" className="section-padding overflow-hidden">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="flex flex-col justify-center space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none"
              >
                Plus de clients sans plus d&apos;efforts
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="max-w-[600px] text-muted-foreground text-lg md:text-xl"
              >
                Frega Digital vous aide à trouver de nouveaux clients pendant que vous vous concentrez sur votre métier.
                Notre solution tout-en-un s&apos;occupe de tout : publicité, site web et appels téléphoniques.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <AnimatedButton
                size="lg"
                className="gradient-bg hover:from-purple-700 hover:to-blue-600 w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Appelez-nous <Phone className="ml-2 h-4 w-4" />
              </AnimatedButton>
              <AnimatedButton size="lg" variant="outline" className="w-full sm:w-auto" onClick={scrollToResults}>
                Voir les Résultats
              </AnimatedButton>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <motion.img
              variants={scaleIn}
              alt="Entrepreneur recevant des appels de clients"
              className="w-full max-w-[500px] lg:max-w-none aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg"
              src="/placeholder.svg?height=550&width=750"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

