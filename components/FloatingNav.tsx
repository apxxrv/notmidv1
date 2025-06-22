"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react"

interface FloatingNavProps {
  inter: any
}

export default function FloatingNav({ inter }: FloatingNavProps) {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Briefcase, label: "Work", href: "#work" },
    { icon: Mail, label: "Contact", href: "#contact" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 hidden md:block"
      >
        <div className="bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
          <div className="flex items-center gap-6">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className={`${inter.className} text-sm font-medium`}>
                    {item.label}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 right-6 z-40 md:hidden"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            scale: isOpen ? 1 : 0.8,
            y: isOpen ? 0 : -20
          }}
          transition={{ duration: 0.2 }}
          className={`absolute top-16 right-0 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-4 ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : -10
                  }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className={`${inter.className} text-sm font-medium whitespace-nowrap`}>
                    {item.label}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
