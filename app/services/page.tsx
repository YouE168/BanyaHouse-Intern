import { Check } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | BanyaHouse – Mobile Sauna Rentals Topeka, KS",
  description:
    "Explore our mobile sauna rental services and pricing in Topeka, Kansas. Private group sessions, delivered experiences, hourly and overnight rentals starting at $75/hour.",
  alternates: {
    canonical: "https://banyahouse.com/services",
  },
  openGraph: {
    title: "Services & Pricing | BanyaHouse",
    description: "Mobile sauna rental services and pricing in Topeka, Kansas",
    url: "https://banyahouse.com/services/",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services & Rentals
          </h1>
          <p className="text-lg opacity-90">
            Explore our offerings and pricing
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Private Group Sessions
              </h2>
              <p className="text-muted-foreground mb-8 text-xl">
                Join us for exclusive sauna experiences. Perfect for friends,
                family, or corporate wellness.
              </p>

              <h3 className="font-bold text-2xl mb-6 text-foreground">
                Included:
              </h3>
              <ul className="space-y-5 mb-10">
                <li className="flex gap-4 items-start">
                  <Check
                    className="text-secondary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-foreground text-lg">
                    Access to sauna (accommodates up to 6 people)
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check
                    className="text-secondary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-foreground text-lg">
                    Towels and wool sauna hats
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check
                    className="text-secondary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-foreground text-lg">
                    Essential oils
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check
                    className="text-secondary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-foreground text-lg">Ice starter</span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check
                    className="text-secondary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-foreground text-lg">
                    Expert guidance on sauna etiquette
                  </span>
                </li>
              </ul>

              <h3 className="font-bold text-2xl mb-6 text-foreground">
                Add-Ons (Extra Charge):
              </h3>
              <ul className="space-y-4 mb-10 text-muted-foreground text-lg">
                <li>• Cold plunge access: +$50</li>
                <li>• Insulated dressing tent: +$50</li>
                <li>• 6 folding camp chairs: By request</li>
              </ul>

              <Link
                href="/book"
                className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Book a Session
              </Link>
            </div>
            <div className="bg-muted/50 rounded-xl overflow-hidden h-full min-h-[600px] flex items-center justify-centerr">
              <img
                src="/pictures/people-enjoying-sauna-session-relaxation.jpg"
                alt="Private sauna session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-muted/50 rounded-xl overflow-hidden h-96 flex items-center justify-center">
              <img
                src="/pictures/sauna-delivery-truck-setup.jpg"
                alt="Sauna delivery"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Delivered Sauna Experience
              </h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Perfect for parties, retreats, events, and extended relaxation
                sessions at your home or venue.
              </p>

              <div className="bg-accent/10 border border-accent rounded-lg p-8 mb-6">
                <h3 className="font-bold text-2xl mb-4 text-foreground">
                  📅 Delivery Times:
                </h3>
                <p className="text-foreground mb-2 text-lg">
                  Weekdays: Drop-off & pick-up after 4pm
                </p>
                <p className="text-muted-foreground text-lg">
                  Weekends: Anytime
                </p>
              </div>

              <h3 className="font-bold text-2xl mb-6 text-foreground">
                Included:
              </h3>
              <ul className="space-y-5 mb-10">
                <li className="flex gap-4 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">
                    Professional delivery, setup, and pickup
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">
                    Firewood + fire starters
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">
                    6 towels and 6 wool sauna hats
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <Check className="text-accent mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground text-lg">
                    Battery-operated lights
                  </span>
                </li>
              </ul>

              <h3 className="font-bold text-2xl mb-6 text-foreground">
                Optional Add-Ons:
              </h3>
              <ul className="space-y-4 mb-10 text-muted-foreground text-lg">
                <li>• Cold plunge + thermometer + ice: +$50</li>
                <li>• Insulated dressing tent: +$50</li>
                <li>• 6 folding camp chairs: By request</li>
              </ul>

              <Link
                href="/book"
                className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Book Delivery
              </Link>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mt-20 pt-20 border-t border-border">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
              Mobile Sauna Rental Pricing
            </h2>

            {/* Delivery Charges */}
            <div className="bg-secondary/10 border border-secondary rounded-lg p-8 mb-12">
              <h3 className="font-bold text-2xl mb-4 text-foreground">
                🚚 Delivery Charges
              </h3>
              <p className="text-foreground mb-2 text-lg">
                First 30 miles (one way):{" "}
                <span className="font-bold">FREE</span>
              </p>
              <p className="text-muted-foreground text-lg">
                Additional mileage: $1.50/mile (one way)
              </p>
              <p className="text-sm text-muted-foreground mt-3 italic">
                Applies beyond the 30-mile radius
              </p>
            </div>

            {/* Main Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl p-8 border-2 border-primary shadow-lg">
                <h3 className="font-bold text-2xl mb-3 text-foreground">
                  Hourly Rental
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  $75<span className="text-xl">/hour</span>
                </div>
                <p className="text-muted-foreground mb-4">2-hour minimum</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Perfect for quick sessions</li>
                  <li>✓ All standard amenities included</li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-8 border-2 border-primary shadow-lg">
                <h3 className="font-bold text-2xl mb-3 text-foreground">
                  Overnight Rental
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  $200<span className="text-xl">/night</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Delivery, setup, pickup included
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Full access all night</li>
                  <li>✓ All standard amenities</li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-8 border-2 border-primary shadow-lg">
                <h3 className="font-bold text-2xl mb-3 text-foreground">
                  Additional Night
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  +$100<span className="text-xl">/night</span>
                </div>
                <p className="text-muted-foreground mb-4">Extend your rental</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Continue your experience</li>
                  <li>✓ Full access maintained</li>
                </ul>
              </div>
            </div>

            {/* Weekly Rentals */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="font-bold text-2xl mb-3 text-foreground">
                  Weekly Rental (5 Nights)
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">$600</div>
                <p className="text-muted-foreground">
                  Sunday–Friday rental window
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="font-bold text-2xl mb-3 text-foreground">
                  Weekly Rental (7 Nights)
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">$700</div>
                <p className="text-muted-foreground">Full 7-night experience</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-12 py-5 rounded-lg font-semibold text-xl hover:opacity-90 transition"
              >
                Book Your Experience Now
              </Link>
              <p className="text-muted-foreground mt-4 text-lg">
                Questions?{" "}
                <Link
                  href="/contact"
                  className="text-primary font-semibold hover:opacity-80"
                >
                  Contact us
                </Link>{" "}
                for custom packages
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
