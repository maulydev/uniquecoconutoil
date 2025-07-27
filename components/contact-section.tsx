"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Phone, MapPin, Shield } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({ name: "", location: "", message: "" });
  };

  const handleWhatsApp = () => {

    if (!formData.name || !formData.location || !formData.message) {
      alert("Please fill in all the required fields.");
      return;
    }

    const message = `Hi! I'm interested in ordering Unique Coconut Oil. 
Name: ${formData.name}
Location: ${formData.location}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/233552256323?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-6">
            Get Your Premium Coconut Oil
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to experience the finest coconut oil from Ho, Ghana? Contact
            us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#6F4E37] mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#6F4E37] mb-2"
                >
                  Full Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border-2 border-gray-200 rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-[#6F4E37] mb-2"
                >
                  Location *
                </label>
                <Input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full border-2 border-gray-200 rounded-lg"
                  placeholder="Your city/area"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#6F4E37] mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border-2 border-gray-200 rounded-lg"
                  placeholder="Tell us about your order (size, quantity, etc.)"
                />
              </div>

              {/* <Button
                type="submit"
                className="w-full bg-[#6F4E37] hover:bg-[#5a3e2a] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Request
              </Button> */}
            </form>

            <div className="mt-2 pt-2">
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full border-2 border-[#FFD700] text-[#6F4E37] hover:bg-[#FFD700] hover:text-[#6F4E37] font-semibold py-6 rounded-lg transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Submit Request
              </Button>
            </div>

            <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
              <Shield className="h-4 w-4 mr-2" />
              We don't spam. Your information is safe with us.
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#6F4E37] to-[#5a3e2a] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-[#FFD700]" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="opacity-90">0552256323</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-[#FFD700]" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="opacity-90">Ho, Volta Region, Ghana</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6 text-[#FFD700]" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="opacity-90">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#6F4E37] mb-4">
                Why Choose Unique Coconut Oil?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  <span>100% Pure & Natural</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  <span>Heat-Pressed Traditional Method</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  <span>Locally Made</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  <span>Free Delivery in Ho Area</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  <span>Quality Guaranteed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
