"use client"

import type React from "react"
import { useState } from "react"
import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    const form = e.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setSubmitted(true)
    form.reset()

    try {
      await fetch("https://formsubmit.co/copdemabcn@gmail.com", {
        method: "POST",
        body: formData,
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    }

    setTimeout(() => {
      setSubmitted(false)
      setIsSubmitting(false)
    }, 5000)
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-secondary/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t("contact.phone")}</h3>
                    <a href="tel:+34631615751" className="text-secondary hover:underline text-lg">
                      631 615 751
                    </a>
                    <p className="text-muted-foreground mt-1">{t("contact.available")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t("contact.whatsapp")}</h3>
                    <a
                      href="https://wa.me/34631615751"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-lg"
                    >
                      {t("contact.whatsapp")}
                    </a>
                    <p className="text-muted-foreground mt-1">{t("contact.quickResponse")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t("contact.address")}</h3>
                    <p className="text-foreground">Calle Dom Bosco, 31</p>
                    <p className="text-foreground">08184 Palau-solità i Plegamans</p>
                    <p className="text-foreground mb-2">Barcelona</p>
                    <a
                      href="https://maps.google.com/?q=Calle+Dom+Bosco+31+Palau-solità+i+Plegamans+Barcelona"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      {t("contact.viewMap")}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t("contact.schedule")}</h3>
                    <p className="text-foreground font-medium">{t("contact.service24")}</p>
                    <p className="text-foreground">{t("contact.days365")}</p>
                    <p className="text-muted-foreground mt-1">{t("contact.emergencies")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">{t("contact.sendMessage")}</h3>
              {submitted ? (
                <div className="bg-accent/10 border border-accent p-6 rounded-lg text-center">
                  <p className="font-medium text-lg text-black">{t("contact.success")}</p>
                  <p className="mt-2 text-black">{t("contact.successMsg")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_subject" value="Nuevo mensaje desde Cop de mà web" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{ display: "none" }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t("contact.name")} *
                      </label>
                      <Input id="name" name="name" required placeholder={t("contact.yourName")} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {t("contact.phone")} *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        pattern="^(\+34|0034|34)?[6789]\d{8}$"
                        title="Por favor, introduce un teléfono válido español (ej: 612345678 o +34612345678)"
                        placeholder="612 345 678"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("contact.email")} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Por favor, introduce un email válido"
                      placeholder={t("contact.yourEmail")}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t("contact.message")} *
                    </label>
                    <Textarea id="message" name="message" required placeholder={t("contact.tellUs")} rows={4} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {t("contact.sendMsg")}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
