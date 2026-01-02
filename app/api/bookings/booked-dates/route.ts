import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Get all confirmed and pending bookings
    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('booking_date')
      .in('status', ['confirmed', 'pending']);

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    // Extract unique dates
    const bookedDates = Array.from(
      new Set<string>(bookings?.map(b => b.booking_date) || [])
    );

    return NextResponse.json({ 
      bookedDates,
      count: bookedDates.length
    });
  } catch (error) {
    console.error('Error fetching booked dates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch booked dates', bookedDates: [] },
      { status: 500 }
    );
  }
}