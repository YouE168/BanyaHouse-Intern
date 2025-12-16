"use client";

import { useState } from "react";
import { Calendar, Clock, Users, MapPin } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "private",
    date: "",
    duration: "2",
    guests: "4",
    location: "",
    addOns: [] as string[],
    waiverAccepted: false,
    message: "",
  });

  const handleAddOnToggle = (addOn: string) => {
    setFormData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(addOn)
        ? prev.addOns.filter((a) => a !== addOn)
        : [...prev.addOns, addOn],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.waiverAccepted) {
      alert("Please accept the liability waiver to continue.");
      return;
    }

    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          "Thank you for your booking request! We will contact you shortly."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "private",
          date: "",
          duration: "2",
          guests: "4",
          location: "",
          addOns: [],
          waiverAccepted: false,
          message: "",
        });
      } else {
        alert(
          "There was an error sending your request. Please try again or call us directly."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "There was an error sending your request. Please try again or call us directly."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-xl p-8 border border-border shadow-lg"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold mb-2 text-foreground"
          >
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Your name"
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
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold mb-2 text-foreground"
          >
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="(785) 501-3414"
          />
        </div>
        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-semibold mb-2 text-foreground"
          >
            Service Type *
          </label>
          <select
            id="serviceType"
            value={formData.serviceType}
            onChange={(e) =>
              setFormData({ ...formData, serviceType: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="private">Private Group Session</option>
            <option value="delivered">Delivered & Setup</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-semibold mb-2 flex items-center gap-2 text-foreground"
          >
            <Calendar size={16} /> Preferred Date *
          </label>
          <input
            id="date"
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          />
          {formData.serviceType === "delivered" && (
            <p className="text-xs text-muted-foreground mt-2">
              Weekdays: Drop-off/pick-up after 4pm | Weekends: Anytime
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-semibold mb-2 flex items-center gap-2 text-foreground"
          >
            <Clock size={16} /> Duration *
          </label>
          <select
            id="duration"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="2">2-4 Hours</option>
            <option value="24">24 Hours (Overnight)</option>
            <option value="72">3 Days</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="guests"
            className="block text-sm font-semibold mb-2 flex items-center gap-2 text-foreground"
          >
            <Users size={16} /> Number of Guests *
          </label>
          <select
            id="guests"
            value={formData.guests}
            onChange={(e) =>
              setFormData({ ...formData, guests: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n.toString()}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-semibold mb-2 flex items-center gap-2 text-foreground"
          >
            <MapPin size={16} /> Location *
          </label>
          <input
            id="location"
            type="text"
            required
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Your address"
          />
        </div>
      </div>

      {/* Add-Ons Section */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3 text-foreground">
          Optional Add-Ons
        </label>
        <div className="space-y-3">
          {[
            "Cold Plunge",
            "Insulated Dressing Room",
            "Chairs",
            "Sauna Attendant",
          ].map((addOn) => (
            <label
              key={addOn}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.addOns.includes(addOn)}
                onChange={() => handleAddOnToggle(addOn)}
                className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
              />
              <span className="text-foreground">{addOn}</span>
            </label>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Additional charges apply for selected add-ons
        </p>
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-semibold mb-2 text-foreground"
        >
          Special Requests
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-background text-foreground"
          placeholder="Any special requests or questions?"
        />
      </div>

      {/* Liability Waiver */}
      <div className="mb-6 bg-muted/50 border border-border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-3 text-foreground">
          Liability Waiver Required
        </h3>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.waiverAccepted}
            onChange={(e) =>
              setFormData({
                ...formData,
                waiverAccepted: e.target.checked,
              })
            }
            className="w-5 h-5 mt-1 text-primary border-border rounded focus:ring-2 focus:ring-primary"
          />
          <span className="text-sm text-foreground">
            I have read and agree to the{" "}
            <a
              href="/liability-waiver.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:opacity-80 underline"
            >
              Liability Waiver and Release of Claims
            </a>{" "}
            *
          </span>
        </label>
        <p className="text-xs text-muted-foreground mt-3">
          Please download, read, and agree to our liability waiver before
          booking.
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
      >
        Request Booking
      </button>

      <p className="text-sm text-muted-foreground text-center mt-4">
        We'll confirm your booking within 24 hours
      </p>
    </form>
  );
}
