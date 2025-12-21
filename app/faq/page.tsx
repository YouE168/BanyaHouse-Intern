import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | BanyaHouse",
  description:
    "Frequently asked questions about our mobile sauna rentals in Topeka, Kansas. Learn about booking, pricing, safety, and more.",
  alternates: {
    canonical: "https://banyahouse.com/faq",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      q: "How many people can use the sauna at once?",
      a: "Our sauna comfortably accommodates 6 people. Larger groups can rotate through sessions for a seamless experience.",
    },
    {
      q: "What is included in the rental?",
      a: "Every rental includes: access to sauna & cold plunge, towels, wool sauna hats, lounging area, professional setup/teardown (for deliveries), and expert guidance on sauna use.",
    },
    {
      q: "Do I need any prior experience?",
      a: "No experience necessary! Our team walks you through the entire process. We provide full guidance on sauna etiquette, temperature control, and safety.",
    },
    {
      q: "What is the minimum age requirement?",
      a: "Adults 18+. Minors (13-17) are welcome with parental supervision. Special arrangements may be needed for groups.",
    },
    {
      q: "Can I cancel or reschedule?",
      a: "Yes! Cancellations up to 48 hours in advance receive a full refund. Rescheduling is available with 24 hours notice.",
    },
    {
      q: "What if I have health concerns?",
      a: "Saunas are generally safe, but consult your doctor if you have heart conditions, high blood pressure, or other concerns. Pregnant women should limit time to short sessions at lower temperatures.",
    },
    {
      q: "Do you offer sauna attendants?",
      a: "Yes! For an additional fee, we provide professional attendants who manage the fire and ensure optimal sauna conditions.",
    },
    {
      q: "What space do I need for delivery?",
      a: "We need a flat, level parking space of at least 15'x15' with easy access for our trailer. Cold plunge water line access is also required.",
    },
    {
      q: "Can I book multiple days?",
      a: "We offer 2-4 hour sessions, 24-hour overnight rentals, and multi-day packages for extended wellness experiences.",
    },
    {
      q: "Are gift cards available?",
      a: "Yes! We offer gift cards in any denomination. They never expire and are perfect for any occasion.",
    },
  ];

  return (
    <main>
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg opacity-90">
            Everything you need to know about our sauna experiences
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="hover:text-primary transition">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
