"use client"

import { motion } from "framer-motion"
import { Clock, PiggyBank, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimateWhenVisible from "@/components/shared/animate-when-visible"
import SectionTitle from "@/components/shared/section-title"
import { staggerContainer, fadeIn, cardHover, iconHover } from "@/styles/animations"

export default function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Manque de temps",
      description: "Trop occupé à gérer votre entreprise",
      quote: "Je n'ai pas le temps de chercher de nouveaux clients, je suis déjà débordé avec mes chantiers actuels.",
      iconClass: "bg-purple-100 text-purple-600 dark:bg-purple-800/20 dark:text-purple-400",
    },
    {
      icon: <PiggyBank className="h-5 w-5" />,
      title: "Budget limité",
      description: "Publicité trop chère et peu efficace",
      quote: "J'ai essayé de faire de la publicité, mais c'est cher et je ne sais pas si ça marche vraiment.",
      iconClass: "bg-blue-100 text-blue-600 dark:bg-blue-800/20 dark:text-blue-400",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Clients non qualifiés",
      description: "Trop d'appels qui ne mènent à rien",
      quote:
        "Je perds du temps avec des personnes qui ne sont pas vraiment intéressées ou qui cherchent juste des prix.",
      iconClass: "bg-green-100 text-green-600 dark:bg-green-800/20 dark:text-green-400",
    },
  ]

  return (
    <section id="problems" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <AnimateWhenVisible>
          <SectionTitle
            title="Vous reconnaissez-vous ?"
            description="La plupart des entrepreneurs comme vous font face à ces défis quotidiens"
          />
        </AnimateWhenVisible>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={fadeIn} whileHover="hover" initial="rest">
              <motion.div variants={cardHover}>
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader className="pb-2">
                    <motion.div
                      variants={iconHover}
                      className={`mb-2 rounded-full p-2 w-10 h-10 flex items-center justify-center ${problem.iconClass}`}
                    >
                      {problem.icon}
                    </motion.div>
                    <CardTitle>{problem.title}</CardTitle>
                    <CardDescription>{problem.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">"{problem.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

