import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-brand-blue text-lg font-semibold mb-4">Контакти</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-gray-300" />
                <div>
                  <p>Телефон: прийом показів (для побутових споживачів): (061)228-51-09, (061)702-05-50,</p>
                  <p>(098)168-01-01; (050)19-91-69; (093)170-28-35</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-gray-300" />
                <div>
                  <p>Адреса: вул. Славгарів, 14, м. Запоріжжя, 69035;</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 text-gray-300" />
                <p>e-mail: kanc@zoe.com.ua</p>
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-brand-blue hover:underline text-sm flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" />
                Особистий кабінет замовника послуг комерційного обліку
              </a>
            </div>
          </div>
          
          {/* Mobile Apps and Services */}
          <div>
            <p className="text-sm text-gray-300 mb-4">
              Споживачі можуть подати скаргу до АТ "Запоріжжяобленерго" щодо якості послуг через мобільний додаток "Енергетика Онлайн"
            </p>
            <div className="flex space-x-4 mb-4">
              <img src="/images/google-play.png" alt="Google Play" className="h-10" />
              <img src="/images/app-store.png" alt="App Store" className="h-10" />
            </div>
            <div className="flex space-x-2 mb-4">
              <img src="/images/service-icon1.png" alt="Service" className="w-12 h-12" />
              <img src="/images/service-icon2.png" alt="Service" className="w-12 h-12" />
              <img src="/images/service-icon3.png" alt="Service" className="w-12 h-12" />
              <img src="/images/service-icon4.png" alt="Service" className="w-12 h-12" />
              <img src="/images/service-icon5.png" alt="Service" className="w-12 h-12" />
            </div>
            <div className="text-center">
              <img src="/images/qr-code.png" alt="QR Code" className="mx-auto w-24 h-24" />
            </div>
          </div>
          
          {/* Anti-corruption */}
          <div>
            <h3 className="text-brand-blue text-lg font-semibold mb-4">Антикорупційна діяльність</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Шановні споживачі!</p>
              <p>В АТ "Запоріжжяобленерго" працює Лінія довіри з питань запобігання та протидії корупції</p>
              <div className="mt-4">
                <p className="text-brand-blue font-semibold">ТЕЛЕФОН: (050) 822-64-26</p>
                <p className="text-brand-blue">E-mail: stopcorrupt@zoe.com.ua</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="text-center">
            <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors">
              слідкуйте за нами на facebook
            </a>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">Передати показ:</p>
            <div className="flex justify-center mt-2">
              <img src="/images/telegram-icon.png" alt="Telegram" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;