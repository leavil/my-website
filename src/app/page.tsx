import ParticlesBackground from "@/components/ParticlesBackground";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="h-screen w-full flex items-center justify-center relative z-10 px-6">
        <div className="max-w-4xl text-center flex flex-col items-center">
          <p className="text-[#00f0ff] font-mono font-semibold text-xl tracking-widest uppercase mb-4">
            ¡Hola! Soy
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Arnau González Almirall <br />
            <span className="bg-gradient-to-r from-[#00f0ff] to-[#007bff] bg-clip-text text-transparent">
              ML & Deep Learning Engineer
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Especializado en Deep Learning y MLOps. Transformo datos complejos en sistemas de Inteligencia Artificial escalables, optimizando desde el entrenamiento de modelos hasta su despliegue en producción.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-[#00f0ff] to-[#007bff] hover:opacity-90 text-white font-semibold border-0">
              Ver mis proyectos
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 text-white font-semibold bg-transparent">
              Hablemos
            </Button>
          </div>
        </div>
      </section>
      
      {/* Spacer para probar el scroll */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/5">
        <h2 className="text-4xl text-white mb-4">Aquí irán las Habilidades y Proyectos</h2>
        <p className="text-slate-400">Pronto con animaciones 3D y GSAP</p>
      </section>
    </main>
  );
}
