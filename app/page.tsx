import Link from "next/link"
import { ArrowRight, Flame, Users, Gift, Check } from "lucide-react"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Experience Premium Wellness</h1>
              <p className="text-lg md:text-xl opacity-95 mb-8 text-balance">
                Delivered sauna and cold plunge experiences. Host your friends, retreat with loved ones, or schedule
                private wellness sessions in Topeka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Book Now <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center border-2 border-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition"
                >
                  Learn More
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary-foreground/20">
                <div>
                  <div className="text-3xl font-bold">6+</div>
                  <p className="text-sm opacity-80">People per session</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <p className="text-sm opacity-80">Setup included</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">24h</div>
                  <p className="text-sm opacity-80">Overnight options</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="relative w-full aspect-square bg-secondary/20 rounded-2xl overflow-hidden border-2 border-secondary/30 flex items-center justify-center">
                <img
                  src="/wood-fired-sauna-barrel-with-warm-glow.jpg"
                  alt="Wood-fired sauna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the sauna experience that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Private Sessions */}
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Users className="text-accent-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Private Group Sessions</h3>
              <p className="text-muted-foreground mb-6">
                Host a private escape at a time that works best for you—morning or afternoon. Our sauna accommodates 6
                people at a time. Larger groups can rotate for a seamless experience.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2 items-start">
                  <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Access to sauna & cold plunge</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Towels and wool sauna hats</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Lounging area</span>
                </li>
              </ul>
              <Link
                href="/book"
                className="text-accent font-semibold hover:opacity-80 transition flex items-center gap-2"
              >
                Book Session <ArrowRight size={16} />
              </Link>
            </div>

            {/* Delivered Experience */}
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Flame className="text-accent-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Delivered Sauna & Cold Plunge Experience</h3>
              <p className="text-muted-foreground mb-6">
                Ideal for extended rentals at your home, event space, or short-term rental. Great for parties, retreats,
                or multi-hour relaxation sessions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2 items-start">
                  <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Delivery, setup, and takedown</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Firewood starter package</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Cold plunge tub + ice setup</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="text-accent font-semibold hover:opacity-80 transition flex items-center gap-2"
              >
                View Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple, seamless sauna experiences</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Choose Your Experience", desc: "Private session or full delivery" },
              { step: "2", title: "Pick Your Time", desc: "Schedule at your convenience" },
              { step: "3", title: "We Set Up", desc: "Arrive, deliver, and prepare" },
              { step: "4", title: "Enjoy & Relax", desc: "Experience premium wellness" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition"
            >
              Full Process Guide <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gift Cards CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Give the Gift of Wellness</h2>
          <p className="text-lg text-white/90 mb-8">
            Perfect for holidays, birthdays, or any occasion. Gift cards available in any denomination.
          </p>
          <Link
            href="/gift-cards"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Shop Gift Cards <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
            <p className="text-lg text-muted-foreground">We deliver throughout the Greater Topeka region</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {["Topeka", "Kansas City", "Overland Park", "Lawrence"].map((city) => (
              <Link
                key={city}
                href={`/cities/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition text-center"
              >
                <h3 className="font-semibold text-lg mb-2">{city}</h3>
                <p className="text-sm text-muted-foreground">Serving the {city} area</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Wellness?</h2>
          <p className="text-lg opacity-90 mb-8">
            Book your sauna experience today and transform your relaxation routine.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition text-lg"
          >
            Book Now <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </main>
  )
}
