"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      size: "1 liter",
      oldPrice: "GH₵ 100",
      newPrice: "GH₵ 95",
      image:
        "/1L.png",
      description: "Perfect for trying our premium oil",
      popular: false,
    },
    {
      size: "5 liters",
      oldPrice: "GH₵ 500",
      newPrice: "GH₵ 450",
      image:
        "/4.5L_2.png",
      description: "Great for regular cooking needs",
      popular: true,
    },
    {
      size: "25 liters",
      oldPrice: "GH₵ 2,300",
      newPrice: "GH₵ 2,000",
      image:
        "/25L.png",
      description: "Best value for families",
      popular: false,
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-6">
            Choose Your Size
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Available in convenient sizes to meet all your cooking and health
            needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-[#FFD700] text-[#6F4E37] px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`border border-[#FFD700] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full ${
                  product.popular ? "ring-2 ring-[#FFD700]" : ""
                }`}
              >
                <div className="text-center">
                  <motion.div
                    className="relative mb-6 overflow-hidden rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.size} Coconut Oil Bottle`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6F4E37]/10 to-transparent" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-[#6F4E37] mb-2">
                    {product.size}
                  </h3>

                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="text-3xl font-black text-amber-950 drop-shadow mb-3">
                    {product.newPrice}
                  </div>
                  <div className="font-bold text-amber-950 drop-shadow mb-6  line-through">
                    {product.oldPrice}
                  </div>

                  <a
                    href={`https://wa.me/233552256323?text=Hello, I'm interested in buying the ${product.size} Coconut Oil`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#6F4E37] hover:bg-[#5a3e2a] text-white text-center text-sm font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingCart className="inline mr-2 size-6" />
                    Order Now via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#6F4E37] to-[#5a3e2a] text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Free Delivery in Ho & Surrounding Areas
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Order 2 or more bottles and get free delivery within Ho, Volta
              Region
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✓ Fresh Production
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✓ Quality Guaranteed
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                ✓ Local Support
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
