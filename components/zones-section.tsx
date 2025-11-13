"use client"

import { useLanguage } from "@/lib/language-context"

export function ZonesSection() {
  const cities = [
    "Barcelona",
    "Palau-solità i Plegamans",
    "Sabadell",
    "Terrassa",
    "Cerdanyola del Vallès",
    "Barberà del Vallès",
    "Ripollet",
    "Montcada i Reixac",
    "Sant Cugat del Vallès",
    "Rubí",
    "Mollet del Vallès",
    "Granollers",
  ]

  const { t } = useLanguage()

  return (
    <section id="zonas" className="py-20 bg-gradient-to-b from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("zones.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("zones.subtitle")}</p>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95777.97796267896!2d2.0847!3d41.5547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a496a2ff12f7e9%3A0x6c7c1c1c1c1c1c1c!2sPalau-solit%C3%A0%20i%20Plegamans%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de zonas de servicio"
          />
        </div>

        {/* Cities Grid */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-2">{t("zones.heading")}</h3>
          <p className="text-muted-foreground">{t("zones.coverage")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-card p-4 rounded-lg text-center hover:shadow-md hover:border-secondary transition-all border-2 border-border"
            >
              <p className="font-medium text-card-foreground">{city}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          {t("zones.notFound")}{" "}
          <a href="#contacto" className="text-secondary hover:underline font-medium">
            {t("zones.contact")}
          </a>{" "}
          {t("zones.inform")}
        </p>
      </div>
    </section>
  )
}
