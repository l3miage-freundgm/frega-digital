"use client"

import { motion } from "framer-motion"
import { Clock, PiggyBank, Users, Calendar, CheckCircle, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimateWhenVisible from "@/components/shared/animate-when-visible"
import SectionTitle from "@/components/shared/section-title"
import BenefitCard from "@/components/shared/benefit-card"
import AnimatedButton from "@/components/shared/animated-button"
import { staggerContainer, fadeIn } from "@/styles/animations"

export default function BenefitsSection() {
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

  const benefits = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Gagnez du temps",
      description:
        "Fini les heures passées à chercher des clients ou à répondre à des appels qui ne mènent nulle part.",
      example: {
        role: "Pour un artisan couvreur",
        quote:
          "Avant, je passais 10h par semaine à essayer de trouver des clients. Maintenant, je peux faire 2 chantiers de plus par mois.",
      },
      iconClass: "bg-purple-100 text-purple-600 dark:bg-purple-800/20 dark:text-purple-400",
    },
    {
      icon: <PiggyBank className="h-5 w-5" />,
      title: "Augmentez vos revenus",
      description:
        "Plus de clients qualifiés signifie plus de projets et plus de chiffre d'affaires, sans augmenter vos efforts.",
      example: {
        role: "Pour un installateur de panneaux solaires",
        quote:
          "J'ai augmenté mon chiffre d'affaires de 40% en 6 mois, avec seulement 3 installations supplémentaires par mois.",
      },
      iconClass: "bg-blue-100 text-blue-600 dark:bg-blue-800/20 dark:text-blue-400",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Clients de meilleure qualité",
      description:
        "Ne perdez plus de temps avec des personnes qui ne sont pas sérieuses. Recevez uniquement des contacts prêts à avancer.",
      example: {
        role: "Pour un agent immobilier",
        quote:
          "Avant, sur 10 appels, peut-être 1 aboutissait. Maintenant, 7 rendez-vous sur 10 se transforment en mandat.",
      },
      iconClass: "bg-green-100 text-green-600 dark:bg-green-800/20 dark:text-green-400",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Planification simplifiée",
      description: "Les rendez-vous sont directement placés dans votre agenda, aux horaires qui vous conviennent.",
      example: {
        role: "Pour un entrepreneur en rénovation",
        quote:
          "Je n'ai plus à jongler avec les appels et les messages. Les rendez-vous apparaissent directement dans mon calendrier.",
      },
      iconClass: "bg-orange-100 text-orange-600 dark:bg-orange-800/20 dark:text-orange-400",
    },
  ]

  const serviceFeatures = [
    "Création et gestion de vos publicités",
    "Site web professionnel pour votre entreprise",
    "Assistant téléphonique pour qualifier les prospects",
    "Intégration avec votre agenda",
    "Tableau de bord simple pour suivre vos résultats",
    "Support dédié par téléphone",
  ]

  return (
    <section id="benefits" className="section-padding">
      <div className="section-container">
        <AnimateWhenVisible>
          <SectionTitle
            badge="Résultats Concrets"
            title="Ce Que Vous Gagnez"
            description="Des avantages réels pour votre entreprise, sans complications techniques"
          />
        </AnimateWhenVisible>

        <div className="mx-auto max-w-5xl mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                example={benefit.example}
                iconClassName={benefit.iconClass}
              />
            ))}
          </div>
        </div>

        <AnimateWhenVisible className="flex justify-center mt-12">
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Card className="border-0 shadow-lg max-w-3xl w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Notre Service Personnalisé</CardTitle>
                <CardTitle className="text-base font-normal text-muted-foreground">
                  Une solution sur mesure adaptée à votre entreprise, sans engagement mensuel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-4"
                >
                  {serviceFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="flex items-center justify-between border-b pb-4"
                    >
                      <div className="font-medium">{feature}</div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.3, type: "spring" }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="mt-6 text-center">
                  <AnimatedButton
                    size="lg"
                    className="gradient-bg hover:from-purple-700 hover:to-blue-600 w-full sm:w-auto"
                    onClick={scrollToContact}
                  >
                    Appelez-nous pour un Devis <Phone className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimateWhenVisible>
      </div>
    </section>
  )
}

