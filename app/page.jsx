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
        style={{ background: 'linear-gradient(135deg, #1C0F06 0%, #2E1A0E 40%, #4A2510 70%, #3A1E0A 100%)' }}
      >
        {/* Warm glow overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full opacity-20"
            style={{ background: 'radial-gradient(ellipse at 80% 30%, #E8A830 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 opacity-10"
            style={{ background: 'radial-gradient(ellipse at 20% 80%, #C8941E 0%, transparent 60%)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-6">
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
                className="bg-gold text-deepbrown font-bold tracking-widest uppercase px-8 py-3.5 rounded-lg hover:bg-amber transition-colors text-sm shadow-lg shadow-gold/20"
              >
                View Our Menu
              </Link>
              <Link
                href="/about"
                className="border border-warm/40 text-warm font-light tracking-widest uppercase px-8 py-3.5 rounded-lg hover:border-amber hover:text-amber transition-colors text-sm"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero card */}
          <div className="hidden md:flex justify-center">
            <div className="rounded-2xl p-8 max-w-sm w-full"
              style={{ background: 'rgba(200, 148, 30, 0.08)', border: '1px solid rgba(200, 148, 30, 0.25)', backdropFilter: 'blur(4px)' }}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🥩</div>
                <h3 className="font-serif text-cream text-2xl mb-2">Fresh This Week</h3>
                <p className="text-warm/70 text-sm">Sliced to order in the DMV</p>
              </div>
              <div className="space-y-3 border-t border-gold/20 pt-5">
                {['Smoked Turkey', 'Beef Bologna', 'Tandoori Chicken', 'Roast Beef', 'Pepperoni'].map(item => (
                  <div key={item} className="flex items-center justify-between">
                    <span className="text-warm text-sm">{item}</span>
                    <span className="text-gold text-xs">✓ Halal</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-gold/20 flex gap-2 flex-wrap">
                <span className="text-xs px-3 py-1 rounded-full text-amber" style={{ background: 'rgba(200, 148, 30, 0.15)', border: '1px solid rgba(200, 148, 30, 0.3)' }}>Halal</span>
                <span className="text-xs px-3 py-1 rounded-full text-amber" style={{ background: 'rgba(200, 148, 30, 0.15)', border: '1px solid rgba(200, 148, 30, 0.3)' }}>Preservative-Free</span>
                <span className="text-xs px-3 py-1 rounded-full text-amber" style={{ background: 'rgba(200, 148, 30, 0.15)', border: '1px solid rgba(200, 148, 30, 0.3)' }}>DMV Local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <div className="bg-gold py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-deepbrown text-sm font-sans">
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
              <div key={h.title} className="bg-cream rounded-2xl p-8 border border-warm/50 shadow-sm hover:shadow-md hover:border-caramel transition-all">
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-3xl mb-5">
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
              <div key={item.name} className="bg-linen rounded-2xl overflow-hidden border border-warm/40 hover:border-caramel hover:shadow-lg transition-all group cursor-pointer">
                <div className="h-36 flex items-center justify-center text-5xl"
                  style={{ background: 'linear-gradient(135deg, #2E1A0E 0%, #4A2510 100%)' }}>
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
              className="bg-espresso text-cream font-bold tracking-widest uppercase px-10 py-4 rounded-lg hover:bg-bark transition-colors text-sm shadow-md"
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── STORY STRIP ──────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0F06 0%, #2E1A0E 50%, #3A1E0A 100%)' }}>
        <div className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, #C8941E 0%, transparent 60%)' }} />
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
            className="border border-amber/60 text-amber font-light tracking-widest uppercase px-8 py-3.5 rounded-lg hover:bg-gold hover:text-deepbrown hover:border-gold transition-colors text-sm"
          >
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* ── ORDER CTA ────────────────────────────────────── */}
      <section className="py-20"
        style={{ background: 'linear-gradient(135deg, #C8941E 0%, #E8A830 50%, #C8941E 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-deepbrown mb-4">Ready to Order?</h2>
          <p className="text-bark text-base mb-8 font-light">
            Pick up in the DMV or have it shipped right to your door.
          </p>
          <Link
            href="/menu"
            className="bg-espresso text-cream font-bold tracking-widest uppercase px-10 py-4 rounded-lg hover:bg-deepbrown transition-colors text-sm shadow-lg shadow-espresso/30"
          >
            Order Now
          </Link>
        </div>
      </section>
    </>
  )
}
