"use client"

import { useEffect } from "react"

export default function AvisoLegal() {
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
            <h1 className="text-2xl font-bold">Aviso Legal</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Datos Identificativos</h2>
            <p className="leading-relaxed">
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio,
              de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de este
              sitio web le informa de lo siguiente:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Denominación social:</strong> COP DE MÀ IBÈRICA S.L.
              </li>
              <li>
                <strong>NIF:</strong> B75571448
              </li>
              <li>
                <strong>Domicilio social:</strong> Calle Dom Bosco, 31, 08184 Palau-solità i Plegamans, Barcelona
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
            <h2 className="text-2xl font-bold text-primary mb-4">2. Objeto</h2>
            <p className="leading-relaxed">
              El presente sitio web tiene por objeto proporcionar información sobre los servicios de fontanería,
              desatascos y reparación de tuberías sin obras que ofrece COP DE MÀ IBÈRICA S.L. en Barcelona y la zona del
              Vallès, así como facilitar el contacto con clientes potenciales y actuales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">3. Condiciones de Uso</h2>
            <p className="leading-relaxed">
              El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El usuario se
              compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos y a no emplearlos para:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Realizar actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>
                Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del
                terrorismo o atentatoria contra los derechos humanos.
              </li>
              <li>Provocar daños en los sistemas físicos y lógicos del sitio web, de sus proveedores o de terceros.</li>
              <li>Introducir o difundir virus informáticos o cualquier otro sistema que pueda causar daños.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Propiedad Intelectual e Industrial</h2>
            <p className="leading-relaxed">
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos,
              tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad
              pertenece a COP DE MÀ IBÈRICA S.L., sin que puedan entenderse cedidos al usuario ninguno de los derechos
              de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.
            </p>
            <p className="leading-relaxed mt-4">
              Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra
              actividad que se pueda realizar con los contenidos del sitio web sin el consentimiento previo y expreso de
              COP DE MÀ IBÈRICA S.L.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Exclusión de Responsabilidad</h2>
            <p className="leading-relaxed">
              COP DE MÀ IBÈRICA S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier
              naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de
              disponibilidad del sitio web o la transmisión de virus o programas maliciosos o lesivos en los contenidos,
              a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Enlaces</h2>
            <p className="leading-relaxed">
              En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet,
              COP DE MÀ IBÈRICA S.L. no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso
              asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Modificaciones</h2>
            <p className="leading-relaxed">
              COP DE MÀ IBÈRICA S.L. se reserva el derecho de efectuar sin previo aviso las modificaciones que considere
              oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se
              presten a través de la misma como la forma en la que estos aparezcan presentados o localizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">8. Legislación Aplicable y Jurisdicción</h2>
            <p className="leading-relaxed">
              La relación entre COP DE MÀ IBÈRICA S.L. y el usuario se regirá por la normativa española vigente. Para la
              resolución de cualquier controversia las partes se someterán a los Juzgados y Tribunales del domicilio del
              usuario.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">9. Contacto</h2>
            <p className="leading-relaxed">
              Para cualquier consulta o aclaración sobre este aviso legal, puede ponerse en contacto con nosotros a
              través de:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Email: copdemabcn@gmail.com</li>
              <li>Teléfono: 631615751</li>
              <li>Dirección: Calle Dom Bosco, 31, 08184 Palau-solità i Plegamans, Barcelona</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
