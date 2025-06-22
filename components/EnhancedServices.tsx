"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, Code, TrendingUp, Zap, Globe, Users } from "lucide-react"

interface EnhancedServicesProps {
  ppEditorialNewUltralightItalic: any
  inter: any
}

export default function EnhancedServices({ ppEditorialNewUltralightItalic, inter }: EnhancedServicesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand development including logo design, visual identity systems, and brand guidelines that establish a strong market presence.",
      features: ["Logo Design", "Visual Identity", "Brand Guidelines", "Brand Strategy"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Custom websites and web applications that combine beautiful design with seamless functionality and optimal user experience.",
      features: ["Custom Development", "Responsive Design", "E-commerce", "CMS Integration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive engagement, increase conversions, and build lasting relationships with your audience.",
      features: ["Social Media", "Content Strategy", "SEO Optimization", "Analytics & Insights"],
      color: "from-green-500 to-emerald-500"
    }
  ]

  const additionalServices = [
    { icon: Zap, title: "Performance Optimization", description: "Lightning-fast websites that convert" },
    { icon: Globe, title: "Global Reach", description: "Multi-language and international solutions" },
    { icon: Users, title: "User Experience", description: "Research-driven UX/UI design" }
  ]

  return (
    <section ref={ref} className="py-32 px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/95 mb-8`}>
            Our Services
          </h2>
          <p className={`${inter.className} text-white/70 text-xl font-light max-w-3xl mx-auto leading-relaxed`}>
            We offer comprehensive digital solutions that transform your business and create meaningful connections with your audience.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 h-full">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-[#141414] rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className={`${inter.className} text-white font-semibold text-2xl mb-4 group-hover:text-white/90 transition-colors`}>
                    {service.title}
                  </h3>
                  
                  <p className={`${inter.className} text-white/70 font-light mb-8 leading-relaxed`}>
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) + 0.5 }}
                        className={`${inter.className} text-white/60 text-sm flex items-center group-hover:text-white/80 transition-colors`}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 group-hover:scale-125 transition-transform`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className={`${inter.className} text-white/90 text-2xl font-semibold mb-8`}>
            Plus More Specialized Services
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-white/80" />
                </div>
                <h4 className={`${inter.className} text-white font-medium text-lg mb-2`}>{service.title}</h4>
                <p className={`${inter.className} text-white/60 text-sm`}>{service.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/95 mb-4`}>
              Ready to Transform Your Business?
            </h3>
            <p className={`${inter.className} text-white/70 text-lg mb-8 max-w-2xl mx-auto`}>
              Let's discuss how our services can help you achieve your goals and stand out in the digital landscape.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
