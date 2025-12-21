"use client";

import { Gift } from "lucide-react";

export default function GiftCardsPage() {
  const openVenmo = (amount: number) => {
    const venmoUsername = "banyahouse";
    const note = "BanyaHouse Gift Card";

    const url = `https://venmo.com/${venmoUsername}?txn=pay&amount=${amount}&note=${encodeURIComponent(
      note
    )}`;

    window.open(url, "_blank");
  };

  const giftCards = [
    { amount: 100, label: "$100", session: "Perfect for one person" },
    { amount: 300, label: "$300", session: "Great for two people" },
    { amount: 500, label: "$500", session: "Premium group experience" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gift Cards</h1>
          <p className="text-lg opacity-90">
            Give the gift of wellness and relaxation
          </p>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {giftCards.map((card, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-secondary to-accent text-secondary-foreground rounded-xl p-8 text-center"
              >
                <Gift size={40} className="mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">{card.label}</div>
                <p className="mb-6">{card.session}</p>

                <button
                  onClick={() => openVenmo(card.amount)}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Purchase Gift Card
                </button>
              </div>
            ))}
          </div>

          {/* Venmo Note Instruction */}
          <p className="text-center text-muted-foreground mb-16">
            After payment, please include your{" "}
            <strong>email or phone number</strong> in the Venmo note so we can
            send your gift card.
          </p>

          {/* How It Works */}
          <div className="bg-muted/50 rounded-xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              How Gift Cards Work
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-bold text-primary text-xl">1.</span>
                <span>Choose a gift card amount</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-primary text-xl">2.</span>
                <span>Complete payment securely via Venmo</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-primary text-xl">3.</span>
                <span>Gift card is delivered by email or physical card</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-primary text-xl">4.</span>
                <span>Recipient books their experience</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-primary text-xl">5.</span>
                <span>No expiration — valid indefinitely</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
