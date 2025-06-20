"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className={`bg-[#141414] ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className={`${inter.className} text-white/70 text-sm font-light`}>NotMid Agency</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tighter leading-[110%]`}
            >
              We Create
              <br />
              Digital
              <br />
              Experiences
              <br />
              That Matter
            </motion.h1>

            <p className={`${inter.className} text-white/60 text-lg font-light max-w-md leading-relaxed`}>
              NotMid is a creative digital agency specializing in brand identity, web design, and interactive
              experiences that elevate your business above the ordinary.
            </p>

            <div className="flex gap-4">
              <Button className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full font-medium">
                View Our Work
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/5 px-8 py-3 rounded-full font-medium"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Featured Work Preview */}
          <div className="w-full md:w-1/2 h-[60vh] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/90 mb-8`}
              >
                About NotMid
              </motion.h2>
              <div className="space-y-6">
                <p className={`${inter.className} text-white/60 text-lg font-light leading-relaxed`}>
                  We believe in the power of exceptional design to transform businesses and create meaningful
                  connections with audiences. Our team combines strategic thinking with creative excellence to deliver
                  solutions that are anything but mid.
                </p>
                <p className={`${inter.className} text-white/60 text-lg font-light leading-relaxed`}>
                  Founded on the principle that every brand deserves to stand out, we work with forward-thinking
                  companies to create digital experiences that drive results and inspire action.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-white/20 pl-6">
                <h3 className={`${inter.className} text-white font-semibold text-xl mb-2`}>Our Mission</h3>
                <p className={`${inter.className} text-white/60 font-light`}>
                  To elevate brands through innovative design and strategic thinking, creating digital experiences that
                  resonate and perform.
                </p>
              </div>
              <div className="border-l-2 border-white/20 pl-6">
                <h3 className={`${inter.className} text-white font-semibold text-xl mb-2`}>Our Values</h3>
                <p className={`${inter.className} text-white/60 font-light`}>
                  Excellence, innovation, collaboration, and authenticity guide everything we do. We're committed to
                  delivering work that exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/90 mb-6`}
            >
              Our Work
            </h2>
            <p className={`${inter.className} text-white/60 text-lg font-light max-w-2xl mx-auto`}>
              Explore our portfolio of digital experiences, brand identities, and interactive solutions that have helped
              our clients achieve their goals.
            </p>
          </div>
          <div className="h-[80vh]">
            <DynamicFrameLayout />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/90 text-center mb-16`}
          >
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Identity",
                description:
                  "Complete brand development including logo design, visual identity systems, and brand guidelines that establish a strong market presence.",
                features: ["Logo Design", "Visual Identity", "Brand Guidelines", "Brand Strategy"],
              },
              {
                title: "Web Design & Development",
                description:
                  "Custom websites and web applications that combine beautiful design with seamless functionality and optimal user experience.",
                features: ["Custom Development", "Responsive Design", "E-commerce", "CMS Integration"],
              },
              {
                title: "Digital Marketing",
                description:
                  "Strategic digital marketing campaigns that drive engagement, increase conversions, and build lasting relationships with your audience.",
                features: ["Social Media", "Content Strategy", "SEO Optimization", "Analytics & Insights"],
              },
            ].map((service, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <h3 className={`${inter.className} text-white font-semibold text-2xl mb-4`}>{service.title}</h3>
                <p className={`${inter.className} text-white/60 font-light mb-6 leading-relaxed`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`${inter.className} text-white/50 text-sm flex items-center`}>
                      <span className="w-1.5 h-1.5 bg-white/30 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/90 text-center mb-16`}
          >
            Meet The Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Creative Director",
                bio: "With over 10 years in digital design, Sarah leads our creative vision and ensures every project exceeds expectations.",
              },
              {
                name: "Marcus Rodriguez",
                role: "Lead Developer",
                bio: "Marcus brings technical expertise and innovative solutions to life, specializing in cutting-edge web technologies.",
              },
              {
                name: "Emma Thompson",
                role: "Brand Strategist",
                bio: "Emma crafts compelling brand narratives and strategies that resonate with audiences and drive business growth.",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className={`${inter.className} text-white/50 text-6xl font-light`}>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className={`${inter.className} text-white font-semibold text-xl mb-2`}>{member.name}</h3>
                <p className={`${inter.className} text-white/70 font-medium mb-4`}>{member.role}</p>
                <p className={`${inter.className} text-white/60 font-light text-sm leading-relaxed`}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/90 text-center mb-16`}
          >
            Client Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote:
                  "NotMid transformed our brand identity completely. The attention to detail and creative vision exceeded all our expectations. Our engagement rates have increased by 300% since the rebrand.",
                client: "Jessica Park",
                company: "TechFlow Solutions",
                project: "Complete Brand Redesign",
              },
              {
                quote:
                  "Working with NotMid was a game-changer for our business. They didn't just design a website; they created an experience that our customers love and that drives real results.",
                client: "David Kim",
                company: "Urban Wellness Co.",
                project: "E-commerce Platform",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-8">
                <p className={`${inter.className} text-white/80 text-lg font-light leading-relaxed mb-8 italic`}>
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className={`${inter.className} text-white font-semibold`}>{testimonial.client}</p>
                  <p className={`${inter.className} text-white/60 text-sm`}>{testimonial.company}</p>
                  <p className={`${inter.className} text-white/40 text-xs mt-1`}>{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/90 mb-6`}
            >
              Let's Create Something
              <br />
              Extraordinary Together
            </h2>
            <p className={`${inter.className} text-white/60 text-lg font-light`}>
              Ready to elevate your brand? Get in touch and let's discuss your project.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-xl py-4"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-xl py-4"
                  required
                />
              </div>
            </div>
            <div>
              <Input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-xl py-4"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleInputChange}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-xl py-4 min-h-32"
                required
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="bg-white text-black hover:bg-white/90 px-12 py-4 rounded-full font-medium text-lg"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className={`${inter.className} text-white/70 font-light`}>NotMid Agency</span>
            </div>

            <div className="flex gap-8">
              <Link href="#" className={`${inter.className} text-white/60 hover:text-white/90 transition-colors`}>
                Work
              </Link>
              <Link href="#" className={`${inter.className} text-white/60 hover:text-white/90 transition-colors`}>
                About
              </Link>
              <Link href="#" className={`${inter.className} text-white/60 hover:text-white/90 transition-colors`}>
                Services
              </Link>
              <Link href="#" className={`${inter.className} text-white/60 hover:text-white/90 transition-colors`}>
                Contact
              </Link>
            </div>

            <p className={`${inter.className} text-white/40 text-sm`}>© 2024 NotMid Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
