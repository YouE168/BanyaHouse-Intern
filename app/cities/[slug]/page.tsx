import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Redirect Topeka to homepage to avoid keyword cannibalization
  if (slug === "topeka") {
    permanentRedirect("/");

  const metaData = {
    "kansas-city": {
      title: "Mobile Sauna Rentals in Kansas City | BanyaHouse",
      description:
        "Premium mobile sauna and cold plunge rentals in Kansas City, Kansas. Book private sessions and delivered experiences.",
      url: "https://banyahouse.com/cities/kansas-city",
    },
    "overland-park": {
      title: "Mobile Sauna Rentals in Overland Park | BanyaHouse",
      description:
        "Premium mobile sauna and cold plunge rentals in Overland Park, Kansas. Book private sessions and delivered experiences.",
      url: "https://banyahouse.com/cities/overland-park",
    },
    lawrence: {
      title: "Mobile Sauna Rentals in Lawrence | BanyaHouse",
      description:
        "Premium mobile sauna and cold plunge rentals in Lawrence, Kansas. Perfect for student groups, events, and corporate wellness.",
      url: "https://banyahouse.com/cities/lawrence",
    },
  };

  const meta = metaData[slug as keyof typeof metaData];

  if (!meta) {
    return {
      title: "Service Area | BanyaHouse",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.url,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.url,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Redirect Topeka to homepage to avoid keyword cannibalization
  if (slug === "topeka") {
    permanentRedirect("/");
  }

  const cityData = {
    "kansas-city": {
      name: "Kansas City",
      title: "Mobile Sauna Rentals in Kansas City",
      description: "",
      details: [
        "Serving the greater Kansas City metropolitan area",
        "Professional delivery and setup",
        "Premium sauna experiences",
        "Extended rental options available",
      ],
      address: "3339 SW34th Ct, Topeka, KS 66614",
      phone: "(785) 501-3414",
      email: "topmobilesauna@gmail.com",
    },
    "overland-park": {
      name: "Overland Park",
      title: "Mobile Sauna Rentals in Overland Park",
      description: "",
      details: [
        "Serving the Overland Park area",
        "Premium wellness experiences",
        "Full-service delivery and setup",
        "Same-day and advance scheduling",
      ],
      address: "3339 SW34th Ct, Topeka, KS 66614",
      phone: "(785) 501-3414",
      email: "topmobilesauna@gmail.com",
    },
    lawrence: {
      name: "Lawrence",
      title: "Mobile Sauna Rentals in Lawrence",
      description: "",
      details: [
        "Serving the Lawrence area",
        "Perfect for student groups and events",
        "Professional wellness experiences",
        "Corporate and private group options",
      ],
      address: "3339 SW34th Ct, Topeka, KS 66614",
      phone: "(785) 501-3414",
      email: "topmobilesauna@gmail.com",
    },
  };

  const city = cityData[slug as keyof typeof cityData];

  if (!city) {
    return (
      <main>
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Area Not Found
            </h1>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/cities"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4"
          >
            <ArrowLeft size={20} />
            Back to Service Areas
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{city.title}</h1>
          <p className="text-lg opacity-90">{city.description}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose BanyaHouse in {city.name}?
              </h2>
              <ul className="space-y-4">
                {city.details.map((detail, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary-foreground text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-lg">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-8 bg-muted/50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                <p className="text-muted-foreground mb-6">
                  Experience premium wellness with BanyaHouse. We deliver and
                  setup everything for you.
                </p>
                <Link
                  href="/book"
                  className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Book Now for {city.name}
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border h-fit">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <MapPin
                    className="text-secondary mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      Address
                    </p>
                    <p>{city.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone
                    className="text-secondary mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${city.phone}`}
                      className="text-secondary hover:underline"
                    >
                      {city.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail
                    className="text-secondary mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${city.email}`}
                      className="text-secondary hover:underline break-all"
                    >
                      {city.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-border">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Offerings</h3>
              <h4 className="font-bold text-lg mb-2">Private Group Sessions</h4>
              <p className="text-muted-foreground mb-4">
                Host a private escape at a time that works best for you. Our
                sauna accommodates 6 people with towels, hats, and lounging area
                included.
              </p>
              <h4 className="font-bold text-lg mb-2 mt-6">
                Delivered Experience
              </h4>
              <p className="text-muted-foreground">
                Perfect for parties, retreats, or extended sessions. We deliver,
                setup, and handle everything. Rental options from 2-4 hours to
                3-day rentals.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-secondary font-bold">•</span>
                  <span>Delivery, setup, and takedown</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-secondary font-bold">•</span>
                  <span>Firewood starter package</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-secondary font-bold">•</span>
                  <span>Cold plunge with ice</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-secondary font-bold">•</span>
                  <span>Towels and wool sauna hats</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-secondary font-bold">•</span>
                  <span>Expert guidance and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Wellness?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Book your sauna experience in {city.name} today.
          </p>
          <Link
            href="/book"
            className="inline-block bg-secondary text-secondary-foreground px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "kansas-city" },
    { slug: "overland-park" },
    { slug: "lawrence" },
  ];
}
