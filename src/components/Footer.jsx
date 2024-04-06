import React from "react";

function Footer() {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <div className="container-fluid">
        <a href="#hero" className="block text-xl md:text-2xl font-semibold">Lamees Anees</a>
        <a href="mailto:lamees.anees@gmail.com" className="text-sm md:text-md hover:text-indigo-500">lamees.anees@gmail.com</a>
        <div className="flex justify-center items-center mt-4">
          <a href="https://www.linkedin.com/in/lamees-mohammed-anees/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="LinkedIn Logo" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.instagram.com/lam._ees/?hl=en" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="Instagram Logo" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://github.com/lameesanees" target="_blank" rel="noopener noreferrer">
            <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-violet.png" alt="GitHub Logo" className="w-8 h-6 md:w-8 md:h-8" />
          </a>
        </div>
        <p className="text-xs font-regular mt-2 text-gray-500">© Lamees Anees {new Date().getFullYear()}. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
