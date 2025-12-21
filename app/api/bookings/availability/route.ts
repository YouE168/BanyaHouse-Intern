import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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

    // Get all confirmed bookings for the specified date
    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('time_slot')
      .eq('booking_date', date)
      .in('status', ['confirmed', 'pending']);

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    // Extract just the time slots
    const bookedTimeSlots = bookings?.map(b => b.time_slot) || [];

    return NextResponse.json({ 
      date,
      bookedTimeSlots,
      availableSlots: [], // Frontend will calculate this
    });
  } catch (error) {
    console.error('Availability check error:', error);
    return NextResponse.json(
      { error: 'Failed to check availability' },
      { status: 500 }
    );
  }
}