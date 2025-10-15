"use client"

import { useState } from "react"

const newsItems = [
  {
    id: 1,
    image: "/images/news-1.jpg",
    title: 'Новый инвестиционный проект в СЭЗ "Сарыарка"',
  },
  {
    id: 2,
    image: "/images/news-2.jpg",
    title: "Открытие нового производственного комплекса",
  },
  {
    id: 3,
    image: "/images/news-3.jpg",
    title: "Подписание соглашения с международными партнерами",
  },
  {
    id: 4,
    image: "/images/news-4.jpg",
    title: "Расширение инфраструктуры индустриальной зоны",
  },
  {
    id: 5,
    image: "/images/news-5.jpg",
    title: "Внедрение цифровых технологий в производство",
  },
  {
    id: 6,
    image: "/images/news-6.jpg",
    title: "Программа обучения специалистов для резидентов",
  },
]

export default function NewsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">Новости</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Title - slides up from bottom on hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 bg-primary/95 text-primary-foreground transition-transform duration-300 ${
                  hoveredId === item.id ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
