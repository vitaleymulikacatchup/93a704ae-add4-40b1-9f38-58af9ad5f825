import React from 'react';
import { Calendar, Clock } from 'lucide-react';

function MainContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Latest News */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-gray-600" />
              ОСТАННІ НОВИНИ
            </h2>
            
            <div className="news-card">
              <h3 className="news-title">
                06 ЛИСТОПАДА ПО ЗАПОРІЗЬКІЙ ОБЛАСТІ ДІЯТИМУТЬ ГПВ
              </h3>
              <p className="news-date flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                5 листопада 2025
              </p>
              <div className="news-content">
                <p className="mb-4">
                  Відповідно до команди НЕК «Укренерго», з метою стабілізації ситуації в ОЕС України 
                  енергосистемі, 06 листопада по Запорізькій області будуть застосовані графіки погодинних 
                  відключень (ГПВ). Орієнтовно вимикатимуться з 08:00 до 10:00 - 1,2 черги, з 10:00 до 16:00 - 1 
                  черга, з 20:00 до 22:00 - 1,2 черги.
                </p>
                <p className="mb-4">
                  Графік вимушених електропостачання по чергам (підгрупам) з урахуванням часу на 
                  перемикання:
                </p>
                <div className="space-y-1 text-sm">
                  <div className="schedule-item">1.1: 19:00 - 20:30</div>
                  <div className="schedule-item">1.2: 19:00 - 22:30</div>
                  <div className="schedule-item">2.1: 15:30 - 19:00</div>
                  <div className="schedule-item">2.2: 15:30 - 19:00</div>
                  <div className="schedule-item">3.1: 15:30 - 19:00</div>
                  <div className="schedule-item">3.2: 15:30 - 19:00</div>
                  <div className="schedule-item">4.1 - не вимикається</div>
                  <div className="schedule-item">4.2: 08:30 - 10:30</div>
                  <div className="schedule-item">5.1: 19:00 - 22:30</div>
                  <div className="schedule-item">5.2: 19:00 - 22:30</div>
                  <div className="schedule-item">6.1: 13:30 - 15:30</div>
                  <div className="schedule-item">6.2: 13:30 - 15:30</div>
                </div>
                <p className="mt-4 text-sm">
                  Також з 08:00 до 22:00 діятимуть графіки обмеження потужності (ГОП) в повному обсязі (5 
                  черг).
                </p>
              </div>
            </div>
            
            {/* Schedule graphic */}
            <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <img 
                src="/images/schedule-graphic.png" 
                alt="Діяти графік погодинних відключень" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Right column - Current News */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-gray-600" />
            АКТУАЛЬНІ НОВИНИ
          </h2>
          
          <div className="space-y-4">
            <div className="news-card">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Реєстр електропостачальників
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Реєстр електропостачальників, які приєдналися до умов публічного договору 
                електропостачання при надання послуг з розподілу електроенергії...
              </p>
              <a href="#" className="text-brand-blue text-sm hover:underline">Читати далі</a>
            </div>
            
            <div className="news-card">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Перелік типів лічильників, рекомендованих до встановлення ПАТ «Запоріжжяобленерго», та їх технічні характеристики
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                У відповідності до вимог Кодексу комерційного обліку електричної енергії, затвердженого Постановою НКРЕКП від 14.03.2018 № 311...
              </p>
              <a href="#" className="text-brand-blue text-sm hover:underline">Читати далі</a>
            </div>
            
            <div className="news-card">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                До уваги споживачів за об'єктами, розташованими на територіях, де ведуться бойові дії, або тимчасово окупованих російською федерацією
              </h3>
              <p className="text-sm text-gray-500 mb-2">3.04.02.2022</p>
              <p className="text-sm text-gray-700 mb-2">
                3.04.02.2022 групи України здійснюється військова агресія російської федерації, у зв'язку з чим з 24.02.2022 Україна...
              </p>
              <a href="#" className="text-brand-blue text-sm hover:underline">Читати далі</a>
            </div>
            
            <div className="news-card">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                ПАТ «Запоріжжяобленерго» інформує щодо розгляду звернень (листів) споживачів (заявників) з метою врегулювання договірних відносин в період дії правового режиму воєнного стану
              </h3>
              <p className="text-sm text-gray-500 mb-2">3.04.02.2022</p>
              <p className="text-sm text-gray-700 mb-2">
                3.04.02.2022 групи України здійснюється військова агресія російської федерації, у зв'язку з чим з 24.02.2022 Україна...
              </p>
              <a href="#" className="text-brand-blue text-sm hover:underline">Читати далі</a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded transition-colors">
              Переглянути всі новини
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;