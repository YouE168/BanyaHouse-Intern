export default function AboutPage() {
  return (
    <main>
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About BanyaHouse
          </h1>
          <p className="text-lg opacity-90">
            Bringing wellness and community to Topeka
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              BanyaHouse was founded with a simple mission: to bring the ancient
              wellness traditions of the sauna to the modern community. We
              believe that premium relaxation experiences should be accessible,
              convenient, and tailored to your lifestyle.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our wood-fired sauna experiences combine traditional banya
              practices with contemporary comfort. Whether you're looking for a
              unique gathering space, a wellness retreat, or a memorable
              celebration, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Premium Quality",
                desc: "Professionally maintained wood-fired sauna",
              },
              {
                title: "Expert Service",
                desc: "Knowledgeable team ensuring your comfort",
              },
              {
                title: "Community Focus",
                desc: "Building wellness culture in Topeka",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Why Choose BanyaHouse?
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Locally owned and operated in Topeka",
                "Professional setup and safety standards",
                "Authentic wood-fired sauna experience",
                "Cold plunge therapy included",
                "Expert guidance for all levels",
                "Perfect for groups and private events",
                "24/7 customer support",
                "Flexible scheduling options",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <span className="text-primary font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
