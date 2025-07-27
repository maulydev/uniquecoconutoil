"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Ernest M.",
      location: "Ho, Volta Region",
      rating: 5,
      text: "I've been using Unique coconut oil for a while now. The quality is exceptional and my family loves cooking with it. It's so pure and natural!",
      image: "/placeholder.svg?height=80&width=80&text=Happy+Customer+1",
    },
    // {
    //   name: "Kwame A.",
    //   location: "Hohoe",
    //   rating: 5,
    //   text: "Best coconut oil I've ever used! Perfect for frying kelewele and it doesn't smoke. My wife uses it for her skin too. Highly recommended!",
    //   image: "/placeholder.svg?height=80&width=80&text=Happy+Customer+2",
    // },
    // {
    //   name: "Ama D.",
    //   location: "Kpando",
    //   rating: 5,
    //   text: "The traditional way they make this oil really shows in the quality. It tastes so fresh and natural. I order 500ml bottles every month now.",
    //   image: "/placeholder.svg?height=80&width=80&text=Happy+Customer+3",
    // },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-6">What Our Customers Say</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join hundreds of satisfied customers across the Volta Region
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-[#FFD700] fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.blockquote
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-gray-700 mb-8 italic leading-relaxed"
              >
                "{testimonials[currentIndex].text}"
              </motion.blockquote>

              {/* Customer Info */}
              <motion.div
                key={`customer-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center justify-center space-x-4"
              >
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-bold text-[#6F4E37] text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-[#6F4E37]" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-[#6F4E37]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#FFD700]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
