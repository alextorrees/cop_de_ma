"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(0)

  const images = [
    {
      src: "/images/imagen-carrusel-1.jpg",
      alt: "Técnico de COP DE MÀ con furgoneta",
    },
    {
      src: "/images/imagen-carrusel-2.jpg",
      alt: "Trabajo de fontanería bajo lavabo",
    },
    {
      src: "/images/imagen-carrusel-3.jpg",
      alt: "Furgoneta COP DE MÀ en ubicación histórica",
    },
    {
      src: "/images/imagen-carrusel-4.jpg",
      alt: "Inspección con cámara en baño",
    },
    {
      src: "/images/imagen-carrusel-5.jpg",
      alt: "Trabajo en alcantarilla",
    },
    {
      src: "/images/imagen-carrusel-6.jpg",
      alt: "Técnico trabajando en tejado",
    },
    {
      src: "/images/imagen-carrusel-7.jpg",
      alt: "Equipo de inspección profesional",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = (index: number) => {
    setLightboxImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextLightboxImage = () => {
    setLightboxImage((prev) => (prev + 1) % images.length)
  }

  const prevLightboxImage = () => {
    setLightboxImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const { t } = useLanguage()

  return (
    <section id="quienes-somos" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t("about.title")}</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-primary">COP DE MÀ IBÈRICA S.L.</strong>{" "}
                {t("about.p1").replace("COP DE MÀ IBÈRICA S.L. ", "")}
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("about.p2").replace(/<strong>/g, '<strong class="text-primary font-bold">'),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("about.p3").replace(/<strong>/g, '<strong class="text-primary font-bold">'),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("about.p4").replace(/<strong>/g, '<strong class="text-primary font-bold">'),
                }}
              />
            </div>
          </div>

          <div className="relative w-full aspect-[4/5] max-h-[600px] rounded-lg overflow-hidden shadow-xl group bg-gray-100">
            <Image
              src={images[currentImage].src || "/placeholder.svg"}
              alt={images[currentImage].alt}
              fill
              className="object-cover cursor-pointer transition-transform hover:scale-105"
              onClick={() => openLightbox(currentImage)}
            />

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    index === currentImage ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer z-10"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevLightboxImage()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full cursor-pointer"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightboxImage].src || "/placeholder.svg"}
              alt={images[lightboxImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextLightboxImage()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full cursor-pointer"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Lightbox indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxImage(index)
                }}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === lightboxImage ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
