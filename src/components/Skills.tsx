"use client";

import { motion } from "framer-motion";
import { Brain, Server, Database, Wrench } from "lucide-react";

const skills = [
  {
    category: "Deep Learning",
    icon: <Brain className="w-8 h-8 text-[#00f0ff]" />,
    techs: ["PyTorch", "TensorFlow", "Keras", "CNNs", "Transformers"],
    description: "Diseño y entrenamiento de redes neuronales complejas.",
  },
  {
    category: "MLOps",
    icon: <Server className="w-8 h-8 text-[#007bff]" />,
    techs: ["Docker", "Kubernetes", "MLflow", "CI/CD", "AWS"],
    description: "Despliegue escalable y monitorización de modelos.",
  },
  {
    category: "Data Science",
    icon: <Database className="w-8 h-8 text-[#00f0ff]" />,
    techs: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL"],
    description: "Análisis, limpieza y extracción de insights de datos.",
  },
  {
    category: "Herramientas",
    icon: <Wrench className="w-8 h-8 text-[#007bff]" />,
    techs: ["Git", "Linux/Bash", "FastAPI", "Jupyter", "Airflow"],
    description: "Ecosistema de desarrollo y orquestación.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full relative z-10 bg-black/40 backdrop-blur-md border-t border-white/5 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#007bff]">Habilidades</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Stack tecnológico y herramientas que utilizo para construir soluciones de inteligencia artificial robustas y escalables.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.category}</h3>
              <p className="text-slate-400 text-sm mb-4 h-10">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
