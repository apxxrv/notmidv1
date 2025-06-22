"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

interface EnhancedContactProps {
  ppEditorialNewUltralightItalic: any
  inter: any
}

export default function EnhancedContact({ ppEditorialNewUltralightItalic, inter }: EnhancedContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        timeline: "",
        message: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@notmidagency.com",
      description: "Drop us a line anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Creative Street, Design District",
      description: "New York, NY 10001"
    }
  ]

  return (
    <section ref={ref} className="py-32 px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/95 mb-8`}>
            Let's Create Something
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          <p className={`${inter.className} text-white/70 text-xl font-light max-w-2xl mx-auto leading-relaxed`}>
            Ready to elevate your brand? Get in touch and let's discuss your project. We're excited to hear about your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`${inter.className} text-white/80 text-sm font-medium`}>
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-xl py-4 focus:border-white/40 focus:ring-white/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`${inter.className} text-white/80 text-sm font-medium`}>
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-xl py-4 focus:border-white/40 focus:ring-white/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`${inter.className} text-white/80 text-sm font-medium`}>
                        Company Name
                      </label>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-xl py-4 focus:border-white/40 focus:ring-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`${inter.className} text-white/80 text-sm font-medium`}>
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 text-white rounded-xl py-4 px-4 focus:border-white/40 focus:ring-white/20 focus:outline-none"
                      >
                        <option value="" className="bg-gray-800">Select Budget Range</option>
                        <option value="5k-10k" className="bg-gray-800">$5K - $10K</option>
                        <option value="10k-25k" className="bg-gray-800">$10K - $25K</option>
                        <option value="25k-50k" className="bg-gray-800">$25K - $50K</option>
                        <option value="50k+" className="bg-gray-800">$50K+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`${inter.className} text-white/80 text-sm font-medium`}>
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 text-white rounded-xl py-4 px-4 focus:border-white/40 focus:ring-white/20 focus:outline-none"
                    >
                      <option value="" className="bg-gray-800">Select Timeline</option>
                      <option value="asap" className="bg-gray-800">ASAP</option>
                      <option value="1-2months" className="bg-gray-800">1-2 Months</option>
                      <option value="3-6months" className="bg-gray-800">3-6 Months</option>
                      <option value="6months+" className="bg-gray-800">6+ Months</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className={`${inter.className} text-white/80 text-sm font-medium`}>
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-xl py-4 min-h-32 focus:border-white/40 focus:ring-white/20"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-white/90 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className={`${inter.className} text-white text-2xl font-semibold mb-4`}>
                    Message Sent Successfully!
                  </h3>
                  <p className={`${inter.className} text-white/70`}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/95 mb-6`}>
                Get In Touch
              </h3>
              <p className={`${inter.className} text-white/70 text-lg font-light leading-relaxed mb-8`}>
                We're here to help bring your vision to life. Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-white/80" />
                      </div>
                      <div>
                        <h4 className={`${inter.className} text-white font-semibold text-lg mb-1`}>
                          {info.title}
                        </h4>
                        <p className={`${inter.className} text-white/90 font-medium mb-1`}>
                          {info.content}
                        </p>
                        <p className={`${inter.className} text-white/60 text-sm`}>
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h4 className={`${inter.className} text-white font-semibold text-lg mb-2`}>
                Quick Response Guarantee
              </h4>
              <p className={`${inter.className} text-white/70 text-sm leading-relaxed`}>
                We typically respond to all inquiries within 2-4 hours during business hours. For urgent projects, don't hesitate to call us directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
