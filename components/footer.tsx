import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Инвесторам */}
          <div>
            <h3 className="text-xl font-bold mb-4">Инвесторам</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#priority-activities"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Приоритетные виды деятельности
                </a>
              </li>
              <li>
                <a
                  href="#become-participant"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Как стать участником
                </a>
              </li>
              <li>
                <a
                  href="#preferences"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Преференции
                </a>
              </li>
              <li>
                <a
                  href="#regulatory-base"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Нормативная База
                </a>
              </li>
              <li>
                <a
                  href="#investor-support"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Порядок сопровождения инвесторов
                </a>
              </li>
              <li>
                <a
                  href="#utility-tariffs"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Коммунальные Тарифы
                </a>
              </li>
              <li>
                <a href="#ppp" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Государственно частное партнерство
                </a>
              </li>
              <li>
                <a
                  href="#compliance"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Антикоррупционная комплаенс-служба
                </a>
              </li>
            </ul>
          </div>

          {/* Новости */}
          <div>
            <h3 className="text-xl font-bold mb-4">Новости</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#organization-news"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Новости организации
                </a>
              </li>
              <li>
                <a
                  href="#reports"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Отчеты
                </a>
              </li>
              <li>
                <a
                  href="#procurement"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Государственные закупки
                </a>
              </li>
            </ul>
          </div>

          {/* Проекты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Проекты</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#all-projects"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Все проекты
                </a>
              </li>
              <li>
                <a
                  href="#completed-projects"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Реализованные проекты
                </a>
              </li>
              <li>
                <a
                  href="#development-projects"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Проекты на стадии разработки
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@sez-saryarka.kz"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all"
                >
                  info@sez-saryarka.kz
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+77212405920"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +7 7212 40 59 20
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:razvitie@sez-saryarka.kz"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all"
                >
                  razvitie@sez-saryarka.kz
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+77212405986"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +7 7212 40 59 86
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Управляющая компания СЭЗ "Сарыарка". Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
