"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

type Language = "es" | "ca" | "en"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#quienes-somos", label: t("nav.about") },
    { href: "#zonas", label: t("nav.zones") },
    { href: "#resenas", label: t("nav.reviews") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contacto", label: t("nav.contact") },
  ]

  const languages = [
    { code: "es" as Language, initials: "ES", name: "Español" },
    { code: "ca" as Language, initials: "CA", name: "Català" },
    { code: "en" as Language, initials: "EN", name: "English" },
  ]

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  const currentLanguage = languages.find((l) => l.code === language)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
              <Image src="/images/logo-20sin-20fondo.png" alt="COP DE MÀ Logo" fill className="object-contain" />
            </div>
            <span className="text-lg md:text-2xl font-bold text-primary-foreground whitespace-nowrap">COP DE MÀ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground hover:text-secondary transition-colors font-medium text-sm 2xl:text-base whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-secondary hover:bg-primary/80 cursor-pointer"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {currentLanguage?.initials}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2 font-semibold">{lang.initials}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              asChild
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-primary-foreground whitespace-nowrap"
            >
              <a href="tel:+34631615751">
                <Phone className="w-4 h-4 mr-2" />
                631 615 751
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-primary-foreground p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:text-secondary transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 py-2">
                <Globe className="w-4 h-4 text-primary-foreground" />
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value as Language)}
                  className="bg-primary text-primary-foreground border border-primary-foreground/20 rounded px-2 py-1 cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.initials} - {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary-foreground w-full">
                <a href="tel:+34631615751">
                  <Phone className="w-4 h-4 mr-2" />
                  631 615 751
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
