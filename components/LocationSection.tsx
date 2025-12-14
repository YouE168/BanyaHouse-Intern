export default function LocationSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-foreground">
          Our Location
        </h2>

        <p className="mb-6 text-muted-foreground">
          3339 SW 34th Ct, Topeka, KS 66614
        </p>

        <div className="w-full h-[400px] rounded-xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps?q=3339+SW+34th+Ct+Topeka+KS+66614&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
