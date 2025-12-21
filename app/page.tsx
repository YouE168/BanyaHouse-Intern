import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flame, Users, Gift, Check } from "lucide-react";
import LocationSection from "@/components/LocationSection";

export const metadata: Metadata = {
  title: "BanyaHouse – Premium Mobile Sauna Rentals in Topeka, KS",
  description:
    "Experience luxury mobile sauna and cold plunge rentals in Topeka, Kansas. Book private sessions, delivered experiences, and wellness retreats. Call (785) 501-3414.",
  keywords:
    "mobile sauna, sauna rental, banya, cold plunge, wellness, Topeka Kansas, sauna delivery",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://banyahouse.com",
    siteName: "BanyaHouse",
    title: "Premium Mobile Sauna Rentals in Topeka, KS",
    description:
      "Experience luxury mobile sauna and cold plunge rentals in Topeka, Kansas. Book private sessions, delivered experiences, and wellness retreats. Call (785) 501-3414.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BanyaHouse Mobile Sauna",
      },
    ],
  },
  alternates: {
    canonical: "https://banyahouse.com",
  },
};

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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Experience Premium Wellness
              </h1>
              <p className="text-lg md:text-xl opacity-95 mb-8 text-balance">
                Experience luxury mobile sauna and cold plunge rentals in
                Topeka, Kansas. Book private sessions, delivered experiences,
                and wellness retreats. Call (785) 501-3414.
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
                  src="/pictures/wood-fired-sauna-barrel-with-warm-glow.jpg"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Offerings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the sauna experience that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Private Sessions */}
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Users className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Private Group Sessions
              </h3>
              <p className="text-muted-foreground mb-6">
                Join us for exclusive sauna experiences. Perfect for friends,
                family, or corporate wellness.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2 items-start">
                  <Check
                    size={20}
                    className="text-secondary mt-0.5 flex-shrink-0"
                  />
                  <span className="text-foreground">
                    Access to sauna (up to 6 people)
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check
                    size={20}
                    className="text-secondary mt-0.5 flex-shrink-0"
                  />
                  <span className="text-foreground">
                    Towels, wool hats & essential oils
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check
                    size={20}
                    className="text-secondary mt-0.5 flex-shrink-0"
                  />
                  <span className="text-foreground">Ice starter included</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Add-ons available:</strong> Cold plunge, dressing room,
                chairs
              </p>
              <Link
                href="/book"
                className="text-secondary font-semibold hover:opacity-80 transition flex items-center gap-2"
              >
                Book Session <ArrowRight size={16} />
              </Link>
            </div>

            {/* Delivered Experience */}
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Flame className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Delivered Sauna Experience
              </h3>
              <p className="text-muted-foreground mb-4">
                Perfect for parties, retreats, events, and extended relaxation
                sessions at your home or venue.
              </p>
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 mb-6">
                <p className="text-sm text-foreground">
                  <strong>📅 Delivery:</strong> Weekdays after 4pm | Weekends
                  anytime
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2 items-start">
                  <Check
                    size={20}
                    className="text-accent mt-0.5 flex-shrink-0"
                  />
                  <span className="text-foreground">
                    Full delivery, setup & takedown
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check
                    size={20}
                    className="text-accent mt-0.5 flex-shrink-0"
                  />
                  <span className="text-foreground">
                    Firewood & essentials included
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check
                    size={20}
                    className="text-accent mt-0.5 flex-shrink-0"
                  />
                  <span className="text-foreground">
                    Optional cold plunge & attendant
                  </span>
                </li>
              </ul>
              <Link
                href="/services"
                className="text-secondary font-semibold hover:opacity-80 transition flex items-center gap-2"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, seamless sauna experiences
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Choose Your Experience",
                desc: "Private session or full delivery",
              },
              {
                step: "2",
                title: "Pick Your Time",
                desc: "Schedule at your convenience",
              },
              {
                step: "3",
                title: "We Set Up",
                desc: "Professional delivery and setup",
              },
              {
                step: "4",
                title: "Enjoy & Relax",
                desc: "Experience premium wellness",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Give the Gift of Wellness
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Perfect for holidays, birthdays, or any occasion. Gift cards
            available in any denomination.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Service Areas
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver throughout the Greater Topeka region
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {["Topeka", "Kansas City", "Overland Park", "Lawrence"].map(
              (city) => (
                <Link
                  key={city}
                  href={`/cities/${city.toLowerCase().replace(/\s+/g, "-")}`}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition text-center"
                >
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {city}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Serving the {city} area
                  </p>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Wellness?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Book your sauna experience today and transform your relaxation
            routine.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition text-lg"
          >
            Book Now <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>

      {/* Location Section */}
      <LocationSection />
    </main>
  );
}
