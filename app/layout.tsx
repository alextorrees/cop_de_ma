import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://copdemabcn.com"),
  title: {
    default: "COP DE MÀ - Desatascos y Reparación de Tuberías sin Obras | Barcelona y Vallés",
    template: "%s | COP DE MÀ",
  },
  description:
    "Servicio urgente 24 horas de desatascos, resinado y reparación de tuberías sin obras en Barcelona y Vallés. 15 años de experiencia. ✓ Sin intermediarios ✓ Garantía 1 mes. Llámanos al 631 615 751.",
  keywords: [
    "desatascos",
    "reparación tuberías",
    "resinado sin obras",
    "fontanería Barcelona",
    "fontanería Vallés",
    "desatascos 24 horas",
    "tuberías sin obras",
    "COP DE MÀ",
    "fontanero urgente",
    "desatasco urgente Barcelona",
    "resinado tuberías",
    "Palau-solità i Plegamans",
  ],
  authors: [{ name: "COP DE MÀ IBÈRICA S.L." }],
  creator: "COP DE MÀ IBÈRICA S.L.",
  publisher: "COP DE MÀ IBÈRICA S.L.",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["ca_ES", "en_US"],
    url: "https://copdemabcn.com",
    siteName: "COP DE MÀ",
    title: "COP DE MÀ - Desatascos y Reparación de Tuberías sin Obras | Barcelona",
    description:
      "Servicio urgente 24h de desatascos y reparación de tuberías sin obras. 15 años de experiencia en Barcelona y Vallés. Sin intermediarios. Llámanos: 631 615 751",
    images: [
      {
        url: "/professional-plumbing-team-with-van-and-equipment.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo profesional COP DE MÀ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COP DE MÀ - Desatascos 24h Barcelona y Vallés",
    description: "Servicio urgente de desatascos y reparación sin obras. 15 años de experiencia. ☎️ 631 615 751",
    images: ["/professional-plumbing-team-with-van-and-equipment.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // TODO: Add actual verification code
  },
  alternates: {
    canonical: "https://copdemabcn.com",
    languages: {
      "es-ES": "https://copdemabcn.com",
      "ca-ES": "https://copdemabcn.com/ca",
      "en-US": "https://copdemabcn.com/en",
    },
  },
  category: "business",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#003366" },
    { media: "(prefers-color-scheme: dark)", color: "#003366" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://copdemabcn.com",
              name: "COP DE MÀ IBÈRICA S.L.",
              image: "https://copdemabcn.com/professional-plumbing-team-with-van-and-equipment.jpg",
              telephone: "+34631615751",
              email: "copdemabcn@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Dom Bosco, 31",
                addressLocality: "Palau-solità i Plegamans",
                addressRegion: "Barcelona",
                postalCode: "08184",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.588029,
                longitude: 2.176423,
              },
              url: "https://copdemabcn.com",
              priceRange: "€€",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "3",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Barcelona",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Vallès Occidental",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Vallès Oriental",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de fontanería",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Desatascos urgentes 24 horas",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Resinado de tuberías sin obras",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparación de tuberías",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Inspección con cámara",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
