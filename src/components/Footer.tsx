export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0F0F0F] text-neutral-500 dark:text-white/30 py-12 border-t border-neutral-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-start">
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-neutral-900 dark:text-white text-xl font-bold tracking-tighter uppercase mb-4 transition-colors duration-300">PC Promotions</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-sm text-neutral-500 dark:text-white/40 transition-colors duration-300">
              Somos tus expertos en promociones y marketing visual. Llevando tu negocio al siguiente nivel con calidad y compromiso.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 lg:items-center">
            <div>
              <h4 className="text-[10px] font-bold text-neutral-900 dark:text-white uppercase tracking-[0.3em] mb-4 transition-colors duration-300">Servicios en</h4>
              <ul className="space-y-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-white/40 transition-colors duration-300">
                <li>Connecticut</li>
                <li>New York</li>
                <li>New Jersey</li>
                <li>Y alrededores</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col space-y-4 lg:items-end text-left lg:text-right">
            <h4 className="text-[10px] font-bold text-neutral-900 dark:text-white uppercase tracking-[0.3em] mb-4 transition-colors duration-300">Contacto Directo</h4>
            <a href="tel:9177754131" className="text-lg font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
              (917) 775-4131
            </a>
            <div className="mt-6 flex flex-col space-y-2 lg:items-end">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-white/20 transition-colors duration-300">
                Diseño Original &copy; {new Date().getFullYear()}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-white/20 transition-colors duration-300">
                Todos los derechos reservados.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
