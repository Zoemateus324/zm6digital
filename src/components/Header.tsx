import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Serviços', path: '/services' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contact' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ZM6 Digital</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : 'text-gray-700 hover:text-blue-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => {
              navigate('/contact');
              setIsMenuOpen(false);
            }}
            className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            Solicitar Orçamento
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-left py-2 text-base font-medium transition-colors duration-200 ${
                      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  navigate('/contact');
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-center mt-4"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;