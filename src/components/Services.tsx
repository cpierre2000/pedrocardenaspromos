import { services } from '../data';
import * as motion from 'motion/react-client';

export default function Services() {
  return (
    <section className="py-24 bg-white dark:bg-[#0F0F0F] border-t border-neutral-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[40px] md:text-[60px] leading-none font-bold tracking-tighter italic uppercase text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-neutral-500 dark:text-white/50 max-w-md mx-auto transition-colors duration-300">
            Con más de 20 años de experiencia, ofrecemos soluciones integrales a medida para hacer destacar tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-[#FAFAFA] dark:bg-[#141414] rounded-2xl p-8 border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden flex-shrink-0 border border-neutral-200 dark:border-white/20 bg-white dark:bg-transparent transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/100x100/png?text=Service';
                  }}
                />
              </div>
              <h3 className="text-[14px] font-bold text-center tracking-widest uppercase text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[12px] text-neutral-500 dark:text-white/50 text-center leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
