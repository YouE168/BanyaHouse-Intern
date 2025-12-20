"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import BookingForm from "@/app/book/BookingForm";

export default function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Booking Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 font-semibold"
        aria-label="Book Now"
      >
        <Calendar size={24} />
        <span className="hidden sm:inline">Book Now</span>
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-24 z-50 bg-card rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-full overflow-y-auto p-6 md:p-8">
              <BookingForm isPopup={true} onClose={() => setIsOpen(false)} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
