import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();

    // Validate required fields (removed timeSlot requirement)
    if (!bookingData.date || !bookingData.name || !bookingData.email || !bookingData.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create the booking (timeSlot is now optional/null)
    const { data: booking, error } = await supabase
      .from('bookings')
      .insert({
        booking_date: bookingData.date,
        time_slot: bookingData.timeSlot || null, // Allow null or empty time slot
        service_type: bookingData.serviceType,
        duration: bookingData.duration,
        guests: parseInt(bookingData.guests),
        customer_name: bookingData.name,
        customer_email: bookingData.email,
        customer_phone: bookingData.phone,
        location: bookingData.location,
        add_ons: bookingData.addOns || [],
        special_requests: bookingData.message || null,
        status: 'pending', // Changed to 'pending' since no specific time is confirmed yet
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      throw error;
    }

    // Send confirmation emails
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                      (process.env.NODE_ENV === 'production' 
                        ? 'https://banyahouse.com' 
                        : 'http://localhost:3000');
      
      await fetch(`${baseUrl}/api/send-confirmation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });
    } catch (emailError) {
      console.error('Failed to send emails:', emailError);
      // Don't fail the booking if email fails
    }

    return NextResponse.json({ 
      success: true, 
      booking,
      message: 'Booking request received! We will contact you to confirm the delivery time.'
    });
  } catch (error: any) {
    console.error('Booking creation error:', error);

    return NextResponse.json(
      { error: 'Failed to create booking. Please try again or call us at (785) 501-3414.' },
      { status: 500 }
    );
  }
}