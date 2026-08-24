import { useState } from 'react';
import { Menu, X, Moon, Sun, Phone } from 'lucide-react';

export default function Navbar({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 dark:bg-indigo-500 rounded-full transition-colors duration-300"></div>
            <span className="text-xl font-bold tracking-tighter uppercase text-neutral-900 dark:text-white transition-colors duration-300">PC Promotions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#our-work" className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">Nuestros Trabajos</a>
            <a href="#contacto" className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">Contáctanos</a>
            <a href="tel:9177754131" className="flex items-center text-[10px] uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold transition-colors duration-300">
              <Phone className="w-4 h-4 mr-2" />
              (917) 775-4131
            </a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white" aria-label="Toggle Dark Mode">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white" aria-label="Toggle Dark Mode">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0F0F0F] border-b border-neutral-200 dark:border-white/10 absolute w-full transition-colors duration-300">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
            <a href="#our-work" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/5 rounded-md transition-colors duration-300">Nuestros Trabajos</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/5 rounded-md transition-colors duration-300">Contáctanos</a>
            <a href="tel:9177754131" className="block px-3 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-neutral-50 dark:hover:bg-white/5 rounded-md transition-colors duration-300">Llama (917) 775-4131</a>
          </div>
        </div>
      )}
    </nav>
  );
}
