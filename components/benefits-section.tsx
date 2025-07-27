"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Brain, ChefHat, Sparkles } from "lucide-react";

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Natural Antimicrobial Action",
      description:
        "Lauric acid can help reduce harmful bacteria and viruses when used topically or for oil‑pulling",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Fast Energy Boost",
      description:
        "Contains medium‑chain fats that the body converts quickly into energy",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <ChefHat className="h-12 w-12" />,
      title: "Suitable for Cooking",
      description:
        "Stable at high temperatures, making it safe for frying and traditional Ghanaian cooking",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Hydrates Skin & Hair",
      description:
        "Helps retain moisture and minimizes protein loss in hair when applied",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-[#DAA520] via-amber-200 to-[#B8860B]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-6">
            Health Benefits
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the amazing health benefits of our pure, natural coconut
            oil
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <motion.div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {benefit.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-[#6F4E37] mb-4 text-center">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#6F4E37] mb-4">
              Experience the Difference
            </h3>
            <p className="text-gray-700 mb-6">
              Join thousands of satisfied customers who have made the switch to
              our premium coconut oil
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#FFD700] hover:bg-[#e6c200] text-[#6F4E37] font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Get Yours Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
