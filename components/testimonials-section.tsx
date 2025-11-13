"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

interface Review {
  author: string
  rating: number
  text: string
  time: string
  profilePhoto: string
}

const FIXED_REVIEWS: Review[] = [
  {
    author: "Carolina Capellades",
    rating: 5,
    text: "Excelente profesional! Lo llamé para una avería en el wc y me contestó muy rápido y al día siguiente todo arreglado! Rápido, eficiente, eficaz amable y muy profesional! Recomendado al 100% Sebastián muchas gracias por tu trabajo y ayuda en todos los consejos que nos has dado!",
    time: "hace 2 meses",
    profilePhoto: "/images/valoracion1.png",
  },
  {
    author: "Pablo López Vidal",
    rating: 5,
    text: "Contacté con ellos por una rotura en el canalón fluvial que afectaba de manera directa a mi propiedad y la solución y el presupuesto que me dieron se ajustaba a la perfección a lo que buscaba desde un principio. Rápidos, serios y trabajo hecho estupendamente. Muy agradecido con Sebastián. Enormes profesionales.",
    time: "hace 2 semanas",
    profilePhoto: "/images/valoracion2.png",
  },
  {
    author: "Javier Gálvez",
    rating: 5,
    text: "Experiencia fantástica con Sebas. Nos ha sacado de dudas con la instalación de los desagües de casa y nos ha encontrado varios problemas a acotar. Ha valido mucho la pena, os recomendaremos cuando alguien nos pida referencias. Sin duda algúna. Gracias",
    time: "hace 2 meses",
    profilePhoto: "/images/valoracion3.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reviews = FIXED_REVIEWS
  const { t } = useLanguage()

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="resenas" className="py-20 bg-gradient-to-b from-secondary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("testimonials.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">{t("testimonials.verified")}</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-card border-2 border-secondary/20 rounded-lg p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={reviews[currentIndex].profilePhoto || "/placeholder.svg"}
                  alt={reviews[currentIndex].author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground">{reviews[currentIndex].author}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < reviews[currentIndex].rating ? "fill-accent text-accent" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{reviews[currentIndex].time}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{reviews[currentIndex].text}</p>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                onClick={prevReview}
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent cursor-pointer"
                disabled={reviews.length <= 1}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {reviews.length}
              </span>
              <Button
                onClick={nextReview}
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent cursor-pointer"
                disabled={reviews.length <= 1}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    index === currentIndex ? "bg-secondary w-8" : "bg-secondary/30"
                  }`}
                  aria-label={`Ver reseña ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Link to all Google reviews */}
          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/search?q=COP+DE+M%C3%80+IB%C3%88RICA+S.L&num=10&sca_esv=ac5190d3317fe602&rlz=1C1GCEA_enES1139ES1139&tbm=lcl&ei=uDMPacbTKp3Lp84Pn4uc4Q0&ved=0ahUKEwjGj9S3w-KQAxWd5ckDHZ8FJ9wQ4dUDCAo&uact=5&oq=COP+DE+M%C3%80+IB%C3%88RICA+S.L&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhdDT1AgREUgTcOAIElCw4hSSUNBIFMuTEi71sGumbKAgAhaNBAAEAEQAhADEAQYABgBGAIYAxgEIhZjb3AgZGUgbcOgIGliw6hyaWNhIHNsKgYIAhAAEAGSAQdwbHVtYmVyqgFPCg0vZy8xMWw2YnkwdnR3EAEyIBABIhzf29rDniGk4bk57O0_ClTAqROFBLM9uHSL3XYfMhoQAiIWY29wIGRlIG3DoCBpYsOocmljYSBzbA;mv:[[41.588302477319026,2.1766634320720737],[41.58794252268096,2.176182167927926]]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:underline text-lg font-medium"
            >
              <Star className="w-5 h-5 fill-accent text-accent" />
              {t("testimonials.viewAll")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
