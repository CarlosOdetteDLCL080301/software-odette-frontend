"use client"

import { useState } from "react"
import Logo from '../assets/LOGO.png';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo o nombre */}
          <a href="#home" className="text-xl font-bold portfolio-text-primary">
            <img className="h-14 w-auto" src={Logo} alt="Logo Carlos Odette" />
          </a>

          {/* Menú de navegación para pantallas medianas y grandes */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="portfolio-nav-link">
              Inicio
            </a>
            <a href="#work" className="portfolio-nav-link">
              Experiencia
            </a>
            <a href="#about" className="portfolio-nav-link">
              Sobre mi
            </a>
            <a href="#contact" className="portfolio-nav-link">
              Contactame
            </a>
          </div>

          {/* Botón de menú para móviles */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} mt-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#home" className="py-2 portfolio-nav-link" onClick={toggleMenu}>
              Inicio
            </a>
            <a href="#work" className="py-2 portfolio-nav-link" onClick={toggleMenu}>
              Experiencia
            </a>
            <a href="#about" className="py-2 portfolio-nav-link" onClick={toggleMenu}>
              Sobre mi
            </a>
            <a href="#contact" className="py-2 portfolio-nav-link" onClick={toggleMenu}>
              Contactame
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
