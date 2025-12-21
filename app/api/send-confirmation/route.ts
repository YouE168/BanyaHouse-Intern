import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const booking = await request.json();

    const cancellationUrl = `https://banyahouse.com/api/bookings/cancel?token=${booking.cancellation_token}`;

    // Email to Customer
    const customerEmail = await resend.emails.send({
      from: 'BanyaHouse <bookings@banyahouse.com>',
      to: [booking.customer_email],
      subject: '✓ Booking Confirmed - BanyaHouse',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #7c2d12; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .detail-row { display: flex; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
              .detail-label { font-weight: bold; width: 150px; }
              .button { display: inline-block; background: #7c2d12; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
              .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
              .cancel-link { color: #dc2626; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 Booking Confirmed!</h1>
              </div>
              <div class="content">
                <p>Hi ${booking.customer_name},</p>
                <p>Thank you for booking with BanyaHouse! Your sauna experience is confirmed.</p>
                
                <div class="details">
                  <h2>Booking Details</h2>
                  <div class="detail-row">
                    <span class="detail-label">Date:</span>
                    <span>${new Date(booking.booking_date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Time:</span>
                    <span>${booking.time_slot}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Service:</span>
                    <span>${booking.service_type === 'private' ? 'Private Session' : 'Delivered Experience'}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Duration:</span>
                    <span>${booking.duration === '2' ? '2-4 Hours' : booking.duration === '24' ? '24 Hours' : '3 Days'}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Guests:</span>
                    <span>${booking.guests} ${booking.guests === 1 ? 'guest' : 'guests'}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Location:</span>
                    <span>${booking.location}</span>
                  </div>
                  ${booking.add_ons && booking.add_ons.length > 0 ? `
                  <div class="detail-row">
                    <span class="detail-label">Add-ons:</span>
                    <span>${booking.add_ons.join(', ')}</span>
                  </div>
                  ` : ''}
                  ${booking.special_requests ? `
                  <div class="detail-row">
                    <span class="detail-label">Special Requests:</span>
                    <span>${booking.special_requests}</span>
                  </div>
                  ` : ''}
                </div>

                <p><strong>What to Bring:</strong></p>
                <ul>
                  <li>Swimsuit or towel</li>
                  <li>Water bottle</li>
                  <li>Flip flops or sandals</li>
                </ul>

                <p><strong>Contact Information:</strong></p>
                <p>
                  Phone: <a href="tel:+17855013414">(785) 501-3414</a><br>
                  Email: <a href="mailto:topmobilesauna@gmail.com">topmobilesauna@gmail.com</a>
                </p>

                <center>
                  <a href="https://banyahouse.com/book" class="button">View Booking</a>
                </center>

                <div class="footer">
                  <p>Need to cancel? <a href="${cancellationUrl}" class="cancel-link">Click here to cancel your booking</a></p>
                  <p>We're looking forward to seeing you!</p>
                  <p style="margin-top: 20px;">
                    BanyaHouse<br>
                    3339 SW 34th Ct, Topeka, KS 66614<br>
                    <a href="https://banyahouse.com">banyahouse.com</a>
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Email to BanyaHouse Owner
    const ownerEmail = await resend.emails.send({
      from: 'BanyaHouse Bookings <bookings@banyahouse.com>',
      to: ['topmobilesauna@gmail.com'], // BanyaHouse owner email
      subject: `🔔 New Booking: ${booking.customer_name} - ${new Date(booking.booking_date).toLocaleDateString()}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #059669; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .detail-row { padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
              .label { font-weight: bold; color: #059669; }
              .button { display: inline-block; background: #059669; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
              .button-danger { background: #dc2626; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📅 New Booking Received!</h1>
              </div>
              <div class="content">
                <div class="details">
                  <h2>Customer Information</h2>
                  <div class="detail-row">
                    <span class="label">Name:</span> ${booking.customer_name}
                  </div>
                  <div class="detail-row">
                    <span class="label">Email:</span> <a href="mailto:${booking.customer_email}">${booking.customer_email}</a>
                  </div>
                  <div class="detail-row">
                    <span class="label">Phone:</span> <a href="tel:${booking.customer_phone}">${booking.customer_phone}</a>
                  </div>
                  <div class="detail-row">
                    <span class="label">Location:</span> ${booking.location}
                  </div>
                </div>

                <div class="details">
                  <h2>Booking Details</h2>
                  <div class="detail-row">
                    <span class="label">Date:</span> ${new Date(booking.booking_date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div class="detail-row">
                    <span class="label">Time:</span> ${booking.time_slot}
                  </div>
                  <div class="detail-row">
                    <span class="label">Service Type:</span> ${booking.service_type === 'private' ? 'Private Session' : 'Delivered Experience'}
                  </div>
                  <div class="detail-row">
                    <span class="label">Duration:</span> ${booking.duration === '2' ? '2-4 Hours' : booking.duration === '24' ? '24 Hours' : '3 Days'}
                  </div>
                  <div class="detail-row">
                    <span class="label">Number of Guests:</span> ${booking.guests}
                  </div>
                  ${booking.add_ons && booking.add_ons.length > 0 ? `
                  <div class="detail-row">
                    <span class="label">Add-ons:</span> ${booking.add_ons.join(', ')}
                  </div>
                  ` : ''}
                  ${booking.special_requests ? `
                  <div class="detail-row">
                    <span class="label">Special Requests:</span> ${booking.special_requests}
                  </div>
                  ` : ''}
                  <div class="detail-row">
                    <span class="label">Booking ID:</span> ${booking.id}
                  </div>
                </div>

                <center>
                  <a href="https://supabase.com/dashboard/project/mjbflkpfoomewplzghwp/editor" class="button">View in Database</a>
                  <a href="${cancellationUrl}" class="button button-danger">Cancel Booking</a>
                </center>

                <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
                  This booking was automatically confirmed. Customer has been sent a confirmation email.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (customerEmail.error || ownerEmail.error) {
      console.error('Email error:', customerEmail.error || ownerEmail.error);
      throw new Error('Failed to send emails');
    }

    return NextResponse.json({ 
      success: true,
      customerEmailId: customerEmail.data?.id,
      ownerEmailId: ownerEmail.data?.id
    });
  } catch (error: any) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send confirmation emails' },
      { status: 500 }
    );
  }
}