import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// This route is now optional since we removed time slot selection
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Get all bookings for the specified date
    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('booking_date', date)
      .in('status', ['confirmed', 'pending']);

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    // Return basic availability info
    return NextResponse.json({ 
      date,
      bookingCount: bookings?.length || 0,
      bookings: bookings || [],
      bookedTimeSlots: [], 
    });
  } catch (error) {
    console.error('Availability check error:', error);
    return NextResponse.json(
      { error: 'Failed to check availability' },
      { status: 500 }
    );
  }
}