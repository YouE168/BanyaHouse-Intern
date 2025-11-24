import { CheckCircle, Truck, Flame, Users } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <main>
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-lg opacity-90">From booking to enjoying your sauna experience</p>
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
                desc: "Our team walks you through the entire process",
              },
              {
                icon: Truck,
                num: "3",
                title: "Delivery & Setup",
                desc: "We arrive 1 hour before your session. Space needed: 15'x15' flat area with trailer access",
              },
              {
                icon: Flame,
                num: "4",
                title: "Enjoy & Relax",
                desc: "You just relax and enjoy! Towels, hats, everything you need is included",
              },
            ].map((step, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                    {step.num}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Setup & Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2">📍 Sauna Space Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flat, level parking space</li>
                  <li>• Minimum 15\' x 15\' area</li>
                  <li>• Easy access for our trailer</li>
                  <li>• Nearby electrical outlet recommended</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2">💧 Cold Plunge Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Water line access for setup</li>
                  <li>• Drain nearby (or we can manage)</li>
                  <li>• We provide ice for first day</li>
                  <li>• Confirm water availability in advance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6">What Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Professional delivery & setup",
                "Sauna heating guidance",
                "Cold plunge prep & safety tips",
                "Firewood starter package",
                "Towels & wool sauna hats",
                "Professional teardown",
                "All safety instructions",
                "24/7 support number",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6">Rental Options</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "2–4 hour sessions",
                "24-hour overnight rental",
                "3-day weekday or weekend rentals",
                "Optional Sauna Attendant: Have an attendant tend the fire for a seamless experience",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
