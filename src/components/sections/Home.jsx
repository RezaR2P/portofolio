import RevealOnScreen from "../RevealOnScreen"

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScreen>
      <div className="text-center z-10  px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent loading-right">Hi, I'm Reza Ramdan Permana</h1>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          I am a passionate Fullstack Developer with a strong focus on building interactive interfaces and efficient backend systems. always eager to explore new technologies and expand my knowledge.
        </p>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          🎯 Goals: My aim is to become a skilled and innovative developer, creating applications that not only function seamlessly but also deliver an optimal user experience.
        </p>
        <div className="flex justify-center space-x-4 ">
        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.5)]">View Projects</a>
        <a href="#contact" className="border border-blue-500/50 text-blue-500 px-6 py-2 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">Contact Me</a>
        </div>
      </div>
      </RevealOnScreen>
    </section>
  )
}

export default Home