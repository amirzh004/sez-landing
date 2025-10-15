"use client"

import { useState } from "react"

export default function PartnersMarquee() {
    const [isPaused, setIsPaused] = useState(false)

    const partners = [
        { name: "KazMunayGas", logo: "/kazmunaygas-logo.jpg" },
        { name: "Samruk-Kazyna", logo: "/kazmunaygas-logo.jpg" },
        { name: "Air Astana", logo: "/kazmunaygas-logo.jpg" },
        { name: "Kazatomprom", logo: "/kazmunaygas-logo.jpg" },
        { name: "Halyk Bank", logo: "/kazmunaygas-logo.jpg" },
        { name: "Kaspi Bank", logo: "/kazmunaygas-logo.jpg" },
        { name: "ArcelorMittal Temirtau", logo: "/kazmunaygas-logo.jpg" },
        { name: "Kazakhtelecom", logo: "/kazmunaygas-logo.jpg" },
    ]

    // Дублируем партнёров для бесконечной прокрутки
    const duplicatedPartners = [...partners, ...partners]

    return (
        <section className="py-16 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Наши партнеры</h2>
            </div>

            <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="flex">
                    {/* ключевой фикс — класс не убирается */}
                    <div
                        className="flex gap-16 animate-marquee"
                        style={{
                            animationPlayState: isPaused ? "paused" : "running",
                        }}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-48 h-24 flex items-center justify-center group"
                            >
                                <img
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Градиенты по краям */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
            </div>
        </section>
    )
}
