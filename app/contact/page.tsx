import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | BanyaHouse",
  description:
    "Get in touch with BanyaHouse. Call (785) 501-3414 or visit us at 3339 SW 34th Ct, Topeka, KS 66614.",
  alternates: {
    canonical: "https://banyahouse.com/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
