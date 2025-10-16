"use client"

import { useState } from "react"
import { ChevronDown, Building2, Factory, Landmark } from "lucide-react"

export default function Navigation() {
    const [open, setOpen] = useState(false)
    const [lang, setLang] = useState<"RU" | "KZ">("RU")

    const leaveWithDelay = () => {
        setTimeout(() => {
            const btn = document.getElementById("projects-button")
            const panel = document.getElementById("projects-menu")
            if (!btn?.matches(":hover") && !panel?.matches(":hover")) setOpen(false)
        }, 100)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border">
            <div className="container mx-auto px-4">
                <div className="h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/images/logo-saryarka.png" alt="Saryarka Logo" className="w-12 h-12" />
                        <span className="font-bold text-lg text-primary tracking-tight">SARYARKA</span>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#home" className="text-foreground/90 hover:text-primary transition-colors">Главная</a>
                        <a href="#about" className="text-foreground/90 hover:text-primary transition-colors">О нас</a>

                        {/* DROPDOWN — вертикальный стиль */}
                        <div className="relative">
                            <button
                                id="projects-button"
                                onMouseEnter={() => setOpen(true)}
                                onMouseLeave={leaveWithDelay}
                                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all
                  ${open ? "bg-muted text-foreground" : "hover:bg-muted text-foreground/90"}
                `}
                            >
                                Проекты
                                <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
                            </button>

                            <div
                                id="projects-menu"
                                onMouseEnter={() => setOpen(true)}
                                onMouseLeave={leaveWithDelay}
                                className={`absolute left-0 top-full mt-3 w-72 overflow-hidden
                  rounded-2xl border border-border shadow-2xl z-30
                  bg-white/95 backdrop-blur-xl
                  transition-all duration-200 origin-top
                  ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
                `}
                            >
                                <div className="p-2">
                                    {[
                                        {
                                            href: "#all-projects",
                                            title: "Все проекты",
                                            desc: "Полный список и карта объектов",
                                            Icon: Building2,
                                        },
                                        {
                                            href: "#sez",
                                            title: "СЭЗ «SARYARKA»",
                                            desc: "Инвестиционные возможности и льготы",
                                            Icon: Landmark,
                                        },
                                        {
                                            href: "#iz",
                                            title: "ИЗ «SARAN»",
                                            desc: "Промышленная инфраструктура и площадки",
                                            Icon: Factory,
                                        },
                                    ].map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.href}
                                            className="group relative flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all"
                                        >
                                            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/15 transition">
                                                <item.Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <span className="font-medium text-foreground">{item.title}</span>
                                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                                            </div>
                                            <span className="pointer-events-none absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-primary/70 scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href="http://localhost:5173/" className="text-foreground/90 hover:text-primary transition-colors">Инвесторам</a>
                        <a href="#news" className="text-foreground/90 hover:text-primary transition-colors">Новости</a>
                        <a href="#contacts" className="text-foreground/90 hover:text-primary transition-colors">Контакты</a>
                    </div>

                    {/* Language Selector */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setLang("RU")}
                            className={`px-3 py-1 rounded-xl transition-colors
                ${lang === "RU" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"}
              `}
                        >
                            RU
                        </button>
                        <button
                            onClick={() => setLang("KZ")}
                            className={`px-3 py-1 rounded-xl transition-colors
                ${lang === "KZ" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"}
              `}
                        >
                            KZ
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
