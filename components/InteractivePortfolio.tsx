"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

interface InteractivePortfolioProps {
  ppEditorialNewUltralightItalic: any
  inter: any
}

export default function InteractivePortfolio({ ppEditorialNewUltralightItalic, inter }: InteractivePortfolioProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const categories = ["All", "Branding", "Web Design", "E-commerce", "Mobile App"]

  const projects = [
    {
      id: 1,
      title: "TechFlow Solutions",
      category: "Branding",
      description: "Complete brand identity redesign for a leading tech company",
      image: "/api/placeholder/600/400",
      tags: ["Brand Identity", "Logo Design", "Guidelines"],
      color: "from-purple-500 to-pink-500",
      year: "2024"
    },
    {
      id: 2,
      title: "Urban Wellness Co.",
      category: "E-commerce",
      description: "Modern e-commerce platform for wellness products",
      image: "/api/placeholder/600/400",
      tags: ["E-commerce", "UX/UI", "Development"],
      color: "from-green-500 to-emerald-500",
      year: "2024"
    },
    {
      id: 3,
      title: "Nexus Financial",
      category: "Web Design",
      description: "Professional website for financial services",
      image: "/api/placeholder/600/400",
      tags: ["Web Design", "Finance", "Responsive"],
      color: "from-blue-500 to-cyan-500",
      year: "2023"
    },
    {
      id: 4,
      title: "FitTrack Mobile",
      category: "Mobile App",
      description: "Fitness tracking app with social features",
      image: "/api/placeholder/600/400",
      tags: ["Mobile App", "UI/UX", "Social"],
      color: "from-orange-500 to-red-500",
      year: "2023"
    },
    {
      id: 5,
      title: "Artisan Collective",
      category: "Branding",
      description: "Brand identity for local artisan marketplace",
      image: "/api/placeholder/600/400",
      tags: ["Branding", "Local Business", "Creative"],
      color: "from-indigo-500 to-purple-500",
      year: "2024"
    },
    {
      id: 6,
      title: "CloudSync Platform",
      category: "Web Design",
      description: "SaaS platform for team collaboration",
      image: "/api/placeholder/600/400",
      tags: ["SaaS", "Platform", "Collaboration"],
      color: "from-teal-500 to-blue-500",
      year: "2023"
    }
  ]

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section ref={ref} className="py-32 px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/95 mb-8`}>
            Our Work
          </h2>
          <p className={`${inter.className} text-white/70 text-xl font-light max-w-3xl mx-auto leading-relaxed mb-12`}>
            Explore our portfolio of digital experiences, brand identities, and interactive solutions that have helped our clients achieve their goals.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/70 border-white/20 hover:border-white/40 hover:text-white/90"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                      <span className={`${inter.className} text-white/60 text-sm`}>Project Preview</span>
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                      <span className={`${inter.className} text-white/80 text-xs font-medium`}>{project.year}</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`${inter.className} text-white/60 text-sm font-medium`}>
                        {project.category}
                      </span>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <h3 className={`${inter.className} text-white font-semibold text-xl mb-3 group-hover:text-white/90 transition-colors`}>
                      {project.title}
                    </h3>

                    <p className={`${inter.className} text-white/70 font-light text-sm leading-relaxed mb-4`}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`${inter.className} text-white/50 text-xs bg-white/5 px-3 py-1 rounded-full border border-white/10`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    animate={{
                      opacity: hoveredProject === project.id ? 0.05 : 0
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
