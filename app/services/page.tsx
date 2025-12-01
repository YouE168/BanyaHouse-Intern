import { Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main>
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services & Rentals</h1>
          <p className="text-lg opacity-90">Explore our offerings and pricing</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Private Group Sessions</h2>
              <p className="text-muted-foreground mb-8 text-xl">
                Join us for exclusive sauna experiences. Perfect for friends, family, or corporate wellness.
              </p>
              
              <h3 className="font-bold text-2xl mb-6 text-foreground">Included:</h3>
              <ul className="space-y-5 mb-10">
                <li className="flex gap-4 items-start">
                  <Check className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">Access to sauna (accommodates up to 6 people)</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">Towels and wool sauna hats</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">Essential oils</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">Ice starter</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">Expert guidance on sauna etiquette</span>
                </li>
              </ul>

              <h3 className="font-bold text-2xl mb-6 text-foreground">Add-Ons (Extra Charge):</h3>
              <ul className="space-y-4 mb-10 text-muted-foreground text-lg">
                <li>• Cold plunge access</li>
                <li>• Insulated dressing room</li>
                <li>• Chairs</li>
              </ul>

              <Link
                href="/book"
                className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Book a Session
              </Link>
            </div>
            <div className="bg-muted/50 rounded-xl overflow-hidden h-96 flex items-center justify-center">
              <img
                src="/people-enjoying-sauna-session-relaxation.jpg"
                alt="Private sauna session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-muted/50 rounded-xl overflow-hidden h-96 flex items-center justify-center">
              <img src="/sauna-delivery-truck-setup.jpg" alt="Sauna delivery" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Delivered Sauna Experience</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Perfect for parties, retreats, events, and extended relaxation sessions at your home or venue.
              </p>
              
              <div className="bg-accent/10 border border-accent rounded-lg p-8 mb-6">
                <h3 className="font-bold text-2xl mb-4 text-foreground">📅 Delivery Times:</h3>
                <p className="text-foreground mb-2 text-lg">Weekdays: Drop-off & pick-up after 4pm</p>
                <p className="text-muted-foreground text-lg">Weekends: Anytime</p>
              </div>

              <h3 className="font-bold text-2xl mb-6 text-foreground">Included:</h3>
              <ul className="space-y-5 mb-10">
                <li className="flex gap-4 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">Professional delivery, setup, and takedown</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">Firewood starter package</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">Towels, hats, and essential oils</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">All safety instructions</span>
                </li>
              </ul>

              <h3 className="font-bold text-2xl mb-6 text-foreground">Optional Add-Ons:</h3>
              <ul className="space-y-4 mb-10 text-muted-foreground text-lg">
                <li>• Cold plunge tub with ice setup (extra charge)</li>
                <li>• Insulated dressing room (extra charge)</li>
                <li>• Sauna attendant service (extra charge)</li>
              </ul>

              <Link
                href="/book"
                className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Book Delivery
              </Link>
            </div>
          </div>

          <div className="mt-20 pt-20 border-t border-border">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Rental Options & Pricing</h2>
            
            <div className="bg-secondary/10 border border-secondary rounded-lg p-8 mb-8">
              <h3 className="font-bold text-2xl mb-4 text-foreground">🚚 Delivery Charges</h3>
              <p className="text-foreground mb-2 text-lg">First 30 miles (one way): <span className="font-bold">FREE</span></p>
              <p className="text-muted-foreground text-lg">Additional mileage: $1.50 per mile</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "2-4 Hour Session", price: "Contact for pricing" },
                { title: "Overnight Rental (24h)", price: "Contact for pricing" },
                { title: "3-Day Rental", price: "Contact for pricing" },
              ].map((option) => (
                <div key={option.title} className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{option.title}</h3>
                  <p className="text-primary text-xl font-bold">{option.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4 text-lg">Contact us for detailed pricing and custom packages</p>
              <Link href="/contact" className="text-primary font-semibold hover:opacity-80 transition text-lg">
                Get a Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}