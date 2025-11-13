"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "ca" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Quiénes somos",
    "nav.zones": "Zonas de servicio",
    "nav.reviews": "Reseñas",
    "nav.faq": "Preguntas frecuentes",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Desatascos y reparación de tuberías sin obras",
    "hero.subtitle": "Servicio urgente 24 horas en Barcelona y Vallés",
    "hero.callNow": "Llámanos ahora",
    "hero.whatsapp": "Contáctanos por WhatsApp",

    // Services
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones profesionales para todos tus problemas de fontanería",
    "services.unblocking": "Desatascos de tuberías",
    "services.unblocking.desc":
      "Solución rápida y eficaz para todo tipo de atascos en tuberías de desagüe, cocina, baño y más.",
    "services.camera": "Inspección con cámara",
    "services.camera.desc":
      "Tecnología de última generación para detectar problemas en tuberías sin necesidad de obras.",
    "services.resin": "Resinado sin obras",
    "services.resin.desc":
      "Reparación de tuberías desde el interior sin romper paredes ni suelos. Solución definitiva.",
    "services.maintenance": "Mantenimiento preventivo",
    "services.maintenance.desc": "Evita problemas futuros con nuestro servicio de mantenimiento y limpieza periódica.",
    "services.cta": "Solicitar servicio",

    // Why Choose Us
    "why.title": "¿Por qué elegirnos?",
    "why.subtitle": "Tu tranquilidad es nuestra prioridad",
    "why.experience": "15 años de experiencia",
    "why.experience.desc": "Profesionales cualificados con amplia trayectoria",
    "why.service": "Servicio 24/7",
    "why.service.desc": "Disponibles todos los días del año",
    "why.warranty": "1 mes de garantía",
    "why.warranty.desc": "Garantía en todos nuestros trabajos",
    "why.prices": "Precios competitivos",
    "why.prices.desc": "Honestidad y transparencia en cada presupuesto",

    // About
    "about.title": "Quiénes somos",
    "about.p1":
      "COP DE MÀ IBÈRICA S.L. es una empresa familiar con sede en Palau-solità i Plegamans, Barcelona, especializada en desatascos y reparación de tuberías.",
    "about.p2":
      "Con <strong>15 años de experiencia</strong> en el sector, nos hemos consolidado como referentes en Barcelona y el Vallés gracias a nuestro compromiso con la calidad y la satisfacción del cliente.",
    "about.p3":
      "Utilizamos <strong>maquinaria moderna</strong> y técnicas innovadoras como el resinado sin obras, que nos permite reparar tuberías desde el interior sin necesidad de romper paredes o suelos.",
    "about.p4":
      "Trabajamos <strong>sin intermediarios</strong>, lo que nos permite ofrecer un servicio directo, personalizado y con precios competitivos. Tu problema es nuestro problema, y no descansamos hasta solucionarlo.",

    // Zones
    "zones.title": "Zonas de servicio",
    "zones.subtitle": "Cubrimos Barcelona y toda la zona del Vallés",
    "zones.heading": "Trabajamos en estas localidades",
    "zones.coverage": "Cobertura completa en Barcelona y el Vallès",
    "zones.notFound": "¿No encuentras tu localidad?",
    "zones.contact": "Contáctanos",
    "zones.inform": "y te informaremos",

    // Testimonials
    "testimonials.title": "Lo que dicen nuestros clientes",
    "testimonials.subtitle": "La satisfacción de nuestros clientes es nuestra mejor carta de presentación",
    "testimonials.verified": "Reseñas verificadas de Google",
    "testimonials.viewAll": "Ver todas las reseñas en Google",

    // FAQ
    "faq.title": "Preguntas frecuentes",
    "faq.subtitle": "Resolvemos tus dudas más comunes",
    "faq.q1": "¿Qué hago si se me atasca la tubería?",
    "faq.a1":
      "Lo primero es no intentar solucionarlo con productos químicos agresivos que pueden dañar las tuberías. Llámanos al 631 615 751 y nuestro equipo acudirá lo antes posible para evaluar y solucionar el problema de forma profesional.",
    "faq.q2": "¿Qué es el resinado?",
    "faq.a2":
      "El resinado es una técnica innovadora que permite reparar tuberías desde el interior sin necesidad de obras. Insertamos un revestimiento de resina que se adhiere a las paredes de la tubería, creando una nueva capa resistente y duradera. Es la solución perfecta para evitar romper paredes o suelos.",
    "faq.q3": "¿Cuánto tarda la reparación?",
    "faq.a3":
      "Depende del tipo de problema. Los desatascos simples suelen resolverse en 1-2 horas. Las reparaciones con resinado pueden tardar entre 4-8 horas. En cualquier caso, te daremos un tiempo estimado después de la inspección inicial.",
    "faq.q4": "¿Qué zonas cubrís?",
    "faq.a4":
      "Cubrimos principalmente las zonas de Barcelona y Vallès, pero cualquier otro destino puede ser valorado si nos contactas.",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "Estamos aquí para ayudarte. Contáctanos por el medio que prefieras",
    "contact.phone": "Teléfono",
    "contact.available": "Disponible 24/7",
    "contact.whatsapp": "WhatsApp",
    "contact.quickResponse": "Respuesta rápida",
    "contact.address": "Dirección",
    "contact.viewMap": "Ver en Google Maps",
    "contact.schedule": "Horario",
    "contact.service24": "Servicio 24 horas",
    "contact.days365": "365 días al año",
    "contact.emergencies": "Emergencias atendidas inmediatamente",
    "contact.sendMessage": "Envíanos un mensaje",
    "contact.success": "¡Mensaje enviado con éxito!",
    "contact.successMsg": "Nos pondremos en contacto contigo lo antes posible.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.tellUs": "Cuéntanos qué necesitas...",
    "contact.yourName": "Tu nombre",
    "contact.yourEmail": "tu@email.com",
    "contact.sendMsg": "Enviar mensaje",

    // Footer
    "footer.description":
      "Empresa familiar especializada en desatascos y reparación de tuberías sin obras. 15 años de experiencia en Barcelona y Vallés.",
    "footer.navigation": "Navegación",
    "footer.legal": "Legal",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Aviso legal",
    "footer.rights": "Todos los derechos reservados.",
  },
  ca: {
    // Navigation
    "nav.home": "Inici",
    "nav.services": "Serveis",
    "nav.about": "Qui som",
    "nav.zones": "Zones de servei",
    "nav.reviews": "Ressenyes",
    "nav.faq": "Preguntes freqüents",
    "nav.contact": "Contacte",

    // Hero
    "hero.title": "Desembussos i reparació de canonades sense obres",
    "hero.subtitle": "Servei urgent 24 hores a Barcelona i Vallès",
    "hero.callNow": "Truca'ns ara",
    "hero.whatsapp": "Contacta'ns per WhatsApp",

    // Services
    "services.title": "Els nostres Serveis",
    "services.subtitle": "Solucions professionals per a tots els teus problemes de fontaneria",
    "services.unblocking": "Desembussos de canonades",
    "services.unblocking.desc":
      "Solució ràpida i eficaç per a tot tipus d'embussos en canonades de desguàs, cuina, bany i més.",
    "services.camera": "Inspecció amb càmera",
    "services.camera.desc":
      "Tecnologia d'última generació per detectar problemes en canonades sense necessitat d'obres.",
    "services.resin": "Resinat sense obres",
    "services.resin.desc":
      "Reparació de canonades des de l'interior sense trencar parets ni terres. Solució definitiva.",
    "services.maintenance": "Manteniment preventiu",
    "services.maintenance.desc": "Evita problemes futurs amb el nostre servei de manteniment i neteja periòdica.",
    "services.cta": "Sol·licitar servei",

    // Why Choose Us
    "why.title": "Per què triar-nos?",
    "why.subtitle": "La teva tranquil·litat és la nostra prioritat",
    "why.experience": "15 anys d'experiència",
    "why.experience.desc": "Professionals qualificats amb àmplia trajectòria",
    "why.service": "Servei 24/7",
    "why.service.desc": "Disponibles tots els dies de l'any",
    "why.warranty": "1 mes de garantia",
    "why.warranty.desc": "Garantia en tots els nostres treballs",
    "why.prices": "Preus competitius",
    "why.prices.desc": "Honestedat i transparència en cada pressupost",

    // About
    "about.title": "Qui som",
    "about.p1":
      "COP DE MÀ IBÈRICA S.L. és una empresa familiar amb seu a Palau-solità i Plegamans, Barcelona, especialitzada en desembussos i reparació de canonades.",
    "about.p2":
      "Amb <strong>15 anys d'experiència</strong> en el sector, ens hem consolidat com a referents a Barcelona i el Vallès gràcies al nostre compromís amb la qualitat i la satisfacció del client.",
    "about.p3":
      "Utilitzem <strong>maquinària moderna</strong> i tècniques innovadores com el resinat sense obres, que ens permet reparar canonades des de l'interior sense necessitat de trencar parets o terres.",
    "about.p4":
      "Treballem <strong>sense intermediaris</strong>, cosa que ens permet oferir un servei directe, personalitzat i amb preus competitius. El teu problema és el nostre problema, i no descancem fins a solucionar-lo.",

    // Zones
    "zones.title": "Zones de servei",
    "zones.subtitle": "Cobrim Barcelona i tota la zona del Vallès",
    "zones.heading": "Treballem en aquestes localitats",
    "zones.coverage": "Cobertura completa a Barcelona i el Vallès",
    "zones.notFound": "No trobes la teva localitat?",
    "zones.contact": "Contacta'ns",
    "zones.inform": "i t'informarem",

    // Testimonials
    "testimonials.title": "El que diuen els nostres clients",
    "testimonials.subtitle": "La satisfacció dels nostres clients és la nostra millor carta de presentació",
    "testimonials.verified": "Ressenyes verificades de Google",
    "testimonials.viewAll": "Veure totes les ressenyes a Google",

    // FAQ
    "faq.title": "Preguntes freqüents",
    "faq.subtitle": "Resolem els teus dubtes més comuns",
    "faq.q1": "Què faig si se m'embossa la canonada?",
    "faq.a1":
      "El primer és no intentar solucionar-ho amb productes químics agressius que poden danyar les canonades. Truca'ns al 631 615 751 i el nostre equip acudirà el més aviat possible per avaluar i solucionar el problema de forma professional.",
    "faq.q2": "Què és el resinat?",
    "faq.a2":
      "El resinat és una tècnica innovadora que permet reparar canonades des de l'interior sense necessitat d'obres. Inserim un revestiment de resina que s'adhereix a les parets de la canonada, creant una nova capa resistent i duradora. És la solució perfecta per evitar trencar parets o terres.",
    "faq.q3": "Quant tarda la reparació?",
    "faq.a3":
      "Depèn del tipus de problema. Els desembussos simples solen resoldre's en 1-2 hores. Les reparacions amb resinat poden trigar entre 4-8 hores. En qualsevol cas, et donarem un temps estimat després de la inspecció inicial.",
    "faq.q4": "Quines zones cobriu?",
    "faq.a4":
      "Cobrim principalment les zones de Barcelona i Vallès, però qualsevol altra destinació pot ser valorada si ens contactes.",

    // Contact
    "contact.title": "Contacte",
    "contact.subtitle": "Som aquí per ajudar-te. Contacta'ns pel mitjà que prefereixes",
    "contact.phone": "Telèfon",
    "contact.available": "Disponible 24/7",
    "contact.whatsapp": "WhatsApp",
    "contact.quickResponse": "Resposta ràpida",
    "contact.address": "Adreça",
    "contact.viewMap": "Veure a Google Maps",
    "contact.schedule": "Horari",
    "contact.service24": "Servei 24 hores",
    "contact.days365": "365 dies a l'any",
    "contact.emergencies": "Emergències ateses immediatament",
    "contact.sendMessage": "Envia'ns un missatge",
    "contact.success": "Missatge enviat amb èxit!",
    "contact.successMsg": "Ens posarem en contacte amb tu el més aviat possible.",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Missatge",
    "contact.send": "Enviar missatge",
    "contact.tellUs": "Explica'ns què necessites...",
    "contact.yourName": "El teu nom",
    "contact.yourEmail": "el_teu@email.com",
    "contact.sendMsg": "Enviar missatge",

    // Footer
    "footer.description":
      "Empresa familiar especialitzada en desembussos i reparació de canonades sense obres. 15 anys d'experiència a Barcelona i Vallès.",
    "footer.navigation": "Navegació",
    "footer.legal": "Legal",
    "footer.privacy": "Política de privacitat",
    "footer.terms": "Avís legal",
    "footer.rights": "Tots els drets reservats.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About us",
    "nav.zones": "Service areas",
    "nav.reviews": "Reviews",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Drain unblocking and pipe repair without construction work",
    "hero.subtitle": "24-hour urgent service in Barcelona and Vallès",
    "hero.callNow": "Call us now",
    "hero.whatsapp": "Contact us via WhatsApp",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Professional solutions for all your plumbing problems",
    "services.unblocking": "Pipe unblocking",
    "services.unblocking.desc":
      "Quick and effective solution for all types of blockages in drain, kitchen, bathroom pipes and more.",
    "services.camera": "Camera inspection",
    "services.camera.desc":
      "State-of-the-art technology to detect pipe problems without the need for construction work.",
    "services.resin": "No-dig pipe relining",
    "services.resin.desc": "Pipe repair from the inside without breaking walls or floors. Definitive solution.",
    "services.maintenance": "Preventive maintenance",
    "services.maintenance.desc": "Avoid future problems with our regular maintenance and cleaning service.",
    "services.cta": "Request service",

    // Why Choose Us
    "why.title": "Why choose us?",
    "why.subtitle": "Your peace of mind is our priority",
    "why.experience": "15 years of experience",
    "why.experience.desc": "Qualified professionals with extensive background",
    "why.service": "24/7 service",
    "why.service.desc": "Available every day of the year",
    "why.warranty": "1 month warranty",
    "why.warranty.desc": "Warranty on all our work",
    "why.prices": "Competitive prices",
    "why.prices.desc": "Honesty and transparency in every quote",

    // About
    "about.title": "About us",
    "about.p1":
      "COP DE MÀ IBÈRICA S.L. is a family business based in Palau-solità i Plegamans, Barcelona, specializing in drain unblocking and pipe repair.",
    "about.p2":
      "With <strong>15 years of experience</strong> in the sector, we have established ourselves as a reference in Barcelona and Vallès thanks to our commitment to quality and customer satisfaction.",
    "about.p3":
      "We use <strong>modern machinery</strong> and innovative techniques such as no-dig pipe relining, which allows us to repair pipes from the inside without the need to break walls or floors.",
    "about.p4":
      "We work <strong>without intermediaries</strong>, which allows us to offer a direct, personalized service with competitive prices. Your problem is our problem, and we don't rest until we solve it.",

    // Zones
    "zones.title": "Service areas",
    "zones.subtitle": "We cover Barcelona and the entire Vallès area",
    "zones.heading": "We work in these locations",
    "zones.coverage": "Full coverage in Barcelona and Vallès",
    "zones.notFound": "Can't find your location?",
    "zones.contact": "Contact us",
    "zones.inform": "and we'll inform you",

    // Testimonials
    "testimonials.title": "What our customers say",
    "testimonials.subtitle": "Our customers' satisfaction is our best introduction",
    "testimonials.verified": "Verified Google reviews",
    "testimonials.viewAll": "View all reviews on Google",

    // FAQ
    "faq.title": "Frequently asked questions",
    "faq.subtitle": "We answer your most common questions",
    "faq.q1": "What do I do if my pipe gets blocked?",
    "faq.a1":
      "The first thing is not to try to solve it with aggressive chemical products that can damage the pipes. Call us at 631 615 751 and our team will come as soon as possible to assess and solve the problem professionally.",
    "faq.q2": "What is pipe relining?",
    "faq.a2":
      "Pipe relining is an innovative technique that allows pipes to be repaired from the inside without the need for construction work. We insert a resin lining that adheres to the pipe walls, creating a new resistant and durable layer. It's the perfect solution to avoid breaking walls or floors.",
    "faq.q3": "How long does the repair take?",
    "faq.a3":
      "It depends on the type of problem. Simple unblocking usually takes 1-2 hours. Repairs with pipe relining can take between 4-8 hours. In any case, we'll give you an estimated time after the initial inspection.",
    "faq.q4": "What areas do you cover?",
    "faq.a4":
      "We mainly cover the Barcelona and Vallès areas, but any other destination can be considered if you contact us.",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "We're here to help you. Contact us by your preferred method",
    "contact.phone": "Phone",
    "contact.available": "Available 24/7",
    "contact.whatsapp": "WhatsApp",
    "contact.quickResponse": "Quick response",
    "contact.address": "Address",
    "contact.viewMap": "View on Google Maps",
    "contact.schedule": "Schedule",
    "contact.service24": "24-hour service",
    "contact.days365": "365 days a year",
    "contact.emergencies": "Emergencies attended immediately",
    "contact.sendMessage": "Send us a message",
    "contact.success": "Message sent successfully!",
    "contact.successMsg": "We'll contact you as soon as possible.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.tellUs": "Tell us what you need...",
    "contact.yourName": "Your name",
    "contact.yourEmail": "your@email.com",
    "contact.sendMsg": "Send message",

    // Footer
    "footer.description":
      "Family business specialized in drain unblocking and pipe repair without construction work. 15 years of experience in Barcelona and Vallès.",
    "footer.navigation": "Navigation",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy policy",
    "footer.terms": "Legal notice",
    "footer.rights": "All rights reserved.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && ["es", "ca", "en"].includes(savedLang)) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
