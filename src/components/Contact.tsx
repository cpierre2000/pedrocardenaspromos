import { Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-[#FAFAFA] dark:bg-[#0F0F0F] border-t border-neutral-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <h2 className="text-[40px] md:text-[60px] leading-none font-bold tracking-tighter italic uppercase text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
              Contáctanos
            </h2>
            <p className="text-xl text-neutral-500 dark:text-white/50 max-w-md leading-relaxed mb-10 transition-colors duration-300">
              Estamos listos para ayudarte a llevar tu negocio al siguiente nivel. Escríbenos o llámanos hoy mismo.
            </p>

            <div className="space-y-6">
              <a 
                href="tel:9177754131" 
                className="group flex items-center p-6 bg-white dark:bg-[#141414] rounded-2xl border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center rounded-full group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-white/40 mb-1 transition-colors duration-300">Llámanos</p>
                  <p className="text-xl font-bold text-neutral-900 dark:text-white transition-colors">(917) 775-4131</p>
                </div>
              </a>

              <div className="flex items-center p-6 bg-white dark:bg-[#141414] rounded-2xl border border-neutral-200 dark:border-white/10 shadow-sm dark:shadow-none transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center rounded-full transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-white/40 mb-1 transition-colors duration-300">Área de servicio</p>
                  <p className="text-sm font-bold text-neutral-900 dark:text-white transition-colors duration-300">Connecticut, New York, New Jersey y más.</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white dark:bg-white/5 p-8 md:p-10 rounded-3xl border border-neutral-200 dark:border-white/10 shadow-sm dark:shadow-none transition-colors duration-300">
            <h3 className="text-xl font-bold tracking-widest uppercase text-neutral-900 dark:text-white mb-8 transition-colors duration-300">Envíanos un mensaje</h3>
            <div className="space-y-5">
              
              <div>
                <label htmlFor="name" className="block text-[10px] uppercase tracking-widest text-neutral-500 dark:text-white/40 mb-2 transition-colors duration-300">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-5 py-3 bg-[#FAFAFA] dark:bg-[#141414] border border-neutral-200 dark:border-white/10 rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20 text-sm" 
                  placeholder="Tu nombre"
                  required 
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-neutral-500 dark:text-white/40 mb-2 transition-colors duration-300">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-5 py-3 bg-[#FAFAFA] dark:bg-[#141414] border border-neutral-200 dark:border-white/10 rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20 text-sm" 
                    placeholder="ejemplo@correo.com"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest text-neutral-500 dark:text-white/40 mb-2 transition-colors duration-300">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-5 py-3 bg-[#FAFAFA] dark:bg-[#141414] border border-neutral-200 dark:border-white/10 rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20 text-sm" 
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-neutral-500 dark:text-white/40 mb-2 transition-colors duration-300">¿Cómo podemos ayudarte?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-5 py-3 bg-[#FAFAFA] dark:bg-[#141414] border border-neutral-200 dark:border-white/10 rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20 text-sm resize-none" 
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="group w-full inline-flex justify-center items-center py-4 px-6 bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-gray-200 text-xs font-bold uppercase tracking-widest rounded-full transition-colors mt-2"
              >
                Enviar Mensaje
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
