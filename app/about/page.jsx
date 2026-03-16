import Link from 'next/link'

export default function AboutPage() {
  const values = [
    { icon: '🕌', title: 'Halal, Always', desc: 'Every single product we make is halal certified. No grey areas. No exceptions. Our community deserves food they can trust.' },
    { icon: '🌿', title: 'Clean Ingredients', desc: 'No preservatives. No binding agents. We believe in real food made the right way — even if it means a shorter shelf life.' },
    { icon: '❤️', title: 'Community First', desc: 'We are a DMV-born brand. We know this community because we are part of it. This was built for our neighbors, friends, and families.' },
    { icon: '🔪', title: 'Crafted with Care', desc: 'Our slices vary in size because we do not use artificial binders to force uniformity. Variable sizes are a sign of quality — not inconsistency.' },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-espresso py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #C9A84C 0%, transparent 60%)' }}
        />
        <div className="relative">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-3">Who We Are</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream mb-6">Our Story</h1>
          <p className="text-muted text-lg max-w-xl mx-auto font-light">
            A simple idea. A real need. Built for the DMV.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-4">How It Started</p>
              <h2 className="font-serif text-4xl text-espresso mb-6 leading-snug">
                We Looked for It. <br />
                <em className="text-caramel">Couldn't Find It. So We Built It.</em>
              </h2>
              <p className="text-muted leading-relaxed mb-4 font-light">
                Our story started with a simple problem: we were looking for good quality, preservative-free cold cuts that were halal. It was hard to find something like this in the DMV.
              </p>
              <p className="text-muted leading-relaxed mb-4 font-light">
                The options were either not halal, loaded with preservatives, or just low quality. We knew others in the community felt the same frustration. So instead of settling, we created Sliced.
              </p>
              <p className="text-muted leading-relaxed font-light">
                Today, we are proud to bring premium, preservative-free, halal-certified deli meats to the DMV community — made with the same care and standards we would want for our own families.
              </p>
            </div>

            {/* Visual block */}
            <div className="bg-espresso rounded-2xl p-10 text-center">
              <div className="text-6xl mb-6">🥩</div>
              <h3 className="font-serif text-cream text-2xl mb-3">Made for the DMV</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Washington DC · Maryland · Virginia
              </p>
              <div className="space-y-3 text-left">
                {[
                  'Halal certified — every product',
                  'Zero preservatives',
                  'No artificial binding agents',
                  'Fresh to order',
                  'Pickup & shipping available',
                ].map(point => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="text-gold">✓</span>
                    <span className="text-linen text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-linen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-2">What We Stand For</p>
            <h2 className="font-serif text-4xl text-espresso">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map(v => (
              <div key={v.title} className="bg-cream rounded-xl p-8 border border-linen hover:border-caramel transition-colors">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-espresso text-xl mb-3">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allergen */}
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-l-4 border-caramel pl-6">
            <h3 className="font-serif text-espresso text-2xl mb-4">A Note on Allergens</h3>
            <p className="text-muted leading-relaxed mb-4 font-light">
              We believe in full transparency. We operate from a shared commercial kitchen, and while we take every precaution we can, we cannot guarantee that our products will be completely free from contact with common allergens, including:
            </p>
            <p className="text-bark font-semibold text-sm mb-4">
              Wheat · Soy · Dairy · Peanuts · Tree Nuts · Shellfish · Fish · Eggs · Sesame
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Our <strong>Tandoori Chicken</strong> recipe contains dairy. All meats are packaged in a facility where dairy is used. If you have a severe allergy, please contact us before ordering.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso py-16 text-center">
        <h2 className="font-serif text-3xl text-cream mb-4">Taste the Difference</h2>
        <p className="text-muted mb-8 font-light max-w-md mx-auto">
          Now that you know our story, we'd love for you to experience the product.
        </p>
        <Link
          href="/menu"
          className="bg-gold text-espresso font-bold tracking-widest uppercase px-10 py-4 rounded hover:bg-caramel hover:text-cream text-sm"
        >
          Browse the Menu
        </Link>
      </section>
    </>
  )
}
