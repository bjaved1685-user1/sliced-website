import Link from 'next/link'

export default function HomePage() {
  const highlights = [
    {
      icon: '🕌',
      title: 'Halal Certified',
      desc: 'Every product we make is fully halal certified — no exceptions, no compromises.',
    },
    {
      icon: '🌿',
      title: 'Preservative-Free',
      desc: 'No binding agents. No fillers. Just clean, real meat the way it should be.',
    },
    {
      icon: '📦',
      title: 'Fresh to Order',
      desc: 'Made fresh and packaged just for you. Best enjoyed within 3–5 days.',
    },
  ]

  const featuredItems = [
    { name: 'Smoked Turkey', category: 'Meats', desc: 'Slow-smoked and perfectly seasoned.' },
    { name: 'Beef Bologna', category: 'Meats', desc: 'Classic deli taste, halal quality.' },
    { name: 'Tandoori Chicken', category: 'Meats', desc: 'Boldly spiced with a rich marinade.' },
    { name: 'Roast Beef', category: 'Meats', desc: 'Thinly sliced, tender, and savory.' },
  ]

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="min-h-[88vh] flex items-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0230 0%, #2D0A45 40%, #3D1060 70%, #2A0840 100%)' }}
      >
        {/* Warm purple glow overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full opacity-25"
            style={{ background: 'radial-gradient(ellipse at 80% 30%, #6B2E8A 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 opacity-15"
            style={{ background: 'radial-gradient(ellipse at 20% 80%, #C8941E 0%, transparent 60%)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: 'rgba(200, 148, 30, 0.15)', border: '1px solid rgba(200, 148, 30, 0.35)' }}>
              <span className="w-2 h-2 rounded-full bg-amber inline-block"></span>
              <p className="text-amber text-xs tracking-[0.25em] uppercase font-sans">Premium Halal Deli Meats</p>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight mb-6">
              Quality You Can <em className="text-amber not-italic">Taste.</em>
              <br />Halal You Can <em className="text-amber not-italic">Trust.</em>
            </h1>
            <p className="text-warm text-lg leading-relaxed mb-8 max-w-md font-sans font-light">
              Sliced brings preservative-free, halal-certified cold cuts to the DMV.
              Made fresh, crafted with care — because you deserve better than the shelf stuff.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="font-bold tracking-widest uppercase px-8 py-3.5 rounded-lg transition-colors text-sm shadow-lg"
                style={{ background: 'linear-gradient(135deg, #C8941E, #E8A830)', color: '#1A0230' }}
              >
                View Our Menu
              </Link>
              <Link
                href="/about"
                className="font-light tracking-widest uppercase px-8 py-3.5 rounded-lg transition-colors text-sm"
                style={{ border: '1px solid rgba(232, 208, 245, 0.4)', color: '#E8D0F5' }}
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero card */}
          <div className="hidden md:flex justify-center">
            <div className="rounded-2xl p-8 max-w-sm w-full"
              style={{ background: 'rgba(107, 46, 138, 0.2)', border: '1px solid rgba(200, 148, 30, 0.25)', backdropFilter: 'blur(4px)' }}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🥩</div>
                <h3 className="font-serif text-cream text-2xl mb-2">Fresh This Week</h3>
                <p className="text-sm" style={{ color: 'rgba(232, 208, 245, 0.6)' }}>Sliced to order in the DMV</p>
              </div>
              <div className="space-y-3 border-t pt-5" style={{ borderColor: 'rgba(200, 148, 30, 0.2)' }}>
                {['Smoked Turkey', 'Beef Bologna', 'Tandoori Chicken', 'Roast Beef', 'Pepperoni'].map(item => (
                  <div key={item} className="flex items-center justify-between">
                    <span className="text-warm text-sm">{item}</span>
                    <span className="text-amber text-xs">✓ Halal</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 flex gap-2 flex-wrap border-t" style={{ borderColor: 'rgba(200, 148, 30, 0.2)' }}>
                {['Halal', 'Preservative-Free', 'DMV Local'].map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full text-amber"
                    style={{ background: 'rgba(200, 148, 30, 0.12)', border: '1px solid rgba(200, 148, 30, 0.3)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <div style={{ background: 'linear-gradient(135deg, #C8941E, #E8A830)' }} className="py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-sans" style={{ color: '#1A0230' }}>
          {['100% Halal Certified', 'Zero Preservatives', 'DMV Community Brand', 'Pickup & Nationwide Shipping'].map(item => (
            <div key={item} className="flex items-center gap-2 font-semibold tracking-wide">
              <span>✦</span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── HIGHLIGHTS ──────────────────────────────────── */}
      <section className="bg-linen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-2">Why Sliced</p>
            <h2 className="font-serif text-4xl text-espresso">What Makes Us Different</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="bg-cream rounded-2xl p-8 border border-warm/50 shadow-sm hover:shadow-md transition-all"
                style={{ borderColor: 'rgba(107, 46, 138, 0.15)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5"
                  style={{ background: 'rgba(200, 148, 30, 0.1)', border: '1px solid rgba(200, 148, 30, 0.2)' }}>
                  {h.icon}
                </div>
                <h3 className="font-serif text-xl text-espresso mb-3">{h.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED MENU ────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-2">On The Menu</p>
            <h2 className="font-serif text-4xl text-espresso">Featured Items</h2>
            <p className="text-muted text-sm mt-3 max-w-md mx-auto">All meats are halal certified and preservative-free. Made fresh every order.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div key={item.name} className="bg-linen rounded-2xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                style={{ border: '1px solid rgba(107, 46, 138, 0.15)' }}>
                <div className="h-36 flex items-center justify-center text-5xl"
                  style={{ background: 'linear-gradient(135deg, #2D0A45 0%, #4A1068 100%)' }}>
                  🥩
                </div>
                <div className="p-5">
                  <p className="text-gold text-xs tracking-widest uppercase mb-1">{item.category}</p>
                  <h4 className="font-serif text-espresso text-lg mb-1">{item.name}</h4>
                  <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="text-cream font-bold tracking-widest uppercase px-10 py-4 rounded-lg transition-colors text-sm shadow-md"
              style={{ background: '#2D0A45' }}
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── STORY STRIP ──────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0230 0%, #2D0A45 50%, #3D1060 100%)' }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, #6B2E8A 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber text-sm tracking-[0.3em] uppercase font-sans mb-4">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 leading-snug">
            Born From a Need. <br />
            <em className="text-amber">Built for the Community.</em>
          </h2>
          <p className="text-warm text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            We started Sliced because finding good quality, preservative-free halal cold cuts in the DMV was nearly impossible. So we built the solution ourselves.
          </p>
          <Link
            href="/about"
            className="font-light tracking-widest uppercase px-8 py-3.5 rounded-lg transition-colors text-sm text-amber"
            style={{ border: '1px solid rgba(200, 148, 30, 0.5)' }}
          >
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* ── ORDER CTA ────────────────────────────────────── */}
      <section className="py-20"
        style={{ background: 'linear-gradient(135deg, #C8941E 0%, #E8A830 50%, #C8941E 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-4" style={{ color: '#1A0230' }}>Ready to Order?</h2>
          <p className="text-base mb-8 font-light" style={{ color: '#3D1060' }}>
            Pick up in the DMV or have it shipped right to your door.
          </p>
          <Link
            href="/menu"
            className="text-cream font-bold tracking-widest uppercase px-10 py-4 rounded-lg transition-colors text-sm shadow-lg"
            style={{ background: '#1A0230' }}
          >
            Order Now
          </Link>
        </div>
      </section>
    </>
  )
}
