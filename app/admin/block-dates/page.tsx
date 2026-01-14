"use client";
import LogoutButton from "@/components/admin/LogoutButton";
import { useState, useEffect } from "react";
import { Calendar, X, Check, Loader2 } from "lucide-react";

export default function AdminBlockDatesPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch currently blocked dates
  useEffect(() => {
    fetchBlockedDates();
  }, []);

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

      const result = await response.json();

      if (response.ok) {
        setMessage(`✓ Date ${date} unblocked successfully`);
        fetchBlockedDates();
      } else {
        setMessage(`✗ Error: ${result.error}`);
      }
    } catch (error) {
      setMessage("✗ Failed to unblock date");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Block/Unblock Dates
            </h1>
          </div>

          {/* Block a new date */}
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

          {/* Message */}
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                message.startsWith("✓")
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}

          {/* Currently blocked dates */}
          <div>
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
        </div>
      </div>
    </div>
  );
}
