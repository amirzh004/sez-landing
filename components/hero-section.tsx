export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-industrial-bg.jpg" alt="Industrial background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-12 flex justify-center">
          <img src="/images/logo-saryarka.png" alt="Saryarka Logo" className="w-32 h-32 drop-shadow-2xl" />
        </div>

        {/* Hero Text */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">СОЗДАЕМ БУДУЩЕЕ</h1>
          <p className="text-xl md:text-2xl text-white/95 mb-4 leading-relaxed">
            Управляющая компания специальной экономической зоной "Сарыарка"
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Управляющая компания индустриальной зоной "SARAN"
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
