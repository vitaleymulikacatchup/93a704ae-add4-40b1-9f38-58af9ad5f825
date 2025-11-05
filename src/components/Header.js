import React from 'react';
import { Menu, Phone } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/images/logo.png" 
              alt="Запорізька обленерго" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Contact info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-brand-blue" />
              <span className="text-gray-700">Передати показ</span>
              <span className="font-semibold">0-800-304-502</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Call-center</span>
              <img src="/images/call-center-icon.png" alt="Call center" className="w-8 h-8" />
            </div>
            <div className="flex space-x-2">
              <img src="/images/payment-icon1.png" alt="Payment" className="w-8 h-8" />
              <img src="/images/payment-icon2.png" alt="Payment" className="w-8 h-8" />
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:block border-t border-gray-100">
          <div className="flex justify-center space-x-12 py-4">
            <a href="#" className="text-brand-blue font-medium hover:text-blue-700 transition-colors">
              Населенню
            </a>
            <a href="#" className="text-brand-red font-medium hover:text-red-700 transition-colors flex items-center">
              <span className="mr-2">📅</span>
              Графіки відключень
            </a>
            <a href="#" className="text-brand-yellow font-medium hover:text-yellow-700 transition-colors">
              Підприємствам
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;