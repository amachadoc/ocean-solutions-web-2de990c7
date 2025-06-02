
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Protector de cuello para nadadores",
      description: "Protección UV y antifriccional para nadadores en mar abierto. Fabricado con redes de pesca recicladas.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["100% reciclado", "Protección UV", "Resistente al agua salada", "Diseño ergonómico"]
    },
    {
      id: 2,
      name: "Filamento 3D reciclado",
      description: "Filamento de alta calidad para impresión 3D, creado a partir de plástico marino recuperado.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Material eco-friendly", "Alta durabilidad", "Compatible con impresoras 3D", "Resistente y flexible"]
    }
  ];

  const handlePurchase = (productName: string) => {
    const message = `Hola, me interesa comprar el producto: ${productName}. ¿Podrían darme más información?`;
    const whatsappUrl = `https://wa.me/51987654321?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            🧪 Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovación sostenible convertida en productos que marcan la diferencia
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Características:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handlePurchase(product.name)}
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 hover:scale-105 transform"
                >
                  <ShoppingCart size={20} />
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
