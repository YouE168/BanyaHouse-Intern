import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('🔍 API Route called');
  
  try {
    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set!');
      return NextResponse.json({ 
        error: 'Server configuration error: Missing API key',
        details: 'RESEND_API_KEY environment variable is not set'
      }, { status: 500 });
    }

    console.log('✅ API Key exists');

    const body = await request.json();
    console.log('📦 Request body:', body);

    const { name, email, phone, serviceType, date, duration, guests, location, addOns, message } = body;

    console.log('📧 Attempting to send email...');

    const { data, error } = await resend.emails.send({
      from: 'BanyaHouse Bookings <onboarding@resend.dev>',
      to: ['topmobilesauna@gmail.com'],
      replyTo: email,
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Duration:</strong> ${duration} hours</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Location:</strong> ${location}</p>
        ${addOns && addOns.length > 0 ? `<p><strong>Add-Ons:</strong> ${addOns.join(', ')}</p>` : ''}
        ${message ? `<p><strong>Special Requests:</strong> ${message}</p>` : ''}
      `,
    });

    if (error) {
      console.error('❌ Resend API error:', error);
      return NextResponse.json({ 
        error: 'Failed to send email',
        details: error
      }, { status: 400 });
    }

    console.log('✅ Email sent successfully:', data);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('❌ Unexpected error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Add GET method for testing
export async function GET() {
  return NextResponse.json({ 
    status: 'API route is working',
    apiKeyConfigured: !!process.env.RESEND_API_KEY,
    timestamp: new Date().toISOString()
  });
}