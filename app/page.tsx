"use client"

import Hero from "@/components/sections/hero"
import ProblemSection from "@/components/sections/problem"
import ServicesSection from "@/components/sections/services"
import HowItWorksSection from "@/components/sections/how-it-works"
import BenefitsSection from "@/components/sections/benefits"
import TestimonialsSection from "@/components/sections/testimonials"
import ProofSection from "@/components/sections/proof"
import ContactSection from "@/components/sections/contact"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ProofSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

