"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
  bookedDates?: string[]; // Array of dates in YYYY-MM-DD format
  minDate?: string;
}

export default function ModernCalendar({
  selectedDate,
  onDateSelect,
  bookedDates = [],
  minDate,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const { daysInMonth, startingDayOfWeek, year, month } =
    getDaysInMonth(currentMonth);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const formatDateString = (year: number, month: number, day: number) => {
    const monthStr = String(month + 1).padStart(2, "0");
    const dayStr = String(day).padStart(2, "0");
    return `${year}-${monthStr}-${dayStr}`;
  };

  const isDateBooked = (dateStr: string) => {
    return bookedDates.includes(dateStr);
  };

  const isDatePast = (dateStr: string) => {
    if (!minDate) return false;
    return dateStr < minDate;
  };

  const isDateSelected = (dateStr: string) => {
    return dateStr === selectedDate;
  };

  const handleDateClick = (day: number) => {
    const dateStr = formatDateString(year, month, day);
    if (!isDatePast(dateStr) && !isDateBooked(dateStr)) {
      onDateSelect(dateStr);
    }
  };

  // Create array for empty cells before first day
  const emptyCells = Array(startingDayOfWeek).fill(null);
  const dayCells = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={previousMonth}
          className="p-2 hover:bg-muted rounded-lg transition"
          aria-label="Previous month"
        >
          <ChevronLeft size={20} className="text-foreground" />
        </button>
        <h3 className="text-xl font-bold text-foreground">
          {monthNames[month]} {year}
        </h3>
        <button
          type="button"
          onClick={nextMonth}
          className="p-2 hover:bg-muted rounded-lg transition"
          aria-label="Next month"
        >
          <ChevronRight size={20} className="text-foreground" />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-semibold text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Empty cells for days before month starts */}
        {emptyCells.map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}

        {/* Day cells */}
        {dayCells.map((day) => {
          const dateStr = formatDateString(year, month, day);
          const isBooked = isDateBooked(dateStr);
          const isPast = isDatePast(dateStr);
          const isSelected = isDateSelected(dateStr);
          const isDisabled = isBooked || isPast;

          return (
            <button
              key={day}
              type="button"
              onClick={() => handleDateClick(day)}
              disabled={isDisabled}
              className={`
                aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all
                ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary ring-offset-2"
                    : ""
                }
                ${
                  isBooked && !isSelected
                    ? "bg-pink-200 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 cursor-not-allowed line-through"
                    : ""
                }
                ${
                  isPast && !isBooked && !isSelected
                    ? "text-muted-foreground/40 cursor-not-allowed"
                    : ""
                }
                ${
                  !isDisabled && !isSelected
                    ? "hover:bg-secondary hover:text-secondary-foreground cursor-pointer"
                    : ""
                }
                ${
                  !isDisabled && !isSelected && !isPast ? "text-foreground" : ""
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary"></div>
          <span className="text-muted-foreground">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-pink-200 dark:bg-pink-900/40"></div>
          <span className="text-muted-foreground">Unavailable</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-secondary bg-secondary/10"></div>
          <span className="text-muted-foreground">Available</span>
        </div>
      </div>
    </div>
  );
}
