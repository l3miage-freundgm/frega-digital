"use client"

import { motion } from "framer-motion"
import { Lightbulb, Wand2, ArrowRight } from "lucide-react"
import AnimateWhenVisible from "@/components/shared/animate-when-visible"
import SectionTitle from "@/components/shared/section-title"
import AnimatedButton from "@/components/shared/animated-button"
import { fadeIn, staggerContainer } from "@/styles/animations"

export default function ProofSection() {
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

  return (
    <section
      id="proof"
      className="section-padding bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20"
    >
      <div className="section-container">
        <AnimateWhenVisible>
          <SectionTitle
            badge="Méta-moment"
            title="Vous êtes la preuve que ça marche !"
            description="Réfléchissez un instant : comment avez-vous trouvé ce site ?"
          />
        </AnimateWhenVisible>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl mt-12 text-center"
        >
          <motion.div variants={fadeIn} className="mb-8">
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="bg-purple-100 text-purple-600 dark:bg-purple-800/30 dark:text-purple-400 rounded-full p-4"
              >
                <Lightbulb size={40} />
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Le fait que vous lisiez ceci est notre meilleure publicité</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Vous êtes arrivé sur ce site parce que notre système a fonctionné. Nous avons utilisé exactement les mêmes
              techniques que nous proposons à nos clients : publicité ciblée, site web efficace, et qualification des
              prospects.
            </p>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 text-blue-600 dark:bg-blue-800/30 dark:text-blue-400 rounded-full p-2 mr-2">
                  <Wand2 size={20} />
                </div>
                <h4 className="text-xl font-semibold">La magie de la méta-démonstration</h4>
              </div>
              <p className="italic">
                "Si nous pouvons vous attirer ici, nous pouvons faire la même chose pour vos clients. C'est comme un
                restaurant qui est toujours plein - la meilleure preuve que la nourriture est bonne !"
              </p>
            </div>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" variants={fadeIn}>
              <AnimatedButton
                size="lg"
                className="gradient-bg hover:from-purple-700 hover:to-blue-600 w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Je suis convaincu, parlons-en <ArrowRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => scrollToContact()}
              >
                Montrez-moi comment
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

