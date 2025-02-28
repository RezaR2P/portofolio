import RevealOnScreen from "../RevealOnScreen"

function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScreen>
      <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">
          <h3 className="text-xl font-bold mb-2">Project 1</h3>
          <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam dolor delectus. Inventore atque dolorem ab sapiente consectetur dignissimos. Quasi?</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
              <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">{tech}</span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 hover:text-blue-300 transition-colors">View Project → </a>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">
          <h3 className="text-xl font-bold mb-2">Project 2</h3>
          <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam dolor delectus. Inventore atque dolorem ab sapiente consectetur dignissimos. Quasi?</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
              <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">{tech}</span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 hover:text-blue-300 transition-colors">View Project → </a>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">
          <h3 className="text-xl font-bold mb-2">Project 3</h3>
          <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam dolor delectus. Inventore atque dolorem ab sapiente consectetur dignissimos. Quasi?</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
              <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">{tech}</span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 hover:text-blue-300 transition-colors">View Project → </a>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">
          <h3 className="text-xl font-bold mb-2">Project 1</h3>
          <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam dolor delectus. Inventore atque dolorem ab sapiente consectetur dignissimos. Quasi?</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
              <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">{tech}</span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 hover:text-blue-300 transition-colors">View Project → </a>
          </div>
        </div>
      </div>
      </div>
      </RevealOnScreen>
    </section>
  )
}

export default Projects