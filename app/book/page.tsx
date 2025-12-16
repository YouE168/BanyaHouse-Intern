import type { Metadata } from "next";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title:
    "Book Your Sauna Experience | BanyaHouse – Mobile Sauna Rentals Topeka",
  description:
    "Schedule your private sauna session or delivery in Topeka, KS. Choose from 2-hour sessions, overnight rentals, or multi-day experiences. Call (785) 501-3414 to book.",
  alternates: {
    canonical: "https://banyahouse.com/book/",
  },
  openGraph: {
    title: "Book Your Sauna Experience | BanyaHouse",
    description:
      "Schedule your private sauna session or delivery in Topeka, KS",
    url: "https://banyahouse.com/book/",
  },
};

export default function BookPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Sauna Experience
          </h1>
          <p className="text-lg opacity-90">
            Schedule your private session or delivery today
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>
    </main>
  );
}
