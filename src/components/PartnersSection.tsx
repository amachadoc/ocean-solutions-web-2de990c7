
import React from 'react';
import { Handshake, ArrowRight } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    { name: "Bureo", description: "Líder en reciclaje de redes de pesca" },
    { name: "ESAN", description: "Universidad de ciencias aplicadas" },
    { name: "Municipalidad de Surco", description: "Gobierno local aliado" }
  ];

  const handlePartnership = () => {
    const message = "Hola, me interesa formar una alianza con Ocean Plastic Solutions. ¿Podrían contactarme?";
    const whatsappUrl = `https://wa.me/51987654321?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInvestment = () => {
    const message = "Hola, me interesa conocer las oportunidades de inversión en Ocean Plastic Solutions.";
    const whatsappUrl = `https://wa.me/51987654321?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="aliados" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            🤝 Aliados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Juntos construimos un futuro más sostenible
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Handshake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quieres sumarte?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Únete a nuestra red de aliados y juntos transformemos el futuro del océano
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePartnership}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Formar Alianza
              <ArrowRight size={20} />
            </button>
            <button
              onClick={handleInvestment}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Oportunidades de Inversión
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
