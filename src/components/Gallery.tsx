import { galleryImages } from '../data';
import * as motion from 'motion/react-client';

export default function Gallery() {
  return (
    <section id="our-work" className="py-24 bg-[#FAFAFA] dark:bg-[#0F0F0F] border-t border-neutral-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[40px] md:text-[60px] leading-none font-bold tracking-tighter italic uppercase text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
            Nuestros Trabajos
          </h2>
          <p className="text-xl text-neutral-500 dark:text-white/50 max-w-md mx-auto transition-colors duration-300">
            Una muestra de calidad, detalle y dedicación en cada proyecto.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.4 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#141414] transform-gpu transition-colors duration-300 shadow-sm dark:shadow-none"
            >
              <img 
                src={src} 
                alt={`Work sample ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Use a placeholder if image doesn't exist, to keep layout clean
                  const height = 200 + (idx % 3) * 100;
                  target.src = `https://placehold.co/400x${height}/png?text=Work+${idx + 1}`;
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
