"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-foreground">
                  <path
                    d="M12 2C10.9 2 10 2.9 10 4V6H8C6.9 6 6 6.9 6 8V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V8C18 6.9 17.1 6 16 6H14V4C14 2.9 13.1 2 12 2ZM12 4C12.6 4 13 4.4 13 5C13 5.6 12.6 6 12 6C11.4 6 11 5.6 11 5C11 4.4 11.4 4 12 4ZM8 8H16V20H8V8ZM10 10V12H14V10H10ZM10 14V16H14V14H10Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">COP DE MÀ</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="#quienes-somos"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#zonas"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t("nav.zones")}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-legal"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} COP DE MÀ IBÈRICA S.L. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
