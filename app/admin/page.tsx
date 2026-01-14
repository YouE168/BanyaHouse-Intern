"use client";
import LogoutButton from "@/components/admin/LogoutButton";

import { useState, useEffect } from "react";
import {
  Calendar,
  X,
  Check,
  Loader2,
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("bookings");
  const [bookings, setBookings] = useState<any[]>([]);
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [expandedBooking, setExpandedBooking] = useState<string | null>(null);

  useEffect(() => {
    fetchBookings();
    fetchBlockedDates();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("/api/admin/all-bookings");
      if (response.ok) {
        const data = await response.json();
        setBookings(data.bookings || []);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const fetchBlockedDates = async () => {
    try {
      const response = await fetch("/api/admin/blocked-dates");
      if (response.ok) {
        const data = await response.json();
        setBlockedDates(data.blockedDates || []);
      }
    } catch (error) {
      console.error("Error fetching blocked dates:", error);
    }
  };

  const updateBookingStatus = async (bookingId: string, newStatus: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/update-booking-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId, status: newStatus }),
      });

      if (response.ok) {
        setMessage(`✓ Booking ${newStatus} successfully`);
        fetchBookings();
      } else {
        setMessage("✗ Failed to update booking");
      }
    } catch (error) {
      setMessage("✗ Error updating booking");
    } finally {
      setLoading(false);
    }
  };

  const blockDate = async () => {
    if (!selectedDate) {
      setMessage("Please select a date");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/block-date", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: selectedDate }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`✓ Date ${selectedDate} blocked successfully`);
        setSelectedDate("");
        fetchBlockedDates();
      } else {
        setMessage(`✗ Error: ${result.error}`);
      }
    } catch (error) {
      setMessage("✗ Failed to block date");
    } finally {
      setLoading(false);
    }
  };

  const unblockDate = async (date: string) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/unblock-date", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date }),
      });

      if (response.ok) {
        setMessage(`✓ Date ${date} unblocked successfully`);
        fetchBlockedDates();
      } else {
        setMessage("✗ Failed to unblock date");
      }
    } catch (error) {
      setMessage("✗ Failed to unblock date");
    } finally {
      setLoading(false);
    }
  };

  const realBookings = bookings.filter(
    (b) => b.customer_name !== "BLOCKED DATE"
  );
  const pendingBookings = realBookings.filter((b) => b.status === "pending");
  const confirmedBookings = realBookings.filter(
    (b) => b.status === "confirmed"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">
              BanyaHouse Admin Dashboard
            </h1>
            <p className="text-orange-100">Manage bookings and availability</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab("bookings")}
                className={`px-6 py-4 font-semibold transition ${
                  activeTab === "bookings"
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                📋 Bookings ({realBookings.length})
              </button>
              <button
                onClick={() => setActiveTab("dates")}
                className={`px-6 py-4 font-semibold transition ${
                  activeTab === "dates"
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                📅 Block Dates ({blockedDates.length})
              </button>
            </div>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`m-6 p-4 rounded-lg ${
                message.startsWith("✓")
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {activeTab === "bookings" && (
              <div>
                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="text-yellow-800 font-semibold mb-1">
                      Pending
                    </div>
                    <div className="text-3xl font-bold text-yellow-900">
                      {pendingBookings.length}
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-green-800 font-semibold mb-1">
                      Confirmed
                    </div>
                    <div className="text-3xl font-bold text-green-900">
                      {confirmedBookings.length}
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="text-blue-800 font-semibold mb-1">
                      Total
                    </div>
                    <div className="text-3xl font-bold text-blue-900">
                      {realBookings.length}
                    </div>
                  </div>
                </div>

                {/* Bookings List */}
                {realBookings.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg">No bookings yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {realBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className={`border-2 rounded-xl overflow-hidden transition ${
                          booking.status === "pending"
                            ? "border-yellow-300 bg-yellow-50"
                            : booking.status === "confirmed"
                            ? "border-green-300 bg-green-50"
                            : "border-gray-300 bg-gray-50"
                        }`}
                      >
                        {/* Booking Header */}
                        <div
                          className="p-4 cursor-pointer"
                          onClick={() =>
                            setExpandedBooking(
                              expandedBooking === booking.id ? null : booking.id
                            )
                          }
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    booking.status === "pending"
                                      ? "bg-yellow-200 text-yellow-800"
                                      : booking.status === "confirmed"
                                      ? "bg-green-200 text-green-800"
                                      : "bg-gray-200 text-gray-800"
                                  }`}
                                >
                                  {booking.status.toUpperCase()}
                                </span>
                                <h3 className="text-lg font-bold text-gray-800">
                                  {booking.customer_name}
                                </h3>
                              </div>
                              <div className="grid md:grid-cols-2 gap-2 text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(
                                    booking.booking_date + "T00:00:00"
                                  ).toLocaleDateString("en-US", {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                  <Users className="w-4 h-4" />
                                  {booking.guests} guests
                                </div>
                              </div>
                            </div>
                            <div>
                              {expandedBooking === booking.id ? (
                                <ChevronUp className="w-6 h-6 text-gray-400" />
                              ) : (
                                <ChevronDown className="w-6 h-6 text-gray-400" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Expanded Details */}
                        {expandedBooking === booking.id && (
                          <div className="border-t border-gray-200 bg-white p-4">
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-xs text-gray-500 mb-1">
                                  Contact
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Mail className="w-4 h-4 text-gray-400" />
                                  <a
                                    href={`mailto:${booking.customer_email}`}
                                    className="text-blue-600 hover:underline"
                                  >
                                    {booking.customer_email}
                                  </a>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="w-4 h-4 text-gray-400" />
                                  <a
                                    href={`tel:${booking.customer_phone}`}
                                    className="text-blue-600 hover:underline"
                                  >
                                    {booking.customer_phone}
                                  </a>
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500 mb-1">
                                  Location
                                </div>
                                <div className="flex items-start gap-2">
                                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                                  <span className="text-gray-700">
                                    {booking.location}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-xs text-gray-500 mb-1">
                                  Duration
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-700">
                                    {booking.duration === "2"
                                      ? "2-4 Hours"
                                      : booking.duration === "24"
                                      ? "24 Hours"
                                      : "3 Days"}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500 mb-1">
                                  Service Type
                                </div>
                                <span className="text-gray-700 capitalize">
                                  {booking.service_type}
                                </span>
                              </div>
                            </div>

                            {booking.add_ons && booking.add_ons.length > 0 && (
                              <div className="mb-4">
                                <div className="text-xs text-gray-500 mb-1">
                                  Add-ons
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {booking.add_ons.map((addon: string) => (
                                    <span
                                      key={addon}
                                      className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm"
                                    >
                                      {addon}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {booking.special_requests && (
                              <div className="mb-4">
                                <div className="text-xs text-gray-500 mb-1">
                                  Special Requests
                                </div>
                                <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded">
                                  {booking.special_requests}
                                </p>
                              </div>
                            )}

                            {/* Actions */}
                            <div className="flex gap-2 pt-4 border-t border-gray-200">
                              {booking.status === "pending" && (
                                <button
                                  onClick={() =>
                                    updateBookingStatus(booking.id, "confirmed")
                                  }
                                  disabled={loading}
                                  className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 flex items-center gap-2"
                                >
                                  <Check className="w-4 h-4" />
                                  Confirm Booking
                                </button>
                              )}
                              {(booking.status === "pending" ||
                                booking.status === "confirmed") && (
                                <button
                                  onClick={() =>
                                    updateBookingStatus(booking.id, "cancelled")
                                  }
                                  disabled={loading}
                                  className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-50 flex items-center gap-2"
                                >
                                  <X className="w-4 h-4" />
                                  Cancel
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "dates" && (
              <div>
                {/* Block Date Form */}
                <div className="mb-8 p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Block a Date
                  </h2>
                  <div className="flex gap-4 items-end">
                    <div className="flex-1">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Select Date to Block
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={blockDate}
                      disabled={loading || !selectedDate}
                      className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <X className="w-5 h-5" />
                      )}
                      Block Date
                    </button>
                  </div>
                </div>

                {/* Blocked Dates List */}
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Currently Blocked Dates ({blockedDates.length})
                </h2>
                {blockedDates.length === 0 ? (
                  <p className="text-gray-500 italic">No dates are blocked</p>
                ) : (
                  <div className="grid gap-3">
                    {blockedDates.map((date) => (
                      <div
                        key={date}
                        className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <X className="w-5 h-5 text-red-600" />
                          <span className="font-semibold text-gray-800">
                            {new Date(date + "T00:00:00").toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <button
                          onClick={() => unblockDate(date)}
                          disabled={loading}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 flex items-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Unblock
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
