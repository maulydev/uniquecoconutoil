"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BenefitsSection from "@/components/benefits-section"
import ProductShowcase from "@/components/product-showcase"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ProductShowcase />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
