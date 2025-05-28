import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 black-bg bg-opacity-90">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center">
            <i className="fas fa-brain text-2xl gold-gradient mr-2"></i>
            <span className="playfair text-xl font-bold gold-gradient">
              Psi. Aline Scavazza
            </span>
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Início</a>
            <a href="#about" className="nav-link">Sobre</a>
            <a href="#services" className="nav-link">Serviços</a>
            <a href="#testimonials" className="nav-link">Depoimentos</a>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>

          {/* MENU MOBILE */}
          <button className="md:hidden text-gray-200 focus:outline-none">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
