import { Gift } from 'lucide-react'
import Link from 'next/link'

export default function GiftCardsPage() {
  return (
    <main>
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gift Cards</h1>
          <p className="text-lg opacity-90">Give the gift of wellness and relaxation</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { amount: '$250', session: 'Perfect for one person' },
              { amount: '$500', session: 'Great for two people' },
              { amount: '$1000', session: 'Premium group experience' },
            ].map((card, i) => (
              <div key={i} className="bg-gradient-to-br from-secondary to-accent text-secondary-foreground rounded-xl p-8 text-center">
                <Gift size={40} className="mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">{card.amount}</div>
                <p className="mb-6">{card.session}</p>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition">
                  Purchase Gift Card
                </button>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6 text-foreground">How Gift Cards Work</h2>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex gap-3 md:gap-4">
                <span className="font-bold text-primary text-xl md:text-2xl">1.</span>
                <span className="text-foreground text-base md:text-lg lg:text-xl pt-0.5">Purchase a gift card in any amount</span>
              </li>
              <li className="flex gap-3 md:gap-4">
                <span className="font-bold text-primary text-xl md:text-2xl">2.</span>
                <span className="text-foreground text-base md:text-lg lg:text-xl pt-0.5">Receive digital or physical card</span>
              </li>
              <li className="flex gap-3 md:gap-4">
                <span className="font-bold text-primary text-xl md:text-2xl">3.</span>
                <span className="text-foreground text-base md:text-lg lg:text-xl pt-0.5">Recipient books their experience</span>
              </li>
              <li className="flex gap-3 md:gap-4">
                <span className="font-bold text-primary text-xl md:text-2xl">4.</span>
                <span className="text-foreground text-base md:text-lg lg:text-xl pt-0.5">Redeem card at booking</span>
              </li>
              <li className="flex gap-3 md:gap-4">
                <span className="font-bold text-primary text-xl md:text-2xl">5.</span>
                <span className="text-foreground text-base md:text-lg lg:text-xl pt-0.5">No expiration - valid indefinitely</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}