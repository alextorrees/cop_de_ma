"use client"

import { useEffect } from "react"

export default function PoliticaPrivacidad() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back link */}
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver
            </a>
            <h1 className="text-2xl font-bold">Política de Privacidad</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Identificación del Responsable</h2>
            <p className="leading-relaxed">
              De conformidad con lo establecido en el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica
              3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, le
              informamos que:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Responsable:</strong> COP DE MÀ IBÈRICA S.L.
              </li>
              <li>
                <strong>NIF:</strong> B75571448
              </li>
              <li>
                <strong>Dirección:</strong> Calle Dom Bosco, 31, 08184 Palau-solità i Plegamans, Barcelona
              </li>
              <li>
                <strong>Email:</strong> copdemabcn@gmail.com
              </li>
              <li>
                <strong>Teléfono:</strong> 631615751
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">2. Finalidad del Tratamiento de Datos</h2>
            <p className="leading-relaxed">
              Los datos personales que nos facilite a través del formulario de contacto o por otros medios serán
              tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Gestionar las consultas y solicitudes de información sobre nuestros servicios.</li>
              <li>Proporcionar presupuestos y realizar el seguimiento de los servicios contratados.</li>
              <li>Gestionar la relación comercial y la prestación de servicios de fontanería y desatascos.</li>
              <li>
                Enviar comunicaciones comerciales sobre nuestros servicios, si nos ha dado su consentimiento para ello.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">3. Legitimación</h2>
            <p className="leading-relaxed">
              La base legal para el tratamiento de sus datos es el consentimiento del interesado al facilitarnos sus
              datos para contactar con nosotros, así como la ejecución de un contrato en el que el interesado es parte o
              para la aplicación a petición de este de medidas precontractuales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Conservación de Datos</h2>
            <p className="leading-relaxed">
              Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante
              los años necesarios para cumplir con las obligaciones legales. Los datos proporcionados se conservarán
              mientras no solicite su supresión.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Destinatarios de los Datos</h2>
            <p className="leading-relaxed">
              Sus datos no serán cedidos a terceros, salvo obligación legal. No se realizarán transferencias
              internacionales de datos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Derechos del Interesado</h2>
            <p className="leading-relaxed">
              Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que le
              conciernen. Las personas interesadas tienen derecho a:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la rectificación de los datos inexactos</li>
              <li>Solicitar su supresión cuando los datos ya no sean necesarios</li>
              <li>Solicitar la limitación de su tratamiento en determinadas circunstancias</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Para ejercer estos derechos, puede contactarnos en copdemabcn@gmail.com o en la dirección postal indicada.
              También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos
              (www.aepd.es).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Seguridad de los Datos</h2>
            <p className="leading-relaxed">
              COP DE MÀ IBÈRICA S.L. se compromete a adoptar las medidas técnicas y organizativas necesarias para
              garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o
              acceso no autorizado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">8. Veracidad de los Datos</h2>
            <p className="leading-relaxed">
              El usuario garantiza que los datos personales facilitados son veraces y se hace responsable de comunicar
              cualquier modificación en los mismos. El usuario responderá de la veracidad de sus datos y será el único
              responsable de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionarse como consecuencia
              del incumplimiento de tal obligación.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
