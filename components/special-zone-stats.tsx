import { TrendingUp, Building2, Factory, Users } from "lucide-react"

export default function SpecialZoneStats() {
  return (
    <section id="sez" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">Основные показатели СЭЗ</h2>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">201,9 млрд</div>
                <div className="text-lg text-muted-foreground">тенге</div>
              </div>
            </div>
            <p className="text-foreground font-medium">Объем вложенных инвестиций</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">23,9 млрд</div>
                <div className="text-lg text-muted-foreground">тенге</div>
              </div>
            </div>
            <p className="text-foreground font-medium">Объем налоговых отчислений</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Factory className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">242,5 млрд</div>
                <div className="text-lg text-muted-foreground">тенге</div>
              </div>
            </div>
            <p className="text-foreground font-medium">Объем производства</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">1276</div>
                <div className="text-lg text-muted-foreground">человек</div>
              </div>
            </div>
            <p className="text-foreground font-medium">Рабочие места</p>
          </div>
        </div>

        {/* Map and Additional Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="relative h-96 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/images/kazakhstan-map.jpg" alt="СЭЗ SARYARKA Map" className="w-full h-full object-contain" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-secondary text-primary-foreground px-6 py-3 rounded-lg font-bold shadow-lg text-lg">
                  СЭЗ SARYARKA
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-secondary to-accent text-primary-foreground rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">1253.056</div>
              <p className="text-sm leading-relaxed">Общая площадь объекта под проекты</p>
            </div>

            <div className="bg-gradient-to-br from-secondary to-accent text-primary-foreground rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">459.4</div>
              <p className="text-sm leading-relaxed">Выделенная участникам площадь под проекты</p>
            </div>

            <div className="bg-gradient-to-br from-secondary to-accent text-primary-foreground rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">345</div>
              <p className="text-sm leading-relaxed">Площадь без проведённой инфраструктуры</p>
            </div>

            <div className="bg-gradient-to-br from-secondary to-accent text-primary-foreground rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">665.7</div>
              <p className="text-sm leading-relaxed">Полезная площадь под проекты</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
