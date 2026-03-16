import Link from 'next/link'

export default function LocationsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-espresso py-20 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-3">Find Us</p>
        <h1 className="font-serif text-5xl text-cream mb-4">Locations</h1>
        <p className="text-muted text-base max-w-xl mx-auto font-light">
          We serve the greater DMV area — Washington DC, Maryland, and Virginia.
        </p>
      </section>

      {/* Pickup Info */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* Pickup Card */}
          <div className="bg-linen rounded-2xl p-8 border border-linen hover:border-caramel transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-gold text-lg">📍</div>
              <div>
                <p className="text-gold text-xs tracking-widest uppercase">Available Now</p>
                <h2 className="font-serif text-espresso text-2xl">Local Pickup</h2>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              We offer local pickup in the DMV area. Place your order online and we will confirm a pickup time and location with you directly.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span className="text-bark text-sm">Order online, pick up at a confirmed location</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span className="text-bark text-sm">Serving DC, Maryland, and Virginia</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span className="text-bark text-sm">Pickup times confirmed after order placed</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span className="text-bark text-sm">Fresh and ready when you arrive</span>
              </div>
            </div>
            <Link
              href="/menu"
              className="block text-center bg-espresso text-cream font-bold tracking-widest uppercase px-8 py-3 rounded hover:bg-bark text-sm"
            >
              Order for Pickup
            </Link>
          </div>

          {/* Shipping Card */}
          <div className="bg-linen rounded-2xl p-8 border border-linen hover:border-caramel transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-gold text-lg">📦</div>
              <div>
                <p className="text-gold text-xs tracking-widest uppercase">Available Now</p>
                <h2 className="font-serif text-espresso text-2xl">Nationwide Shipping</h2>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Not in the DMV? No problem. We ship our fresh products across the country. Orders are carefully packaged to ensure freshness on arrival.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span className="text-bark text-sm">Ships nationwide</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span className="text-bark text-sm">Packaged to preserve freshness in transit</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span className="text-bark text-sm">Refrigerate immediately upon arrival</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span className="text-bark text-sm">Consume within 3–5 days of delivery</span>
              </div>
            </div>
            <Link
              href="/menu"
              className="block text-center bg-gold text-espresso font-bold tracking-widest uppercase px-8 py-3 rounded hover:bg-caramel hover:text-cream text-sm"
            >
              Order for Shipping
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Map Placeholder */}
      <section className="bg-linen py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-3">Service Area</p>
          <h2 className="font-serif text-3xl text-espresso mb-6">The DMV & Beyond</h2>
          <div className="bg-espresso/10 rounded-2xl h-64 flex items-center justify-center border border-caramel/20">
            <div className="text-center">
              <div className="text-5xl mb-4">🗺️</div>
              <p className="text-espresso font-serif text-xl">Washington DC · Maryland · Virginia</p>
              <p className="text-muted text-sm mt-2">+ Nationwide Shipping Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-espresso py-16 text-center">
        <h2 className="font-serif text-3xl text-cream mb-4">Questions About Pickup?</h2>
        <p className="text-muted mb-8 font-light">We are happy to help with any logistics or delivery questions.</p>
        <Link
          href="/contact"
          className="border border-gold text-gold font-light tracking-widest uppercase px-8 py-3 rounded hover:bg-gold hover:text-espresso text-sm"
        >
          Contact Us
        </Link>
      </section>
    </>
  )
}
