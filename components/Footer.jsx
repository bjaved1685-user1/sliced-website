import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1C0F06', borderTop: '1px solid rgba(200, 148, 30, 0.15)' }}>
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C8941E, #E8A830)' }}>
              <span className="text-deepbrown font-bold text-sm font-serif">S</span>
            </div>
            <span className="text-cream font-serif text-2xl tracking-wide">Sliced</span>
          </div>
          <p className="text-muted text-sm leading-relaxed mb-4">
            Premium halal deli meats. Preservative-free. Made with care for the DMV community.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs"
            style={{ background: 'rgba(200, 148, 30, 0.12)', border: '1px solid rgba(200, 148, 30, 0.25)' }}>
            <span className="text-amber">✦</span>
            <span className="text-amber tracking-widest uppercase">Halal Certified</span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-amber font-serif text-lg mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { href: '/', label: 'Home' },
              { href: '/menu', label: 'Menu' },
              { href: '/about', label: 'Our Story' },
              { href: '/locations', label: 'Locations' },
              { href: '/contact', label: 'Contact' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted text-sm hover:text-amber transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-amber font-serif text-lg mb-5">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <a href="mailto:info@slicedthw.com" className="hover:text-amber transition-colors">
                info@slicedthw.com
              </a>
            </li>
            <li>DMV Area (DC, MD, VA)</li>
            <li className="text-xs pt-2 leading-relaxed border-t border-gold/10 mt-3">
              All items are final sale. Refrigerate and consume within 3–5 days.
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-5 text-xs text-muted border-t border-gold/10">
        © {new Date().getFullYear()} Sliced. All rights reserved.
      </div>
    </footer>
  )
}
