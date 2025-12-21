import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Cancellation token is required' },
        { status: 400 }
      );
    }

    // Find and cancel the booking
    const { data: booking, error } = await supabase
      .from('bookings')
      .update({ status: 'cancelled' })
      .eq('cancellation_token', token)
      .in('status', ['confirmed', 'pending']) // Only cancel if not already cancelled
      .select()
      .single();

    if (error || !booking) {
      return NextResponse.json(
        { error: 'Booking not found or already cancelled' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Booking cancelled successfully',
      booking
    });
  } catch (error) {
    console.error('Cancellation error:', error);
    return NextResponse.json(
      { error: 'Failed to cancel booking' },
      { status: 500 }
    );
  }
}

// Also support GET method for direct link clicks
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return new Response('Missing cancellation token', { status: 400 });
    }

    // Find and cancel the booking
    const { data: booking, error } = await supabase
      .from('bookings')
      .update({ status: 'cancelled' })
      .eq('cancellation_token', token)
      .in('status', ['confirmed', 'pending'])
      .select()
      .single();

    if (error || !booking) {
      return new Response('Booking not found or already cancelled', { status: 404 });
    }

    // Return a simple HTML page confirming cancellation
    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Booking Cancelled - BanyaHouse</title>
          <style>
            body { font-family: system-ui; max-width: 600px; margin: 100px auto; padding: 20px; text-align: center; }
            .success { color: #059669; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
            .details { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
            a { color: #7c3aed; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="success">✓ Booking Cancelled</div>
          <p>Your booking has been successfully cancelled.</p>
          <div class="details">
            <p><strong>Date:</strong> ${new Date(booking.booking_date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${booking.time_slot}</p>
            <p><strong>Name:</strong> ${booking.customer_name}</p>
          </div>
          <p>If you'd like to book again, <a href="https://banyahouse.com/book">click here</a>.</p>
        </body>
      </html>
      `,
      {
        headers: { 'Content-Type': 'text/html' },
      }
    );
  } catch (error) {
    console.error('Cancellation error:', error);
    return new Response('Failed to cancel booking', { status: 500 });
  }
}