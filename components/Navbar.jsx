'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/locations', label: 'Locations' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-espresso sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
            <span className="text-espresso font-bold text-sm font-serif">S</span>
          </div>
          <span className="text-cream font-serif text-2xl tracking-wide">Sliced</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase font-sans ${
                pathname === link.href
                  ? 'text-gold border-b border-gold pb-0.5'
                  : 'text-linen hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            className="bg-gold text-espresso text-sm font-bold tracking-widest uppercase px-5 py-2 rounded hover:bg-caramel hover:text-cream"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-cream focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-deepbrown px-6 pb-6 flex flex-col gap-4">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-widest uppercase font-sans pt-3 border-t border-espresso ${
                pathname === link.href ? 'text-gold' : 'text-linen hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="bg-gold text-espresso text-sm font-bold tracking-widest uppercase px-5 py-3 rounded text-center mt-2 hover:bg-caramel hover:text-cream"
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  )
}
