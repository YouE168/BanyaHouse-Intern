"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main>
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">Get in touch with our team</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Phone</h3>
              <a
                href="tel:+17855013414"
                className="text-primary hover:opacity-80 transition"
              >
                (785) 501-3414
              </a>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
              <a
                href="mailto:topmobilesauna@gmail.com"
                className="text-primary hover:opacity-80 transition"
              >
                topmobilesauna@gmail.com
              </a>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">
                Address
              </h3>
              <p className="text-muted-foreground">
                3339 SW 34th Ct
                <br />
                Topeka, KS 66614
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-background text-foreground"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Hours & Info
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-foreground">
                    <Clock size={20} />
                    Operating Hours
                  </h3>
                  <p className="text-muted-foreground">
                    We operate year-round with flexible scheduling to
                    accommodate your lifestyle. Sessions available morning,
                    afternoon, and evening.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">
                    Service Area
                  </h3>
                  <p className="text-muted-foreground">
                    We proudly serve Topeka, Kansas City, Overland Park,
                    Lawrence, and surrounding areas throughout Kansas.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">
                    Response Time
                  </h3>
                  <p className="text-muted-foreground">
                    We respond to all inquiries within 24 hours. For urgent
                    requests, please call directly.
                  </p>
                </div>

                <div className="bg-secondary/10 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">
                    Follow us on social media for updates, wellness tips, and
                    special offers!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
