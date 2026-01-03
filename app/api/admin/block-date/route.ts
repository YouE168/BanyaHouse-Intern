import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { date } = await request.json();

    if (!date) {
      return NextResponse.json({ error: 'Date is required' }, { status: 400 });
    }

    // Check if date is already blocked
    const { data: existing } = await supabase
      .from('bookings')
      .select('id')
      .eq('booking_date', date)
      .eq('customer_name', 'BLOCKED DATE')
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'Date is already blocked' },
        { status: 400 }
      );
    }

    // Create blocked date entry
    const { error } = await supabase.from('bookings').insert({
      booking_date: date,
      time_slot: 'Blocked by admin',
      customer_name: 'BLOCKED DATE',
      customer_email: 'admin@banyahouse.com',
      customer_phone: '000-000-0000',
      status: 'confirmed',
      location: 'N/A',
      guests: 1,
      duration: '2',
      service_type: 'private',
    });

    if (error) throw error;

    return NextResponse.json({ success: true, message: 'Date blocked successfully' });
  } catch (error) {
    console.error('Error blocking date:', error);
    return NextResponse.json(
      { error: 'Failed to block date' },
      { status: 500 }
    );
  }
}