"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimateWhenVisible from "@/components/shared/animate-when-visible"
import AnimatedButton from "@/components/shared/animated-button"
import { staggerContainer, fadeIn } from "@/styles/animations"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setFormSubmitted(true)
    }, 500)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimateWhenVisible className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm dark:bg-purple-800/30">
                Contactez-nous Directement
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Prêt à Avoir Plus de Clients?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Appelez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
              </p>
            </div>
            <a href="tel:0123456789">
              <AnimatedButton
                size="lg"
                className="gradient-bg hover:from-purple-700 hover:to-blue-600 self-start w-full sm:w-auto"
              >
                Appelez-nous au 01 23 45 67 89 <Phone className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </a>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 flex flex-col space-y-2 text-muted-foreground"
            >
              <motion.a
                href="mailto:contact@fregadigital.fr"
                variants={fadeIn}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                <span>contact@fregadigital.fr</span>
              </motion.a>
              <motion.a
                href="tel:0123456789"
                variants={fadeIn}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span>01 23 45 67 89</span>
              </motion.a>
            </motion.div>
          </AnimateWhenVisible>

          <AnimateWhenVisible>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}>
              <Card className="w-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Parlez-nous de votre entreprise</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire simple et nous vous contacterons sous 24 heures.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-8"
                    >
                      <div className="mb-4 text-green-500 flex justify-center">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Merci pour votre message !</h3>
                      <p className="text-muted-foreground">
                        Nous avons bien reçu votre demande et nous vous contacterons dans les 24 heures.
                      </p>
                    </motion.div>
                  ) : (
                    <form className="grid gap-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="first-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Prénom
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                            id="first-name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Jean"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="last-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Nom
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                            id="last-name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Dupont"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="business-type"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Type d&apos;entreprise
                        </label>
                        <select
                          id="business-type"
                          defaultValue=""
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="" disabled>
                            Sélectionnez votre secteur
                          </option>
                          <option value="construction">Bâtiment / Construction</option>
                          <option value="roofing">Couverture / Toiture</option>
                          <option value="solar">Panneaux solaires</option>
                          <option value="realestate">Immobilier</option>
                          <option value="plumbing">Plomberie</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="jean.dupont@exemple.fr"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Téléphone
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                          id="phone"
                          type="tel"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="06 12 34 56 78"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Votre objectif principal
                        </label>
                        <motion.textarea
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                          id="message"
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Ex: Je veux plus de clients pour mon entreprise de toiture dans la région de Bordeaux"
                          required
                        ></motion.textarea>
                      </div>
                      <AnimatedButton type="submit" className="w-full">
                        Demander à être rappelé
                      </AnimatedButton>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </AnimateWhenVisible>
        </div>
      </div>
    </section>
  )
}

