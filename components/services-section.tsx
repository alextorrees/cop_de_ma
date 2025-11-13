"use client"

import { Wrench, Camera, Droplet, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Wrench,
      title: t("services.unblocking"),
      description: t("services.unblocking.desc"),
    },
    {
      icon: Camera,
      title: t("services.camera"),
      description: t("services.camera.desc"),
    },
    {
      icon: Droplet,
      title: t("services.resin"),
      description: t("services.resin.desc"),
    },
    {
      icon: Shield,
      title: t("services.maintenance"),
      description: t("services.maintenance.desc"),
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <a href="#contacto">{t("services.cta")}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
