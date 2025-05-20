"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/100 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 mr-2">
              <Image src="/images/truFlowLogo.png" alt="Tru Flow Logo" fill className="object-contain" />
            </div>
            <span className="font-serif text-xl text-stone-800">Tru Flow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/#landing">About</NavLink>
            <NavLink href="/#services">Services</NavLink>
            <NavLink href="/#booking">Book Now</NavLink>
            <NavLink href="/#testimonials">Testimonials</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-stone-800" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="/#about" onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="/#services" onClick={() => setIsOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="/#booking" onClick={() => setIsOpen(false)}>
              Book Now
            </MobileNavLink>
            <MobileNavLink href="/#testimonials" onClick={() => setIsOpen(false)}>
              Testimonials
            </MobileNavLink>
            <MobileNavLink href="/#contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-stone-700 hover:text-stone-900 transition-colors font-light tracking-wide">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-stone-700 hover:text-stone-900 py-2 block text-lg font-light" onClick={onClick}>
      {children}
    </Link>
  )
}
