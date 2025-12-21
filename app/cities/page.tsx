import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | BanyaHouse",
  description:
    "BanyaHouse serves Topeka, Kansas City, Overland Park, Lawrence, and surrounding areas throughout Kansas.",
  alternates: {
    canonical: "https://banyahouse.com/cities",
  },
};

export default function CitiesPage() {
  const cities = [
    {
      name: "Topeka",
      description: "Our home base. Serving Topeka and surrounding areas.",
    },
    {
      name: "Kansas City",
      description: "Serving the greater Kansas City metropolitan area.",
    },
    {
      name: "Overland Park",
      description: "Premium sauna experiences in Overland Park.",
    },
    {
      name: "Lawrence",
      description: "University town wellness services and rentals.",
    },
  ];

  return (
    <main>
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Areas</h1>
          <p className="text-lg opacity-90">
            We serve Kansas and the surrounding region
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
{cities.map((city) => {
  const isTopeka = city.name.toLowerCase() === "topeka";
  const href = isTopeka ? "/" : `/cities/${city.name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link
      key={city.name}
      href={href}
      className="group p-8 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition"
    >
      <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition">
        {city.name}
      </h2>
      <p className="text-muted-foreground mb-4">{city.description}</p>
      <span className="text-primary font-semibold flex items-center gap-2">
        View Details →
      </span>
    </Link>
  );
})}
          </div>
        </div>
      </section>
    </main>
  );
}
