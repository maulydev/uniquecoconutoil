"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, ShoppingCart, Award, Star } from "lucide-react"
import { useRef } from "react"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const floatingElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "75%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const handleWhatsApp = () => {
    window.open("https://wa.me/233552256323", "_blank")
  }

  const scrollToContact = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-5"
        style={{ y: backgroundY, scale }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div
          className="w-full h-full min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-2.jpg?height=1080&width=1920&text=Coconut+Oil+Bottles+with+Fresh+Coconuts+on+Wooden+Surface')`,
          }}
        />
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-12 left-8 z-5"
        style={{ y: floatingElementsY }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full shadow-xl border-2 border-amber-200" />
          <Award className="absolute inset-0 m-auto text-white w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-36 right-16 z-5 hidden md:block"
        style={{ y: floatingElementsY }}
        animate={{
          y: [0, 12, 0],
          rotate: [0, -8, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-[#6F4E37] to-[#8B4513] rounded-full shadow-lg border border-amber-300" />
          <Star className="absolute inset-0 m-auto text-[#FFD700] w-5 h-5" />
        </div>
      </motion.div>

      {/* Main Text */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="inline-block mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-xl text-xs max-w-24 md:max-w-full sm:text-sm md:text-base font-semibold uppercase tracking-widest shadow-xl border-2 border-yellow-200">
              ✨ Premium Quality • 100% Natural ✨
            </div>
          </div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight text-[#6F4E37] font-serif"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            Unique
            <motion.span 
              className="block text-4xl md:text-6xl lg:text-7xl mt-2 sm:mt-3"
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Coconut Oil
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle Section */}
        <motion.div
          className="bg-white/70 backdrop-blur-md rounded-xl p-6 sm:p-8 mb-8 sm:mb-10 shadow-2xl border-2 border-amber-200/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6F4E37] mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
            <span className="text-[#DAA520]">🥥</span>
            Premium Heat-Pressed Oil
            <span className="text-[#DAA520]">🥥</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#8B4513] font-medium">
            Natural • Organic • Trusted by Generations
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-[#6F4E37] to-[#8B4513] hover:from-[#5a3e2a] hover:to-[#6F4E37] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-8 text-base sm:text-lg md:text-xl font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-amber-300/30"
            >
              <ShoppingCart className="mr-2 sm:mr-3" />
              Order Now
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              size="lg"
              className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] hover:from-[#DAA520] hover:to-[#FFD700] text-white border-2 border-[#DAA520] px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-8 text-base sm:text-lg md:text-xl font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              <MessageCircle className="mr-2 sm:mr-3" />
              WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        style={{ opacity }}
        animate={{ y: [0, 12, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="relative">
          <div className="w-6 h-10 sm:w-7 sm:h-11 border-2 border-[#6F4E37] rounded-full flex justify-center bg-gradient-to-b from-[#DAA520] to-[#B8860B] shadow-xl">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full mt-2 shadow-sm"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute -inset-1 bg-amber-200/30 rounded-full blur-sm -z-10" />
        </div>
      </motion.div>
    </section>
  )
}
