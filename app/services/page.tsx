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
              <h2 className="text-3xl font-bold mb-6">Private Group Sessions</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Host a private escape at a time that works best for you—morning or afternoon. Our sauna accommodates 6
                people at a time. Larger groups can rotate for a seamless experience.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <Check className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Access to sauna & cold plunge</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Towels and wool sauna hats</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Lounging area</span>
                </li>
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
              <h2 className="text-3xl font-bold mb-6">Delivered Sauna & Cold Plunge Experience</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Ideal for extended rentals at your home, event space, or short-term rental. Great for parties, retreats,
                or multi-hour relaxation sessions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Delivery, setup, and takedown</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Firewood starter package</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Cold plunge tub + ice to jumpstart the plunge</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Cold shower setup</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Towels, hats, and water</span>
                </li>
              </ul>
              <Link
                href="/book"
                className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Book Delivery
              </Link>
            </div>
          </div>

          <div className="mt-20 pt-20 border-t border-border">
            <h2 className="text-3xl font-bold mb-12">Rental Options & Add-Ons</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "2-4 Hour Session", price: "Starting $349" },
                { title: "Overnight Rental", price: "Starting $599" },
                { title: "3-Day Rental", price: "Starting $1,499" },
              ].map((option) => (
                <div key={option.title} className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-bold text-lg mb-2">{option.title}</h3>
                  <p className="text-primary text-2xl font-bold">{option.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
