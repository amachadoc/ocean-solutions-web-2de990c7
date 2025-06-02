
import React from 'react';
import { TrendingDown, Trash2, Users, Quote } from 'lucide-react';

const ImpactSection = () => {
  const metrics = [
    {
      icon: <TrendingDown className="w-8 h-8 text-green-600" />,
      value: "2.5 ton",
      label: "CO₂ evitado",
      description: "Emisiones reducidas gracias al reciclaje"
    },
    {
      icon: <Trash2 className="w-8 h-8 text-blue-600" />,
      value: "1,200 kg",
      label: "Plástico recuperado",
      description: "Redes de pesca transformadas"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      value: "150+",
      label: "Nadadores satisfechos",
      description: "Usuarios que confían en nuestros productos"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Nadador en mar abierto",
      content: "El protector de cuello ha sido un cambio radical en mis entrenamientos. No solo me protege, sino que sé que estoy contribuyendo al cuidado del océano.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Marina EcoTech",
      role: "Organización aliada",
      content: "Ocean Plastic Solutions representa el futuro de la sostenibilidad marina. Su enfoque de economía circular es exactamente lo que nuestros océanos necesitan.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section id="impacto" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            🌍 Impacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Midiendo nuestro compromiso con el planeta y las personas
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{metric.label}</div>
              <div className="text-gray-600 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">Testimonios</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-blue-900">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
