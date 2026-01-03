import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { date } = await request.json();

    if (!date) {
      return NextResponse.json({ error: 'Date is required' }, { status: 400 });
    }

    // Delete the blocked date entry
    const { error } = await supabase
      .from('bookings')
      .delete()
      .eq('booking_date', date)
      .eq('customer_name', 'BLOCKED DATE');

    if (error) throw error;

    return NextResponse.json({ success: true, message: 'Date unblocked successfully' });
  } catch (error) {
    console.error('Error unblocking date:', error);
    return NextResponse.json(
      { error: 'Failed to unblock date' },
      { status: 500 }
    );
  }
}