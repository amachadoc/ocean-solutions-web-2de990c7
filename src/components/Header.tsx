
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-900">Ocean Plastic Solutions</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-blue-700 hover:text-blue-900 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-blue-700 hover:text-blue-900 transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('productos')} className="text-blue-700 hover:text-blue-900 transition-colors">
              Productos
            </button>
            <button onClick={() => scrollToSection('impacto')} className="text-blue-700 hover:text-blue-900 transition-colors">
              Impacto
            </button>
            <button onClick={() => scrollToSection('aliados')} className="text-blue-700 hover:text-blue-900 transition-colors">
              Aliados
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-blue-700 hover:text-blue-900 transition-colors">
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-700 hover:text-blue-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-blue-100">
              <button onClick={() => scrollToSection('inicio')} className="block px-3 py-2 text-blue-700 hover:text-blue-900 w-full text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="block px-3 py-2 text-blue-700 hover:text-blue-900 w-full text-left">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('productos')} className="block px-3 py-2 text-blue-700 hover:text-blue-900 w-full text-left">
                Productos
              </button>
              <button onClick={() => scrollToSection('impacto')} className="block px-3 py-2 text-blue-700 hover:text-blue-900 w-full text-left">
                Impacto
              </button>
              <button onClick={() => scrollToSection('aliados')} className="block px-3 py-2 text-blue-700 hover:text-blue-900 w-full text-left">
                Aliados
              </button>
              <button onClick={() => scrollToSection('contacto')} className="block px-3 py-2 text-blue-700 hover:text-blue-900 w-full text-left">
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
