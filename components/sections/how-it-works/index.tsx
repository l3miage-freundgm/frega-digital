"use client"

import { motion } from "framer-motion"
import AnimateWhenVisible from "@/components/shared/animate-when-visible"
import SectionTitle from "@/components/shared/section-title"
import { staggerContainer, fadeIn } from "@/styles/animations"

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Nous créons votre campagne",
      description:
        "Après un simple appel pour comprendre votre entreprise, nous créons des publicités qui attirent les bonnes personnes dans votre région. Nous mettons aussi en place un site web professionnel qui présente vos services.",
      gradientFrom: "from-purple-600",
      gradientTo: "to-blue-500",
      textColor: "text-purple-600",
      borderColor: "border-purple-600",
    },
    {
      number: 2,
      title: "Notre système qualifie les prospects",
      description:
        "Quand quelqu'un s'intéresse à vos services, notre assistant téléphonique l'appelle pour poser les bonnes questions : budget, délai, type de projet... Comme un commercial, mais sans salaire à payer.",
      gradientFrom: "from-blue-500",
      gradientTo: "to-green-500",
      textColor: "text-blue-600",
      borderColor: "border-blue-600",
    },
    {
      number: 3,
      title: "Vous recevez des clients prêts à signer",
      description:
        "Vous recevez uniquement les contacts de personnes vraiment intéressées, avec toutes les informations dont vous avez besoin. Nous pouvons même fixer directement les rendez-vous dans votre agenda.",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-600",
      textColor: "text-green-600",
      borderColor: "border-green-600",
    },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <AnimateWhenVisible>
          <SectionTitle
            badge="Simple et Efficace"
            title="Comment Ça Marche"
            description="En 3 étapes simples, nous trouvons vos clients pendant que vous faites votre travail"
          />
        </AnimateWhenVisible>

        <div className="mx-auto max-w-5xl mt-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex flex-col md:flex-row items-center gap-6 mb-16 last:mb-0"
              >
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} rounded-full opacity-20 animate-pulse`}
                    ></div>
                    <div
                      className={`relative bg-white dark:bg-slate-800 rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold ${step.textColor} border-2 ${step.borderColor}`}
                    >
                      {step.number}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2 text-center md:text-left">{step.title}</h3>
                  <p className="text-muted-foreground text-center md:text-left">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

