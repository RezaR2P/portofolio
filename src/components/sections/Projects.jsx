import RevealOnScreen from "../RevealOnScreen";

function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScreen>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">
              <h3 className="text-xl font-bold mb-2">Sistem Parkir Universitas IPWIJA</h3>
              <p className="text-gray-300 mb-4">
                Sistem Parkir Universitas IPWIJA adalah aplikasi berbasis Python untuk mengelola parkir kendaraan di lingkungan kampus. Aplikasi ini mencakup fitur-fitur seperti:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Manajemen Parkir: Mencatat kendaraan masuk/keluar, menghasilkan QR code, dan menghitung biaya parkir.</li>
                <li>Laporan Keuangan: Menghasilkan laporan harian, bulanan, atau tahunan.</li>
                <li>Manajemen Data: Menyimpan dan menghapus data parkir beserta file terkait.</li>
                <li>Integrasi Kamera: Mengambil foto kendaraan dan membaca QR code.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "OpenCV", "Pandas", "QR Code"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/RezaR2P/parkir_sistem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">
  <h3 className="text-xl font-bold mb-2">Instagram Login Page Clone</h3>
  <p className="text-gray-300 mb-4">
    Sebuah clone dari halaman login Instagram yang dibuat menggunakan JavaScript native, HTML, dan CSS. Proyek ini bertujuan untuk mempelajari konsep dasar frontend development, termasuk styling dengan CSS dan manipulasi DOM dengan JavaScript.
  </p>
  <ul className="list-disc list-inside text-gray-300 mb-4">
    <li>Desain responsif yang menyerupai halaman login Instagram asli.</li>
    <li>Validasi form login menggunakan JavaScript.</li>
    <li>Efek hover dan transisi yang halus dengan CSS.</li>
    <li>Menggunakan Flexbox dan Grid untuk layout yang rapi.</li>
  </ul>
  <div className="flex flex-wrap gap-2 mb-4">
    {["HTML", "CSS", "JavaScript"].map((tech, key) => (
      <span
        key={key}
        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all"
      >
        {tech}
      </span>
    ))}
  </div>
  <div className="flex justify-between items-center">
    <a href="https://github.com/RezaR2P/instagram" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300 transition-colors">
      View Project →
    </a>
  </div>
</div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">
  <h3 className="text-xl font-bold mb-2">Aplikasi Todo dengan React</h3>
  <p className="text-gray-300 mb-4">
    Aplikasi Todo sederhana yang dibangun menggunakan React. Aplikasi ini memungkinkan pengguna untuk menambahkan, menandai, dan menghapus tugas. Data tugas disimpan di localStorage sehingga tetap tersedia meskipun aplikasi ditutup.
  </p>
  <ul className="list-disc list-inside text-gray-300 mb-4">
    <li>Tambahkan tugas baru dengan judul tugas.</li>
    <li>Tampilkan daftar tugas dengan status selesai/belum.</li>
    <li>Tandai tugas sebagai selesai atau hapus tugas.</li>
    <li>Simpan tugas ke localStorage untuk penyimpanan lokal.</li>
    <li>Navigasi antar halaman (Welcome, Home, Goodbye) menggunakan React Router.</li>
  </ul>
  <div className="flex flex-wrap gap-2 mb-4">
    {["React", "React Router", "Bootstrap", "LocalStorage"].map((tech, key) => (
      <span
        key={key}
        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all"
      >
        {tech}
      </span>
    ))}
  </div>
  <div className="flex justify-between items-center">
    <a href="https://github.com/RezaR2P/react-todo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300 transition-colors">
      View Project →
    </a>
  </div>
</div>

            {/* Project 4 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all">
  <h3 className="text-xl font-bold mb-2">Webhook Auto Deploy</h3>
  <p className="text-gray-300 mb-4">
    Sebuah webhook handler berbasis Node.js & Express yang secara otomatis melakukan `git pull` saat ada commit baru ke branch `main` pada repository GitHub. Berguna untuk auto deploy aplikasi tanpa perlu menarik perubahan secara manual.
  </p>
  <ul className="list-disc list-inside text-gray-300 mb-4">
    <li>Verifikasi request menggunakan HMAC SHA-256 signature untuk keamanan.</li>
    <li>Menjalankan `git pull` secara otomatis saat webhook diterima.</li>
    <li>Error handling untuk menangani kegagalan saat menjalankan `git pull`.</li>
    <li>Dapat dijalankan di background menggunakan PM2.</li>
  </ul>
  <div className="flex flex-wrap gap-2 mb-4">
    {["Node.js", "Express", "Git", "PM2", "HMAC SHA-256"].map((tech, key) => (
      <span
        key={key}
        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.5)] transition-all"
      >
        {tech}
      </span>
    ))}
  </div>
  <div className="flex justify-between items-center">
    <a href="https://github.com/RezaR2P/webhook-handler" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300 transition-colors">
      View Project →
    </a>
  </div>
</div>
          </div>
        </div>
      </RevealOnScreen>
    </section>
  );
}

export default Projects;