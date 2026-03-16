'use client'
import { useState } from 'react'
import Link from 'next/link'

const menuData = {
  Meats: [
    { name: 'Smoked Turkey', desc: 'Slow-smoked, perfectly seasoned. A deli classic done halal.', tags: ['Halal', 'Fan Favorite'] },
    { name: 'Beef Bologna', desc: 'Rich, savory, and satisfying. Great for sandwiches and snacking.', tags: ['Halal'] },
    { name: 'Tandoori Chicken', desc: 'Boldly spiced with a signature tandoori marinade. Contains dairy.', tags: ['Halal', 'Contains Dairy'] },
    { name: 'Roast Beef', desc: 'Thinly sliced tender roast beef. Simple, premium, delicious.', tags: ['Halal'] },
    { name: 'Pepperoni', desc: 'Halal pepperoni with the bold flavor you love.', tags: ['Halal', 'Spicy'] },
    { name: 'Salami', desc: 'Perfectly cured halal salami with classic Italian-inspired flavor.', tags: ['Halal'] },
  ],
  'Un-Sliced': [
    { name: 'Whole Turkey Breast', desc: 'Take it home and slice it yourself for ultimate freshness.', tags: ['Halal'] },
    { name: 'Whole Roast Beef', desc: 'A generous whole cut — great for meal prep and families.', tags: ['Halal'] },
    { name: 'Whole Beef Bologna', desc: 'The full log. Perfect for slicing to your preferred thickness.', tags: ['Halal'] },
  ],
  Extras: [
    { name: 'Sliced Cheese', desc: 'Premium cheese sliced fresh to complement your meats.', tags: [] },
    { name: 'Condiment Pack', desc: 'Curated condiments to complete your sandwich experience.', tags: [] },
    { name: 'Fresh Bread', desc: 'Soft, fresh bread perfect for building the ultimate sandwich.', tags: [] },
  ],
  Drinks: [
    { name: 'Sparkling Water', desc: 'Crisp and refreshing to go with your order.', tags: [] },
    { name: 'Lemonade', desc: 'House-style lemonade, lightly sweetened.', tags: [] },
    { name: 'Iced Tea', desc: 'Classic unsweetened or sweetened iced tea.', tags: [] },
  ],
}

const tagColors = {
  'Halal': 'bg-green-50 text-green-800 border border-green-200',
  'Fan Favorite': 'bg-gold/20 text-bark border border-gold/40',
  'Contains Dairy': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Spicy': 'bg-red-50 text-red-700 border border-red-200',
}

export default function MenuPage() {
  const categories = Object.keys(menuData)
  const [active, setActive] = useState('Meats')

  return (
    <>
      {/* Header */}
      <section className="bg-espresso py-20 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-3">What We Offer</p>
        <h1 className="font-serif text-5xl text-cream mb-4">Our Menu</h1>
        <p className="text-muted text-base max-w-xl mx-auto font-light">
          All meats are halal certified and preservative-free. Made fresh — consume within 3–5 days.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="bg-linen border-b border-linen sticky top-[65px] z-40">
        <div className="max-w-6xl mx-auto px-6 flex gap-1 overflow-x-auto py-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded text-sm tracking-widest uppercase font-sans whitespace-nowrap transition-all ${
                active === cat
                  ? 'bg-espresso text-gold font-bold'
                  : 'text-caramel hover:text-espresso hover:bg-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Items */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-espresso mb-2">{active}</h2>
          <p className="text-muted text-sm mb-10">
            {active === 'Meats' && 'Freshly sliced halal deli meats. Preservative-free, always.'}
            {active === 'Un-Sliced' && 'Take the whole cut home and slice it yourself for maximum freshness.'}
            {active === 'Extras' && 'Everything you need to build the perfect sandwich.'}
            {active === 'Drinks' && 'Refreshing drinks to complement your order.'}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData[active].map(item => (
              <div
                key={item.name}
                className="bg-linen rounded-xl border border-linen/80 hover:border-caramel hover:shadow-md transition-all overflow-hidden group"
              >
                {/* Item image placeholder */}
                <div className="bg-espresso/10 h-40 flex items-center justify-center text-6xl group-hover:bg-espresso/15 transition-colors">
                  {active === 'Drinks' ? '🥤' : active === 'Extras' ? '🧀' : active === 'Un-Sliced' ? '🍖' : '🥩'}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-espresso text-xl mb-2">{item.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{item.desc}</p>
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${tagColors[tag] || 'bg-linen text-muted border'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allergen Notice */}
      <section className="bg-linen py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-cream border border-caramel/30 rounded-xl p-6">
            <h4 className="font-serif text-espresso text-lg mb-2">⚠️ Allergen Information</h4>
            <p className="text-muted text-sm leading-relaxed">
              We operate from a shared commercial kitchen. We cannot guarantee our products are completely free from contact with common allergens including: <strong className="text-bark">Wheat, Soy, Dairy, Peanuts, Tree Nuts, Shellfish, Fish, Eggs, and Sesame.</strong> The Tandoori Chicken recipe contains dairy. All meats are packaged in a facility where dairy is used.
            </p>
            <p className="text-muted text-xs mt-3 italic">All items are final sale. Refrigerate and consume within 3–5 days for best freshness.</p>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-espresso py-16 text-center">
        <h2 className="font-serif text-3xl text-cream mb-4">Ready to Place Your Order?</h2>
        <p className="text-muted mb-8 font-light">Pickup available in the DMV. Shipping available nationwide.</p>
        <a
          href="https://www.slicedthw.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-espresso font-bold tracking-widest uppercase px-10 py-4 rounded hover:bg-caramel hover:text-cream text-sm"
        >
          Order via Square →
        </a>
      </section>
    </>
  )
}
