import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-24 bg-black px-4 pt-10 sm:px-10 lg:px-24 xl:px-40">
      <hr className="my-6 border-slate-300" />
      <div className="flex flex-wrap justify-center gap-4 pb-6 text-sm text-white sm:justify-between">
        <p>Made With Love 𖹭 by Zareva</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RezaR2P"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-5 w-5 text-gray-400 hover:text-gray-200" />
          </a>

          <a
            href="https://www.instagram.com/kucinghitam.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="h-5 w-5 text-gray-400 hover:text-gray-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/reza-ramdan-permana-45b310222/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5 text-gray-400 hover:text-gray-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
