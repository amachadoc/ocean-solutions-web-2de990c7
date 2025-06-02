
import React from 'react';
import { Waves } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-8 h-8 text-blue-300" />
              <h3 className="text-xl font-bold">Ocean Plastic Solutions</h3>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Transformando el plástico oceánico en productos innovadores para un futuro sostenible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-blue-200 hover:text-white transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-blue-200 hover:text-white transition-colors"
              >
                Productos
              </button>
              <button 
                onClick={() => document.getElementById('impacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-blue-200 hover:text-white transition-colors"
              >
                Impacto
              </button>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-blue-200 hover:text-white transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-blue-200">
              <p>WhatsApp: +51 987 654 321</p>
              <p>Email: info@oceanplasticsolutions.com</p>
              <p>Lima, Perú</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 Ocean Plastic Solutions. Todos los derechos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 text-blue-300 hover:text-white transition-colors"
          >
            Volver arriba ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
