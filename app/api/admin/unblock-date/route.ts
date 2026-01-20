import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { date } = await request.json();

    if (!date) {
      return NextResponse.json({ error: 'Date is required' }, { status: 400 });
    }

    console.log('🗑️ Attempting to delete blocked date:', date);

    // Delete the blocked date entry
    const { data, error } = await supabase
      .from('bookings')
      .delete()
      .eq('booking_date', date)
      .eq('customer_name', 'BLOCKED DATE')
      .select(); // Add .select() to see what was deleted

    console.log('📊 Delete result:', { data, error });

    if (error) {
      console.error('❌ Supabase error:', error);
      throw error;
    }

    if (!data || data.length === 0) {
      console.warn('⚠️ No rows were deleted - might be a permissions issue');
    }

    return NextResponse.json({ success: true, message: 'Date unblocked successfully' });
  } catch (error) {
    console.error('💥 Error unblocking date:', error);
    return NextResponse.json(
      { error: 'Failed to unblock date' },
      { status: 500 }
    );
  }
}