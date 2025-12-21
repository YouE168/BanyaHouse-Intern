import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();

    // Validate required fields
    if (!bookingData.date || !bookingData.timeSlot || !bookingData.name || !bookingData.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if time slot is still available (double-check)
    const { data: existingBooking } = await supabase
      .from('bookings')
      .select('id')
      .eq('booking_date', bookingData.date)
      .eq('time_slot', bookingData.timeSlot)
      .in('status', ['confirmed', 'pending'])
      .single();

    if (existingBooking) {
      return NextResponse.json(
        { error: 'This time slot is no longer available. Please select another time.' },
        { status: 409 }
      );
    }

    // Create the booking
    const { data: booking, error } = await supabase
      .from('bookings')
      .insert({
        booking_date: bookingData.date,
        time_slot: bookingData.timeSlot,
        service_type: bookingData.serviceType,
        duration: bookingData.duration,
        guests: parseInt(bookingData.guests),
        customer_name: bookingData.name,
        customer_email: bookingData.email,
        customer_phone: bookingData.phone,
        location: bookingData.location,
        add_ons: bookingData.addOns || [],
        special_requests: bookingData.message || null,
        status: 'confirmed',
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      throw error;
    }

    // Send confirmation emails
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/send-confirmation`, {
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
      message: 'Booking created successfully'
    });
  } catch (error: any) {
    console.error('Booking creation error:', error);
    
    // Handle unique constraint violation
    if (error?.code === '23505') {
      return NextResponse.json(
        { error: 'This time slot was just booked. Please select another time.' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create booking. Please try again.' },
      { status: 500 }
    );
  }
}