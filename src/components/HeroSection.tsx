
import React from 'react';

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)'
      }}
    >
      {/* Ocean texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-blue-600/30"></div>
        <div className="absolute inset-0 animate-pulse opacity-10">
          <div className="w-full h-full bg-white/20 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:60px_60px]"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Transformamos el plástico
          <br />
          <span className="text-blue-100">en soluciones</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in">
          Convertimos redes de pesca desechadas en productos innovadores para un océano más limpio
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button 
            onClick={scrollToProducts}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Ver Productos
          </button>
          <button 
            onClick={() => window.open('https://wa.me/51987654321?text=Hola, me interesa conocer más sobre Ocean Plastic Solutions', '_blank')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
          >
            Contactar
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
