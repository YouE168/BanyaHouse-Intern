import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, date, duration, guests, location, addOns, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'BanyaHouse Bookings <onboarding@resend.dev>', // Resend verified sender
      to: ['topmobilesauna@gmail.com'], // Your email
      replyTo: email, // Customer's email
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
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}