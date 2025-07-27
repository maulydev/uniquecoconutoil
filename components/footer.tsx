"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Instagram, MessageCircle, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const handleWhatsApp = () => {
    window.open("https://wa.me/233552256323", "_blank")
  }

  const handleFacebook = () => {
    // Replace with actual Facebook page URL
    window.open("https://facebook.com/uniquescoconutoil", "_blank")
  }

  const handleInstagram = () => {
    // Replace with actual Instagram page URL
    window.open("https://instagram.com/uniquescoconutoil", "_blank")
  }

  return (
    <footer ref={ref} className="bg-gradient-to-br from-[#6F4E37] to-[#5a3e2a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "serif" }}>
              Unique
              <span className="block text-[#FFD700] text-2xl">Coconut Oil</span>
            </h3>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Premium 100% pure coconut oil, traditionally made in Ho, Ghana. From our family to yours, experience the
              natural goodness.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleFacebook}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleWhatsApp}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleInstagram}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-xl font-bold mb-6 text-[#FFD700]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="h-5 w-5 text-[#FFD700]" />
                <span>0552256323</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FFD700]" />
                <span>Ho, Volta Region, Ghana</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MessageCircle className="h-5 w-5 text-[#FFD700]" />
                <span>WhatsApp Available 24/7</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h4 className="text-xl font-bold mb-6 text-[#FFD700]">Stay Updated</h4>
            <p className="opacity-90 mb-4">Get updates on new products and special offers</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFD700] hover:bg-[#e6c200] text-[#6F4E37] font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-sm opacity-70 mt-2">We respect your privacy. No spam, ever.</p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/20 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="opacity-90">© {new Date().getFullYear()} Unique Coconut Oil. All rights reserved.</p>
            <div className="flex items-center space-x-2 opacity-90">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>in Ho, Ghana</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm opacity-70">
            <span>100% Natural</span>
            <span>•</span>
            <span>Heat-Pressed</span>
            <span>•</span>
            <span>Locally Made</span>
            <span>•</span>
            <span>Quality Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
