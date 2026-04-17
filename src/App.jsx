import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { services } from './data/services';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-primary">
      <Navbar />
      <Hero />
      
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Comprehensive Solutions</h2>
          <p className="text-gray-500 mt-2">Everything you need to stay compliant and grow.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-3xl hover:border-accent/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group bg-white">
              <div className="text-4xl mb-4 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              <button className="mt-6 text-accent font-semibold flex items-center group-hover:gap-2 transition-all">
                Learn More <span className="ml-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="text-2xl font-bold text-primary mb-4">Tax<span className="text-accent">Safar</span></div>
           <p className="text-gray-500">© 2024 TaxSafar Redesign Assignment. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;