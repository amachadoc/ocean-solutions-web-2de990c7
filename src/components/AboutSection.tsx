
import React from 'react';
import { Waves, Recycle, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            🌱 Nosotros
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Nuestra Historia</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ocean Plastic Solutions nació con la misión de transformar redes de pesca desechadas en productos útiles. 
                Inspirados por la pasión por el mar y la sostenibilidad, buscamos darle una segunda vida al plástico que 
                contamina nuestros océanos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Nuestro Propósito</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Reducir la contaminación plástica y fomentar una economía circular que beneficie tanto al planeta como a las comunidades.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Océanos Limpios</h4>
              <p className="text-gray-600 text-sm">Retiramos redes de pesca del mar</p>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Economía Circular</h4>
              <p className="text-gray-600 text-sm">Transformamos residuos en productos</p>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Impacto Social</h4>
              <p className="text-gray-600 text-sm">Beneficiamos a las comunidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
