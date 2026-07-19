"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Object Detection System",
    category: "Computer Vision",
    description: "Sistema de detección de objetos en tiempo real optimizado para inferencia rápida utilizando arquitecturas avanzadas de Deep Learning.",
    image: "/assets/ml_project1.png",
    tags: ["PyTorch", "OpenCV", "YOLO"],
    githubUrl: "https://github.com/leaviil",
    demoUrl: "#",
  },
  {
    title: "Kubernetes ML Pipeline",
    category: "MLOps",
    description: "Plataforma escalable para entrenamiento y despliegue de modelos, utilizando contenedores y orquestación para asegurar alta disponibilidad.",
    image: "/assets/ml_project2.png",
    tags: ["Kubernetes", "Docker", "MLflow"],
    githubUrl: "https://github.com/leaviil",
    demoUrl: "#",
  },
  {
    title: "NLP Sentiment Analyzer",
    category: "Data Science / NLP",
    description: "Modelo de procesamiento de lenguaje natural para extraer insights y analizar sentimientos a partir de grandes volúmenes de texto.",
    image: "/assets/ml_project3.png",
    tags: ["Transformers", "Pandas", "HuggingFace"],
    githubUrl: "https://github.com/leaviil",
    demoUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 w-full relative z-10 bg-black/60 backdrop-blur-md border-t border-white/5 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-[#00f0ff]">Destacados</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Una selección de mis trabajos recientes en Machine Learning, Computer Vision y despliegue de modelos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#00f0ff]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container - Using a placeholder gradient since real images might not exist in Next public folder yet */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                {/* Fallback pattern for missing images */}
                <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black"></div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold tracking-wider text-[#00f0ff] uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    <span>Código</span>
                  </a>
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-[#00f0ff] hover:text-[#00f0ff]/80 transition-colors ml-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
