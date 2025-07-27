"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Leaf, Shield, MapPin } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Unrefined",
      description: "Gently heat-pressed to preserve raw purity",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "No Chemicals",
      description: "100% natural with zero additives",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Edible & Safe",
      description: "Pure enough to eat, perfect for cooking",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Locally Produced",
      description: "Made fresh in Ho, Volta Region, Ghana",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/coconut-farm-1.png?height=600&width=800&text=Traditional+Coconut+Oil+Processing+by+Ghanaian+Woman"
                alt="Traditional coconut oil processing"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6F4E37]/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-[#FFD700] text-[#6F4E37] px-6 py-4 rounded-full font-bold text-lg shadow-lg"
            >
              Tree to Table
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-6">
              From Tree to Table
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our coconut oil is crafted using traditional methods passed down
              through generations in Ho, Ghana. Each bottle contains the pure
              essence of fresh coconuts, with all the natural goodness and
              nutrients that make our oil truly special.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-amber-50 transition-colors duration-300"
                >
                  <div className="text-[#FFD700] flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#6F4E37] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
