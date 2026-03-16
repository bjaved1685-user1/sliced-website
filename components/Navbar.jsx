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
    <nav className="sticky top-0 z-50 shadow-lg"
      style={{ background: '#1A0230', borderBottom: '1px solid rgba(200, 148, 30, 0.2)' }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #C8941E, #E8A830)' }}>
            <span className="font-bold text-sm font-serif" style={{ color: '#1A0230' }}>S</span>
          </div>
          <div>
            <span className="text-cream font-serif text-2xl tracking-wide">Sliced</span>
            <span className="hidden sm:inline text-xs ml-2 tracking-widest uppercase" style={{ color: '#A07AB8' }}>· Halal Deli</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase font-sans transition-colors ${
                pathname === link.href ? 'text-amber border-b border-amber pb-0.5' : 'hover:text-amber'
              }`}
              style={{ color: pathname === link.href ? '#E8A830' : 'rgba(232, 208, 245, 0.7)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            className="font-bold tracking-widest uppercase px-5 py-2 rounded-lg text-xs transition-colors shadow-md"
            style={{ background: 'linear-gradient(135deg, #C8941E, #E8A830)', color: '#1A0230' }}
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          style={{ color: '#E8D0F5' }}
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
        <div className="md:hidden px-6 pb-6 flex flex-col gap-1" style={{ background: '#1A0230' }}>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-widest uppercase font-sans py-3 border-t transition-colors"
              style={{
                color: pathname === link.href ? '#E8A830' : 'rgba(232, 208, 245, 0.7)',
                borderColor: 'rgba(200, 148, 30, 0.1)'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="font-bold tracking-widest uppercase px-5 py-3 rounded-lg text-center mt-3 text-xs"
            style={{ background: 'linear-gradient(135deg, #C8941E, #E8A830)', color: '#1A0230' }}
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  )
}
