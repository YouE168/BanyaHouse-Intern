import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Cards | BanyaHouse",
  description:
    "Give the gift of wellness with BanyaHouse gift cards. Perfect for mobile sauna experiences in Topeka, Kansas.",
  alternates: {
    canonical: "https://banyahouse.com/gift-cards",
  },
};

export default function GiftCardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
