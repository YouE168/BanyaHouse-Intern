import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        error: 'Server configuration error: Missing API key'
      }, { status: 500 });
    }

    const body = await request.json();
    const { name, email, phone, serviceType, date, duration, guests, location, addOns, message } = body;

    // Format the date 
    const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const { data, error } = await resend.emails.send({
      from: "Banya House <booking@banyahouse.com>",
      to: ['topmobilesauna@gmail.com'],
      replyTo: email,
      subject: `🔥 New Sauna Booking Request - ${name} - ${formattedDate}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: #8B4513; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; }
            .section { margin: 20px 0; padding: 15px; background: white; border-radius: 5px; border-left: 4px solid #8B4513; }
            .section h2 { margin-top: 0; color: #8B4513; font-size: 18px; }
            .info-row { margin: 10px 0; }
            .label { font-weight: bold; color: #555; display: inline-block; min-width: 150px; }
            .value { color: #333; }
            .footer { background: #f5f5f5; padding: 20px; text-align: center; color: #666; font-size: 14px; border-radius: 0 0 8px 8px; }
            ul { margin: 10px 0; padding-left: 20px; }
            li { margin: 5px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🔥 New Sauna Booking Request</h1>
          </div>
          
          <div class="content">
            <div class="section">
              <h2>👤 Customer Information</h2>
              <div class="info-row">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="info-row">
                <span class="label">Phone:</span>
                <span class="value"><a href="tel:${phone}">${phone}</a></span>
              </div>
            </div>
            
            <div class="section">
              <h2>📅 Booking Details</h2>
              <div class="info-row">
                <span class="label">Service Type:</span>
                <span class="value">${serviceType === 'private' ? '🏠 Private Group Session' : '🚚 Delivered & Setup'}</span>
              </div>
              <div class="info-row">
                <span class="label">Preferred Date:</span>
                <span class="value"><strong>${formattedDate}</strong></span>
              </div>
              <div class="info-row">
                <span class="label">Duration:</span>
                <span class="value">${duration === '2' ? '⏱️ 2-4 Hours' : duration === '24' ? '🌙 24 Hours (Overnight)' : '📆 3 Days'}</span>
              </div>
              <div class="info-row">
                <span class="label">Number of Guests:</span>
                <span class="value">${guests} ${guests === '1' ? 'Guest' : 'Guests'}</span>
              </div>
              <div class="info-row">
                <span class="label">Location/Address:</span>
                <span class="value"><strong>${location}</strong></span>
              </div>
            </div>
            
            ${addOns && addOns.length > 0 ? `
            <div class="section">
              <h2>➕ Add-Ons Requested</h2>
              <ul>
                ${addOns.map((addOn: string) => `<li>${addOn}</li>`).join('')}
              </ul>
            </div>
            ` : ''}
            
            ${message ? `
            <div class="section">
              <h2>💬 Special Requests</h2>
              <p style="margin: 0;">${message}</p>
            </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <p style="margin: 5px 0;">📧 Reply directly to this email to contact ${name}</p>
            <p style="margin: 5px 0; font-size: 12px;">Submitted via banyahouse.com/book</p>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ 
        error: 'Failed to send email',
        details: error
      }, { status: 400 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'API route is working',
    apiKeyConfigured: !!process.env.RESEND_API_KEY,
    timestamp: new Date().toISOString()
  });
}