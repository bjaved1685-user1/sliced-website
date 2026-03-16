import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-deepbrown text-linen">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
              <span className="text-espresso font-bold text-sm font-serif">S</span>
            </div>
            <span className="text-cream font-serif text-2xl tracking-wide">Sliced</span>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            Premium halal deli meats. Preservative-free. Made with care for the DMV community.
          </p>
          <p className="text-muted text-xs mt-4">
            <span className="text-gold font-semibold">Halal Certified</span>
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-gold font-serif text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/menu', label: 'Menu' },
              { href: '/about', label: 'Our Story' },
              { href: '/locations', label: 'Locations' },
              { href: '/contact', label: 'Contact' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted text-sm hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold font-serif text-lg mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="mailto:info@slicedthw.com" className="hover:text-gold">
                info@slicedthw.com
              </a>
            </li>
            <li>DMV Area (DC, MD, VA)</li>
            <li className="text-xs pt-2 leading-relaxed">
              All items are final sale. Refrigerate and consume within 3–5 days.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-espresso text-center py-5 text-xs text-muted">
        © {new Date().getFullYear()} Sliced. All rights reserved.
      </div>
    </footer>
  )
}
