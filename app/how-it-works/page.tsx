import { CheckCircle, Truck, Flame, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | BanyaHouse",
  description:
    "Learn how to book and enjoy your mobile sauna experience in Topeka. Simple 4-step process: book online, we deliver and setup, you relax and enjoy premium wellness.",
  alternates: {
    canonical: "https://banyahouse.com/how-it-works",
  },
  openGraph: {
    title: "How It Works | BanyaHouse",
    description:
      "Simple 4-step process to book your mobile sauna experience in Topeka",
    url: "https://banyahouse.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <main>
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-lg opacity-90">
            From booking to enjoying your sauna experience
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: CheckCircle,
                num: "1",
                title: "Book Your Experience",
                desc: "Choose your preferred time and experience type",
              },
              {
                icon: Users,
                num: "2",
                title: "Confirm Details",
                desc: "We contact you within 24 hours to confirm and answer questions",
              },
              {
                icon: Truck,
                num: "3",
                title: "Delivery & Setup",
                desc: "We arrive 1 hour before your session. Weekdays: after 4pm. Weekends: anytime",
              },
              {
                icon: Flame,
                num: "4",
                title: "Enjoy & Relax",
                desc: "Relax and enjoy! Towels, hats, essential oils—everything you need is included",
              },
            ].map((step, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {step.num}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Setup & Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-foreground">
                  📍 Sauna Space Requirements
                </h3>
                <ul className="space-y-3 text-muted-foreground text-lg">
                  <li>• Flat, level parking space</li>
                  <li>• Minimum 15' x 15' area</li>
                  <li>• Easy access for our trailer</li>
                  <li>• Self-sufficient (no electrical outlet needed)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-foreground">
                  💧 Cold Plunge Requirements
                </h3>
                <ul className="space-y-3 text-muted-foreground text-lg">
                  <li>• Water line connection (if cold plunge is added)</li>
                  <li>• Drain nearby (or we can manage)</li>
                  <li>• We provide ice for first day</li>
                  <li>• Confirm water availability in advance</li>
                </ul>
                <p className="text-base text-muted-foreground mt-4 italic">
                  *Cold plunge is an optional add-on
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border mb-8">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Professional delivery & setup",
                "Sauna heating guidance",
                "Firewood starter package",
                "Towels & wool sauna hats",
                "Essential oils",
                "Ice starter",
                "Professional teardown",
                "All safety instructions",
                "24/7 support number",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle
                    className="text-secondary flex-shrink-0"
                    size={24}
                  />
                  <span className="text-foreground text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Rental Options & Add-Ons
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-bold text-xl mb-4 text-foreground">
                  📅 Rental Durations
                </h3>
                <ul className="space-y-3">
                  {[
                    "2–4 hour sessions",
                    "24-hour overnight rental",
                    "3-day weekday or weekend rentals",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle
                        className="text-secondary flex-shrink-0"
                        size={24}
                      />
                      <span className="text-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-foreground">
                  ➕ Optional Add-Ons
                </h3>
                <ul className="space-y-3 text-muted-foreground text-lg">
                  <li>• Cold plunge with ice setup</li>
                  <li>• Insulated dressing room</li>
                  <li>• Chairs</li>
                  <li>
                    • Sauna attendant (tends the fire for a seamless experience)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary/10 border border-secondary rounded-lg p-8 mt-6">
              <h3 className="font-bold text-xl mb-4 text-foreground">
                🕐 Delivery Schedule
              </h3>
              <p className="text-foreground mb-2 text-lg">
                <strong>Weekdays:</strong> Drop-off and pick-up after 4pm
              </p>
              <p className="text-foreground text-lg">
                <strong>Weekends:</strong> Flexible scheduling available anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
