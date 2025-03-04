import RevealOnScreen from "../RevealOnScreen";
import emailjs from 'emailjs-com';
import { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isSent || error) {
      const timer = setTimeout(() => {
        setIsSent(false);
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSent, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((res) => {
        console.log(res.text);
        setFormData({ name: '', email: '', message: '' });
        setIsSent(true);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError('Failed to send message. Please try again.');
        setIsSent(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScreen>
        <div className="px-4 w-full md:w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.5)] hover:scale-105"
            >
              Send Message
            </button>
          </form>
          {isSent && (
            <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 mt-4 text-center">{error}</p>
          )}
        </div>
      </RevealOnScreen>
    </section>
  );
}

export default Contact;