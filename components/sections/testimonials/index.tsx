"use client"

import { motion } from "framer-motion"
import AnimateWhenVisible from "@/components/shared/animate-when-visible"
import SectionTitle from "@/components/shared/section-title"
import TestimonialCard from "@/components/shared/testimonial-card"
import { staggerContainer } from "@/styles/animations"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Pierre Durand",
      role: "Artisan Couvreur, Toulouse",
      testimonial:
        "Avant, je dépensais 1500€ par mois en publicité sans vraiment savoir si ça marchait. Maintenant, je sais exactement combien me coûte chaque nouveau client, et j'en ai plus qu'avant pour le même budget.",
    },
    {
      name: "Marie Lambert",
      role: "Agent Immobilier, Lyon",
      testimonial:
        "Le système d'appels automatiques a changé ma vie. Je ne perds plus de temps avec des personnes qui ne sont pas prêtes à vendre. Tous les rendez-vous dans mon agenda sont avec des propriétaires motivés.",
    },
    {
      name: "Thomas Moreau",
      role: "Installateur Panneaux Solaires, Nantes",
      testimonial:
        "J'étais sceptique au début, je ne comprends rien à la technologie. Mais c'est justement l'avantage : tout est géré pour moi. Je reçois juste les coordonnées des clients intéressés.",
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <AnimateWhenVisible>
          <SectionTitle
            badge="Témoignages"
            title="Ils l'ont Essayé"
            description="Des entrepreneurs comme vous qui ont transformé leur façon de trouver des clients"
          />
        </AnimateWhenVisible>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

