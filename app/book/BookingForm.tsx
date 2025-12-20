"use client";

import { useState, useEffect } from "react";
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
  const [step, setStep] = useState<"date" | "time" | "details">("date");
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

  // Get time constraints based on service type and date
  const getTimeConstraints = () => {
    if (!formData.date) return { min: "09:00", max: "20:00" };

    const selectedDate = new Date(formData.date + "T00:00:00");
    const isWeekend =
      selectedDate.getDay() === 0 || selectedDate.getDay() === 6;

    if (formData.serviceType === "delivered") {
      // Delivered: After 4pm weekdays, anytime weekends
      if (isWeekend) {
        return { min: "09:00", max: "20:00" };
      } else {
        return { min: "16:00", max: "20:00" };
      }
    } else {
      // Private sessions: Anytime during business hours
      return { min: "09:00", max: "20:00" };
    }
  };

  const timeConstraints = getTimeConstraints();

  const getDeliveryMessage = () => {
    if (formData.serviceType !== "delivered" || !formData.date) return null;

    const selectedDate = new Date(formData.date + "T00:00:00");
    const isWeekend =
      selectedDate.getDay() === 0 || selectedDate.getDay() === 6;

    if (isWeekend) {
      return "We can deliver any time during the day on weekends by arrangement with you.";
    } else {
      return "We deliver after 4 PM from Monday through Friday.";
    }
  };

  const handleAddOnToggle = (addOn: string) => {
    setFormData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(addOn)
        ? prev.addOns.filter((a) => a !== addOn)
        : [...prev.addOns, addOn],
    }));
  };

  const handleDateSelect = (date: string) => {
    setFormData({ ...formData, date, timeSlot: "" });
    setStep("time");
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, timeSlot: e.target.value });
  };

  const handleContinueToDetails = () => {
    if (!formData.timeSlot) {
      alert("Please select a time.");
      return;
    }
    setStep("details");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.waiverAccepted) {
      alert("Please accept the liability waiver to continue.");
      return;
    }

    if (!formData.date || !formData.timeSlot) {
      alert("Please select a date and time.");
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

      if (response.ok) {
        alert(
          "Thank you for your booking request! We will contact you shortly to confirm your time slot."
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
        alert(
          "There was an error sending your request. Please try again or call us at (785) 501-3414."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "There was an error sending your request. Please call us directly at (785) 501-3414."
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
            step === "time"
              ? "text-primary font-semibold"
              : "text-muted-foreground"
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === "time"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            2
          </div>
          <span className="hidden sm:inline">Time</span>
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
            3
          </div>
          <span className="hidden sm:inline">Details</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-lg"
      >
        {/* Service Type Selection - Always visible */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3 text-foreground">
            Service Type *
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  serviceType: "private",
                  date: "",
                  timeSlot: "",
                })
              }
              className={`p-4 rounded-lg border-2 transition ${
                formData.serviceType === "private"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="font-semibold text-foreground">
                Private Session
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Join us at our location
              </div>
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  serviceType: "delivered",
                  date: "",
                  timeSlot: "",
                })
              }
              className={`p-4 rounded-lg border-2 transition ${
                formData.serviceType === "delivered"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="font-semibold text-foreground">Delivery</div>
              <div className="text-sm text-muted-foreground mt-1">
                We come to you
              </div>
            </button>
          </div>
        </div>

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
            {formData.serviceType === "delivered" && (
              <p className="text-xs text-muted-foreground mt-4 p-3 bg-muted/50 rounded-lg">
                📅 We deliver after 4 PM from Monday through Friday. On Saturday
                and Sunday, we can deliver any time during the day by
                arrangement with the client.
              </p>
            )}
          </div>
        )}

        {/* Step 2: Time Input */}
        {step === "time" && (
          <div>
            <button
              type="button"
              onClick={() => setStep("date")}
              className="text-sm text-primary hover:opacity-80 mb-4"
            >
              ← Change Date
            </button>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Selected Date
            </h3>
            <p className="text-foreground mb-6 p-3 bg-primary/10 rounded-lg">
              {new Date(formData.date + "T00:00:00").toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>

            {formData.serviceType === "delivered" && (
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  ℹ️ {getDeliveryMessage()}
                </p>
              </div>
            )}

            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Select Your Time
            </h3>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-foreground">
                Preferred Time *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {(() => {
                  const slots = [];
                  const minHour = parseInt(timeConstraints.min.split(":")[0]);
                  const maxHour = parseInt(timeConstraints.max.split(":")[0]);

                  for (let hour = minHour; hour <= maxHour; hour++) {
                    const time24 = `${hour.toString().padStart(2, "0")}:00`;
                    const timeDisplay = new Date(
                      `2000-01-01T${time24}`
                    ).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    });

                    slots.push(
                      <button
                        key={time24}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, timeSlot: time24 })
                        }
                        className={`relative p-4 rounded-xl border-2 transition-all font-medium ${
                          formData.timeSlot === time24
                            ? "border-primary bg-primary text-primary-foreground shadow-lg scale-105"
                            : "border-border hover:border-primary/50 hover:bg-primary/5 text-foreground"
                        }`}
                      >
                        <Clock
                          className={`h-4 w-4 mx-auto mb-1 ${
                            formData.timeSlot === time24
                              ? "opacity-100"
                              : "opacity-60"
                          }`}
                        />
                        <div className="text-base">{timeDisplay}</div>
                      </button>
                    );
                  }
                  return slots;
                })()}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-2 rounded-lg">
                <span className="font-medium">💡 Tip:</span>
                <span>Select your preferred start time</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleContinueToDetails}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Continue to Details
            </button>

            <p className="text-xs text-muted-foreground mt-4 text-center italic">
              Note: Final availability will be confirmed within 24 hours
            </p>
          </div>
        )}

        {/* Step 3: Details Form */}
        {step === "details" && (
          <div>
            <button
              type="button"
              onClick={() => setStep("time")}
              className="text-sm text-primary hover:opacity-80 mb-4"
            >
              ← Change Time
            </button>

            <div className="mb-6 p-4 bg-primary/10 rounded-lg">
              <div className="text-sm text-muted-foreground">
                Booking Summary:
              </div>
              <div className="font-semibold text-foreground">
                {new Date(formData.date + "T00:00:00").toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}{" "}
                at{" "}
                {new Date(`2000-01-01T${formData.timeSlot}`).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  }
                )}
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
                Special Requests
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-background text-foreground"
                placeholder="Any special requests?"
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
              We'll confirm your booking within 24 hours
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
