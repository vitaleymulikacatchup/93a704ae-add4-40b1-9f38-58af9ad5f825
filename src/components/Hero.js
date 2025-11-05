import React from 'react';

function Hero() {
  return (
    <section className="relative h-96 bg-cover bg-center bg-hero-pattern">
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 hero-text tracking-wider">
          ЕНЕРГІЯ - ЦЕ ЖИТТЯ
        </h1>
      </div>
    </section>
  );
}

export default Hero;