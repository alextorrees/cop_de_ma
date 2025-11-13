"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

const faqs = [
  {
    question: "¿Qué hago si se me atasca la tubería?",
    answer:
      "Lo primero es no intentar solucionarlo con productos químicos agresivos que pueden dañar las tuberías. Llámanos al 631 615 751 y nuestro equipo acudirá lo antes posible para evaluar y solucionar el problema de forma profesional.",
  },
  {
    question: "¿Qué es el resinado?",
    answer:
      "El resinado es una técnica innovadora que permite reparar tuberías desde el interior sin necesidad de obras. Insertamos un revestimiento de resina que se adhiere a las paredes de la tubería, creando una nueva capa resistente y duradera. Es la solución perfecta para evitar romper paredes o suelos.",
  },
  {
    question: "¿Cuánto tarda la reparación?",
    answer:
      "Depende del tipo de problema. Los desatascos simples suelen resolverse en 1-2 horas. Las reparaciones con resinado pueden tardar entre 4-8 horas. En cualquier caso, te daremos un tiempo estimado después de la inspección inicial.",
  },
  {
    question: "¿Qué zonas cubrís?",
    answer:
      "Cubrimos principalmente las zonas de Barcelona y Vallès, pero cualquier otro destino puede ser valorado si nos contactas.",
  },
]

export function FAQSection() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("faq.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("faq.subtitle")}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full [&_button]:cursor-pointer">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
