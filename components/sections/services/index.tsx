"use client"

import { BarChart3, Zap, Phone } from "lucide-react"
import { motion } from "framer-motion"
import AnimateWhenVisible from "@/components/shared/animate-when-visible"
import SectionTitle from "@/components/shared/section-title"
import ServiceCard from "@/components/shared/service-card"
import { staggerContainer } from "@/styles/animations"

export default function ServicesSection() {
  const services = [
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Publicité Ciblée",
      description: "Attire les clients qui ont besoin de vos services",
      features: [
        "Annonces sur Google quand on cherche vos services",
        "Publicités sur Facebook pour votre zone géographique",
        "Suivi des personnes intéressées",
      ],
      iconClass: "bg-purple-100 text-purple-600 dark:bg-purple-800/20 dark:text-purple-400",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Site Web Efficace",
      description: "Transforme les visiteurs en clients",
      features: [
        "Site professionnel adapté à votre métier",
        "Assistant virtuel pour répondre aux questions 24h/24",
        "Formulaires simples pour demander des devis",
      ],
      iconClass: "bg-blue-100 text-blue-600 dark:bg-blue-800/20 dark:text-blue-400",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Appels Automatiques",
      description: "Qualifie les clients avant de vous les envoyer",
      features: [
        "Appels aux personnes intéressées par vos services",
        "Questions pour vérifier si le projet est sérieux",
        "Prise de rendez-vous directement dans votre agenda",
      ],
      iconClass: "bg-green-100 text-green-600 dark:bg-green-800/20 dark:text-green-400",
    },
  ]

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <AnimateWhenVisible>
          <SectionTitle
            badge="Notre Solution"
            title="Votre Assistant Commercial Complet"
            description="Comme avoir une équipe marketing et commerciale complète, mais sans les salaires à payer"
          />
        </AnimateWhenVisible>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              iconClassName={service.iconClass}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

