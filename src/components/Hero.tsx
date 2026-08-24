import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#FAFAFA] dark:bg-[#0F0F0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-[60px] md:text-[110px] leading-[0.9] font-bold tracking-tighter text-neutral-900 dark:text-white mb-2 md:mb-4 uppercase transition-colors duration-300">
          Pedro Cardenas
        </h1>
        <h2 className="text-[40px] md:text-[80px] leading-[0.9] italic font-bold tracking-tighter text-indigo-600 dark:text-indigo-500 mb-8 pb-2 uppercase transition-colors duration-300">
          Promotions
        </h2>
        <p className="max-w-md mx-auto text-xl text-neutral-500 dark:text-white/50 mb-10 leading-relaxed transition-colors duration-300">
          Promotional products, signs, vehicle wraps, apparel, and customized websites tailored for your business needs.
        </p>
        <a href="#contacto" className="inline-flex items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-gray-200 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300">
          Get a Quote
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
      <div className="mt-16 md:mt-24 max-w-5xl mx-auto px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] dark:from-[#0F0F0F] to-transparent z-10 bottom-0 h-32 mt-auto transition-colors duration-300" />
        <img 
          src="/images/hero-bottom-01.png" 
          alt="Promotional display showcase" 
          className="w-full h-auto object-cover rounded-t-[3rem] border-t border-l border-r border-neutral-200 dark:border-white/10 opacity-100 dark:opacity-80 mix-blend-normal dark:mix-blend-luminosity transition-all duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
    </section>
  );
}
