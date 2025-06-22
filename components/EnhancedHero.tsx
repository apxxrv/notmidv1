"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

interface EnhancedHeroProps {
  ppEditorialNewUltralightItalic: any
  inter: any
}

export default function EnhancedHero({ ppEditorialNewUltralightItalic, inter }: EnhancedHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10"
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-xl">N</span>
            </motion.div>
            <span className={`${inter.className} text-white/70 text-sm font-light tracking-wider`}>
              NOTMID AGENCY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-8xl font-light italic text-white/95 tracking-tighter leading-[95%]`}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We Create
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            >
              Digital
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Experiences
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              That Matter
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className={`${inter.className} text-white/70 text-xl font-light max-w-lg leading-relaxed`}
          >
            NotMid is a creative digital agency specializing in brand identity, web design, and interactive
            experiences that elevate your business above the ordinary.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-medium text-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              size="lg"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium text-lg backdrop-blur-sm group transition-all duration-300"
              size="lg"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex gap-8 pt-8 border-t border-white/10"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "25+", label: "Happy Clients" },
              { number: "3+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${inter.className} text-2xl font-bold text-white`}>{stat.number}</div>
                <div className={`${inter.className} text-white/60 text-sm`}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Enhanced Featured Work Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 h-[70vh] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20"
              animate={{ 
                background: [
                  "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, transparent 50%, rgba(236,72,153,0.2) 100%)",
                  "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, transparent 50%, rgba(168,85,247,0.2) 100%)",
                  "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, transparent 50%, rgba(236,72,153,0.2) 100%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <video
              className="w-full h-full object-cover relative z-10"
              src="https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black/20 z-20" />
          </div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full backdrop-blur-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
