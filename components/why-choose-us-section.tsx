"use client"

import { Award, Clock, CheckCircle, DollarSign } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhyChooseUsSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Award,
      title: t("why.experience"),
      description: t("why.experience.desc"),
    },
    {
      icon: Clock,
      title: t("why.service"),
      description: t("why.service.desc"),
    },
    {
      icon: CheckCircle,
      title: t("why.warranty"),
      description: t("why.warranty.desc"),
    },
    {
      icon: DollarSign,
      title: t("why.prices"),
      description: t("why.prices.desc"),
    },
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("why.title")}</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">{t("why.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
