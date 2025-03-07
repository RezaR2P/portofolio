import RevealOnScreen from "../RevealOnScreen"

function About() {
const frondEndSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Git',
  'GitHub',
  'Figma',
]

const backendSkills = [
  'Node.js',
  'PHP',
  'CodeIgniter',
  'Python',
  'Express',
  'MongoDB',
  'Docker',
  'AWS',
  'Alibaba Cloud'
]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScreen>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
<div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all">
  <p className="text-gray-300 mb-4 leading-relaxed tracking-wide">
    In my free time, I enjoy playing games to unwind and sharpen my strategic thinking. I also love reading books on personal development and technology, which help me grow both professionally and personally.
  </p>

  <div className="flex items-center mb-4">
    <span className="mr-2">🎮</span>
    <p className="text-gray-300">
      Fun fact: I once got so caught up in a "marathon" of studying and gaming that I completely lost track of time—playing and learning non-stop until I realized it was already morning! My phone alarm went off, and that’s when I finally noticed I had skipped both sleep and meals. But hey, at least I completed an important mission in the game and learned something new along the way! 😅
    </p>
  </div>

  <p className="text-gray-300 mb-4 hover:text-blue-400 transition-all">
    I believe that hobbies are not just a form of entertainment but also a way to learn and grow as an individual. Oh, and one more thing—I live by this motto: "Life is like a game. Sometimes the challenges are tough, but there’s always a way to win (or at least, a save point)." 😄
  </p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Frontend Developer</h3>
            <div className="flex flex-wrap gap-2">
              {frondEndSkills.map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">{tech}</span>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Backend Developer</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                          <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                              <strong>🎓 S1 Teknik Informatika</strong> - Universitas IPWIJA (On-going)
                            </li>
                            <li>
                              <strong>💻 Rekayasa Perangkat Lunak</strong> - SMK Medikacom Bandung (2020-2023)
                            </li>
                            <li>
                              <strong>📚 Relevant Coursework:</strong> DevSecOps, Software Engineering, Web Development, Cloud Computing
                            </li>
                          </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                          <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
                          <div className="space-y-4 text-gray-300">
                            <div>
                              <h4 className="font-semibold text-lg">Intern at PT INTI (Persero) as Software Engineer (Agustus 2022 - Oktober 2022)</h4>
                              <p>Responsible for redesigning the company's e-portal blog to enhance user experience, developing internal applications to support operations, and collaborating with the team in system management and development.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Helpdesk at PT Mitra Inti Bersama (2024 - 2025)</h4>
                                <p>Responsible for monitoring and handling issues, restoring databases, performing data center housekeeping, creating backup and restore reports for DC to DRC, and managing Alibaba Cloud infrastructure.</p>
                              </div>
                          </div>
            </div>
        </div>
      </div>
      </RevealOnScreen>
    </section>
  )
}

export default About