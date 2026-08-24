import { webWorks } from '../data';
import { ExternalLink } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function WebWork() {
  return (
    <section className="py-24 bg-white dark:bg-[#0F0F0F] border-t border-neutral-200 dark:border-white/10 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-indigo-600/10 dark:bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none transition-colors duration-300" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[40px] md:text-[60px] leading-none font-bold tracking-tighter italic uppercase text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
            Nuestro trabajo en la Web
          </h2>
          <p className="text-xl text-neutral-500 dark:text-white/50 max-w-md mx-auto transition-colors duration-300">
            Diseños personalizados, modernos y efectivos para potenciar tu presencia digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webWorks.map((work, index) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative flex flex-col justify-end overflow-hidden rounded-3xl min-h-[420px] bg-[#FAFAFA] dark:bg-[#141414] border border-neutral-200 dark:border-white/10 transition-colors duration-300 shadow-sm dark:shadow-none"
            >
              <img 
                src={work.image} 
                alt={work.title} 
                className="absolute inset-0 w-full h-full object-cover object-top opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x800/png?text=Website+Preview';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 dark:from-[#0F0F0F] dark:via-[#0F0F0F]/80 to-transparent transition-colors duration-300" />
              
              <div className="relative p-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col h-full justify-end">
                <h3 className="text-lg font-bold tracking-widest uppercase text-neutral-900 dark:text-white mb-3 flex items-center transition-colors duration-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-500 mr-3 shadow-[0_0_8px_rgba(79,70,229,0.5)] dark:shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all duration-300"></span>
                  {work.title}
                </h3>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-[12px] text-neutral-600 dark:text-white/50 leading-relaxed mb-6 line-clamp-4 transition-colors duration-300">
                    {work.description}
                  </p>
                  {work.link && (
                    <a 
                      href={work.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      Visita el sitio <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
