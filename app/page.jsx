import Link from 'next/link'

export default function HomePage() {
  const highlights = [
    {
      icon: '🥩',
      title: 'Halal Certified',
      desc: 'Every product we make is fully halal certified — no exceptions.',
    },
    {
      icon: '🌿',
      title: 'Preservative-Free',
      desc: 'No binding agents. No fillers. Just clean, real meat.',
    },
    {
      icon: '📦',
      title: 'Fresh to Order',
      desc: 'Made fresh and packaged for you. Consume within 3–5 days for best quality.',
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
      <section className="bg-espresso min-h-[88vh] flex items-center relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 60%), radial-gradient(circle at 80% 20%, #8B5E3C 0%, transparent 50%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-4">
              Premium Halal Deli Meats
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight mb-6">
              Quality You Can <em className="text-gold not-italic">Taste.</em>
              <br />Halal You Can <em className="text-gold not-italic">Trust.</em>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-md font-sans font-light">
              Sliced brings preservative-free, halal-certified cold cuts to the DMV.
              Made fresh, crafted with care — because you deserve better than the shelf stuff.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="bg-gold text-espresso font-bold tracking-widest uppercase px-8 py-3 rounded hover:bg-caramel hover:text-cream text-sm"
              >
                View Our Menu
              </Link>
              <Link
                href="/about"
                className="border border-linen text-linen font-light tracking-widest uppercase px-8 py-3 rounded hover:border-gold hover:text-gold text-sm"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero visual card */}
          <div className="hidden md:flex justify-center">
            <div className="bg-bark/30 border border-caramel/30 rounded-2xl p-10 text-center max-w-sm w-full backdrop-blur-sm">
              <div className="text-7xl mb-6">🥩</div>
              <h3 className="font-serif text-cream text-2xl mb-3">Fresh This Week</h3>
              <p className="text-muted text-sm mb-6 leading-relaxed">
                Smoked Turkey · Beef Bologna · Tandoori Chicken · Roast Beef · and more
              </p>
              <div className="flex justify-center gap-2 flex-wrap">
                <span className="bg-gold/20 text-gold text-xs px-3 py-1 rounded-full border border-gold/30">Halal</span>
                <span className="bg-gold/20 text-gold text-xs px-3 py-1 rounded-full border border-gold/30">Preservative-Free</span>
                <span className="bg-gold/20 text-gold text-xs px-3 py-1 rounded-full border border-gold/30">DMV Local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ──────────────────────────────────── */}
      <section className="bg-linen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-2">Why Sliced</p>
            <h2 className="font-serif text-4xl text-espresso">What Makes Us Different</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="bg-cream rounded-xl p-8 border border-linen shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="font-serif text-xl text-espresso mb-2">{h.title}</h3>
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
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div key={item.name} className="bg-linen rounded-xl overflow-hidden border border-linen/80 hover:border-caramel transition-colors group">
                <div className="bg-espresso/10 h-36 flex items-center justify-center text-5xl">
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
              className="bg-espresso text-cream font-bold tracking-widest uppercase px-10 py-4 rounded hover:bg-bark text-sm"
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── STORY STRIP ──────────────────────────────────── */}
      <section className="bg-espresso py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-4">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 leading-snug">
            Born From a Need. <br />
            <em className="text-gold">Built for the Community.</em>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            We started Sliced because finding good quality, preservative-free halal cold cuts in the DMV was nearly impossible. So we built the solution ourselves.
          </p>
          <Link
            href="/about"
            className="border border-gold text-gold font-light tracking-widest uppercase px-8 py-3 rounded hover:bg-gold hover:text-espresso text-sm"
          >
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* ── ORDER CTA ────────────────────────────────────── */}
      <section className="bg-gold py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-espresso mb-4">Ready to Order?</h2>
          <p className="text-bark text-base mb-8 font-light">
            Pick up in the DMV or have it shipped right to your door.
          </p>
          <Link
            href="/menu"
            className="bg-espresso text-cream font-bold tracking-widest uppercase px-10 py-4 rounded hover:bg-deepbrown text-sm"
          >
            Order Now
          </Link>
        </div>
      </section>
    </>
  )
}
