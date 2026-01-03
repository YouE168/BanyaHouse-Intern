import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data: blockedBookings, error } = await supabase
      .from('bookings')
      .select('booking_date')
      .eq('customer_name', 'BLOCKED DATE')
      .eq('status', 'confirmed')
      .order('booking_date', { ascending: true });

    if (error) throw error;

    const blockedDates = blockedBookings?.map(b => b.booking_date) || [];

    return NextResponse.json({ blockedDates });
  } catch (error) {
    console.error('Error fetching blocked dates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blocked dates' },
      { status: 500 }
    );
  }
}