"use client";

import { useState } from "react";
import { Clock, Users, MapPin, X } from "lucide-react";
import ModernCalendar from "./ModernCalendar";

interface BookingFormProps {
  isPopup?: boolean;
  onClose?: () => void;
}

export default function BookingForm({
  isPopup = false,
  onClose = () => {},
}: BookingFormProps) {
  const [step, setStep] = useState<"date" | "details">("date");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "private",
    date: "",
    timeSlot: "",
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

  const handleDateSelect = (date: string) => {
    setFormData({ ...formData, date });
    setStep("details");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.waiverAccepted) {
      alert("Please accept the liability waiver to continue.");
      return;
    }

    if (!formData.date) {
      alert("Please select a date.");
      return;
    }

    try {
      // Create booking in database
      const response = await fetch("/api/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          "Thank you for your booking! We will contact you shortly to confirm your reservation."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "private",
          date: "",
          timeSlot: "",
          duration: "2",
          guests: "4",
          location: "",
          addOns: [],
          waiverAccepted: false,
          message: "",
        });
        setStep("date");
        if (isPopup) onClose();
      } else {
        // Handle specific error messages
        alert(
          result.error ||
            "There was an error. Please try again or call us at (785) 501-3414."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "There was an error sending your request. Please try again or call us directly at (785) 501-3414."
      );
    }
  };

  return (
    <div className={`${isPopup ? "max-h-[90vh] overflow-y-auto" : ""}`}>
      {isPopup && (
        <div className="flex items-center justify-between mb-6 sticky top-0 bg-card z-10 pb-4">
          <h2 className="text-2xl font-bold text-foreground">
            Book Your Experience
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div
          className={`flex items-center gap-2 ${
            step === "date"
              ? "text-primary font-semibold"
              : "text-muted-foreground"
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === "date"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            1
          </div>
          <span className="hidden sm:inline">Date</span>
        </div>
        <div className="w-8 h-0.5 bg-border" />
        <div
          className={`flex items-center gap-2 ${
            step === "details"
              ? "text-primary font-semibold"
              : "text-muted-foreground"
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === "details"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            2
          </div>
          <span className="hidden sm:inline">Details</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-lg"
      >
        {/* Step 1: Date Selection */}
        {step === "date" && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Select Your Date
            </h3>
            <ModernCalendar
              selectedDate={formData.date}
              onDateSelect={handleDateSelect}
              bookedDates={[]}
              minDate={
                new Date(Date.now() + 86400000).toISOString().split("T")[0]
              }
            />

            {/* Delivery Time Information */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Clock size={18} className="text-blue-600 dark:text-blue-400" />
                Delivery Schedule
              </h4>
              <div className="space-y-2 text-sm text-foreground">
                <p className="flex items-start gap-2">
                  <span className="font-medium min-w-[90px]">Weekdays:</span>
                  <span className="text-muted-foreground">After 4:00 PM</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-medium min-w-[90px]">Weekends:</span>
                  <span className="text-muted-foreground">Anytime</span>
                </p>
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                We'll contact you to confirm the exact delivery time after
                booking
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Details Form */}
        {step === "details" && (
          <div>
            <button
              type="button"
              onClick={() => setStep("date")}
              className="text-sm text-primary hover:opacity-80 mb-4"
            >
              ← Change Date
            </button>

            <div className="mb-6 p-4 bg-primary/10 rounded-lg">
              <div className="text-sm text-muted-foreground">
                Selected Date:
              </div>
              <div className="font-semibold text-foreground">
                {new Date(formData.date + "T00:00:00").toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {new Date(formData.date + "T00:00:00").getDay() === 0 ||
                new Date(formData.date + "T00:00:00").getDay() === 6
                  ? "📅 Weekend - Delivery available anytime"
                  : "📅 Weekday - Delivery available after 4:00 PM"}
              </div>
            </div>

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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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

            {/* Add-Ons */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-foreground">
                Optional Add-Ons
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Cold Plunge",
                  "Insulated Dressing Room",
                  "Chairs",
                  "Sauna Attendant",
                ].map((addOn) => (
                  <label
                    key={addOn}
                    className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-border hover:bg-muted/50 transition"
                  >
                    <input
                      type="checkbox"
                      checked={formData.addOns.includes(addOn)}
                      onChange={() => handleAddOnToggle(addOn)}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">{addOn}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-foreground"
              >
                Special Requests / Preferred Time
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-background text-foreground"
                placeholder="Let us know your preferred delivery time or any special requests..."
              />
            </div>

            {/* Liability Waiver */}
            <div className="mb-6 bg-muted/50 border border-border rounded-lg p-4">
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
                  I agree to the{" "}
                  <a
                    href="/liability-waiver.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:opacity-80 underline"
                  >
                    Liability Waiver
                  </a>{" "}
                  *
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Submit Booking Request
            </button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              We'll contact you to confirm the exact delivery time
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
