import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-primary">Tax<span className="text-accent">Safar</span></div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-accent transition">Services</a>
            <a href="#" className="text-gray-600 hover:text-accent transition">About</a>
            <button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition">
              Partner Login
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
          <a href="#" className="block text-gray-600">Services</a>
          <a href="#" className="block text-gray-600">About</a>
          <button className="w-full bg-primary text-white py-2 rounded-lg">Partner Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;