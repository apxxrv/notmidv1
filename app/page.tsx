"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import EnhancedHero from "../components/EnhancedHero"
import EnhancedServices from "../components/EnhancedServices"
import InteractivePortfolio from "../components/InteractivePortfolio"
import EnhancedContact from "../components/EnhancedContact"
import ScrollProgress from "../components/ScrollProgress"
import FloatingNav from "../components/FloatingNav"
import CustomCursor from "../components/CustomCursor"
import LoadingScreen from "../components/LoadingScreen"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react"

export default function Home() {
  const aboutRef = useRef(null)
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const teamRef = useRef(null)
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" })
  const testimonialsRef = useRef(null)
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  return (
    <div className={`bg-[#141414] ${ppEditorialNewUltralightItalic.variable} ${inter.variable} relative`}>
      <LoadingScreen inter={inter} />
      <CustomCursor />
      <ScrollProgress />
      <FloatingNav inter={inter} />
      
      {/* Enhanced Hero Section */}
      <section id="home">
        <EnhancedHero 
          ppEditorialNewUltralightItalic={ppEditorialNewUltralightItalic} 
          inter={inter} 
        />
      </section>

      {/* Enhanced About Section */}
      <section id="about" ref={aboutRef} className="py-32 px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/95 mb-8`}
              >
                About NotMid
              </motion.h2>
              <div className="space-y-6">
                <p className={`${inter.className} text-white/70 text-xl font-light leading-relaxed`}>
                  We believe in the power of exceptional design to transform businesses and create meaningful
                  connections with audiences. Our team combines strategic thinking with creative excellence to deliver
                  solutions that are anything but mid.
                </p>
                <p className={`${inter.className} text-white/70 text-xl font-light leading-relaxed`}>
                  Founded on the principle that every brand deserves to stand out, we work with forward-thinking
                  companies to create digital experiences that drive results and inspire action.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                {[
                  { number: "150+", label: "Projects Delivered" },
                  { number: "50+", label: "Happy Clients" },
                  { number: "99%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                    className="text-center"
                  >
                    <div className={`${inter.className} text-3xl font-bold text-white mb-2`}>{stat.number}</div>
                    <div className={`${inter.className} text-white/60 text-sm`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                  <h3 className={`${inter.className} text-white font-semibold text-2xl`}>Our Mission</h3>
                </div>
                <p className={`${inter.className} text-white/70 font-light leading-relaxed`}>
                  To elevate brands through innovative design and strategic thinking, creating digital experiences that
                  resonate and perform beyond expectations.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="w-8 h-8 text-blue-400" />
                  <h3 className={`${inter.className} text-white font-semibold text-2xl`}>Our Values</h3>
                </div>
                <p className={`${inter.className} text-white/70 font-light leading-relaxed`}>
                  Excellence, innovation, collaboration, and authenticity guide everything we do. We're committed to
                  delivering work that exceeds expectations and drives real results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="work">
        <InteractivePortfolio 
          ppEditorialNewUltralightItalic={ppEditorialNewUltralightItalic} 
          inter={inter} 
        />
      </section>

      {/* Enhanced Services Section */}
      <EnhancedServices 
        ppEditorialNewUltralightItalic={ppEditorialNewUltralightItalic} 
        inter={inter} 
      />

      {/* Enhanced Team Section */}
      <section ref={teamRef} className="py-32 px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/95 mb-8`}>
              Meet The Team
            </h2>
            <p className={`${inter.className} text-white/70 text-xl font-light max-w-2xl mx-auto leading-relaxed`}>
              Our diverse team of creatives, strategists, and developers work together to bring your vision to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Chen",
                role: "Creative Director",
                bio: "With over 10 years in digital design, Sarah leads our creative vision and ensures every project exceeds expectations.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                name: "Marcus Rodriguez",
                role: "Lead Developer",
                bio: "Marcus brings technical expertise and innovative solutions to life, specializing in cutting-edge web technologies.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "Emma Thompson",
                role: "Brand Strategist",
                bio: "Emma crafts compelling brand narratives and strategies that resonate with audiences and drive business growth.",
                gradient: "from-green-500 to-emerald-500"
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className={`w-56 h-56 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-1 group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-full h-full bg-[#141414] rounded-full flex items-center justify-center">
                      <span className={`${inter.className} text-white/60 text-6xl font-light`}>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${member.gradient} rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300`} />
                  <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r ${member.gradient} rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300`} />
                </div>

                <h3 className={`${inter.className} text-white font-semibold text-2xl mb-2 group-hover:text-white/90 transition-colors`}>
                  {member.name}
                </h3>
                <p className={`${inter.className} text-white/80 font-medium mb-6 text-lg`}>{member.role}</p>
                <p className={`${inter.className} text-white/60 font-light leading-relaxed max-w-sm mx-auto`}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section ref={testimonialsRef} className="py-32 px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/95 mb-8`}>
              Client Stories
            </h2>
            <p className={`${inter.className} text-white/70 text-xl font-light max-w-2xl mx-auto leading-relaxed`}>
              Don't just take our word for it. Here's what our clients have to say about working with NotMid.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote: "NotMid transformed our brand identity completely. The attention to detail and creative vision exceeded all our expectations. Our engagement rates have increased by 300% since the rebrand.",
                client: "Jessica Park",
                company: "TechFlow Solutions",
                project: "Complete Brand Redesign",
                rating: 5,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                quote: "Working with NotMid was a game-changer for our business. They didn't just design a website; they created an experience that our customers love and that drives real results.",
                client: "David Kim",
                company: "Urban Wellness Co.",
                project: "E-commerce Platform",
                rating: 5,
                gradient: "from-blue-500 to-cyan-500"
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5">
                  {/* Quote Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className={`${inter.className} text-white/90 text-lg font-light leading-relaxed mb-8 italic`}>
                    "{testimonial.quote}"
                  </p>

                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                        <span className={`${inter.className} text-white font-semibold text-sm`}>
                          {testimonial.client.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className={`${inter.className} text-white font-semibold text-lg`}>{testimonial.client}</p>
                        <p className={`${inter.className} text-white/70 text-sm`}>{testimonial.company}</p>
                        <p className={`${inter.className} text-white/50 text-xs mt-1`}>{testimonial.project}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional testimonial stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: "4.9/5", label: "Average Rating" },
                  { number: "100%", label: "Project Success Rate" },
                  { number: "24h", label: "Response Time" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`${inter.className} text-2xl font-bold text-white mb-2`}>{stat.number}</div>
                    <div className={`${inter.className} text-white/60 text-sm`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact">
        <EnhancedContact 
          ppEditorialNewUltralightItalic={ppEditorialNewUltralightItalic} 
          inter={inter} 
        />
      </section>

      {/* Enhanced Footer */}
      <footer className="py-20 px-8 border-t border-white/10 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-bold text-xl">N</span>
                </motion.div>
                <span className={`${inter.className} text-white/80 font-medium text-lg`}>NotMid Agency</span>
              </div>
              <p className={`${inter.className} text-white/60 font-light leading-relaxed max-w-md mb-6`}>
                Creating digital experiences that matter. We help brands stand out in the digital landscape through innovative design and strategic thinking.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social, index) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <span className={`${inter.className} text-white/70 text-xs font-medium`}>
                      {social[0]}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`${inter.className} text-white font-semibold text-lg mb-6`}>Quick Links</h4>
              <div className="space-y-3">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Work", href: "#work" },
                  { label: "Contact", href: "#contact" }
                ].map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => {
                      const element = document.querySelector(link.href)
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`${inter.className} text-white/60 hover:text-white/90 transition-colors block text-left`}
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className={`${inter.className} text-white font-semibold text-lg mb-6`}>Services</h4>
              <div className="space-y-3">
                {[
                  "Brand Identity",
                  "Web Design",
                  "Development",
                  "Digital Marketing"
                ].map((service, index) => (
                  <div key={service} className={`${inter.className} text-white/60 text-sm`}>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <p className={`${inter.className} text-white/50 text-sm`}>
              © 2024 NotMid Agency. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className={`${inter.className} text-white/50 hover:text-white/80 transition-colors text-sm`}>
                Privacy Policy
              </Link>
              <Link href="#" className={`${inter.className} text-white/50 hover:text-white/80 transition-colors text-sm`}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
