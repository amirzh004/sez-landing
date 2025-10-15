"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [language, setLanguage] = useState("RU")

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/images/logo-saryarka.png" alt="Saryarka Logo" className="w-12 h-12" />
            <span className="font-bold text-lg text-primary">SARYARKA</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </a>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Проекты
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProjectsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-border py-2 z-10">
                  <a href="#all-projects" className="block px-4 py-2 text-foreground hover:bg-muted transition-colors">
                    Все проекты
                  </a>
                  <a href="#sez" className="block px-4 py-2 text-foreground hover:bg-muted transition-colors">
                    СЭЗ "SARYARKA"
                  </a>
                  <a href="#iz" className="block px-4 py-2 text-foreground hover:bg-muted transition-colors">
                    ИЗ "SARAN"
                  </a>
                </div>
              )}
            </div>

            <a href="#investors" className="text-foreground hover:text-primary transition-colors">
              Инвесторам
            </a>
            <a href="#news" className="text-foreground hover:text-primary transition-colors">
              Новости
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("RU")}
              className={`px-3 py-1 rounded ${
                language === "RU" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLanguage("KZ")}
              className={`px-3 py-1 rounded ${
                language === "KZ" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              KZ
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
