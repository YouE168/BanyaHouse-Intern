import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('🔍 API Route called');
  
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set!');
      return NextResponse.json({ 
        error: 'Server configuration error: Missing API key'
      }, { status: 500 });
    }

    const body = await request.json();
    console.log('📦 Request body received');

    const { name, email, phone, serviceType, date, duration, guests, location, addOns, message } = body;

    console.log('📧 Attempting to send email...');

    // IMPORTANT: Change the 'from' address to match your verified domain
    // For now, using onboarding@resend.dev with 'to' as your email
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Resend requires this exact format for test domain
      to: ['topmobilesauna@gmail.com'], // Your email
      replyTo: email, // Customer's email for replies
      subject: `🔥 New Sauna Booking Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #8B4513; color: white; padding: 20px; border-radius: 5px; }
            .content { background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px; }
            .section { margin: 15px 0; }
            .label { font-weight: bold; color: #8B4513; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔥 New Sauna Booking Request</h1>
            </div>
            
            <div class="content">
              <div class="section">
                <h2>Customer Information</h2>
                <p><span class="label">Name:</span> ${name}</p>
                <p><span class="label">Email:</span> ${email}</p>
                <p><span class="label">Phone:</span> ${phone}</p>
              </div>
              
              <div class="section">
                <h2>Booking Details</h2>
                <p><span class="label">Service Type:</span> ${serviceType === 'private' ? 'Private Group Session' : 'Delivered & Setup'}</p>
                <p><span class="label">Date:</span> ${new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</p>
                <p><span class="label">Duration:</span> ${duration === '2' ? '2-4 Hours' : duration === '24' ? '24 Hours (Overnight)' : '3 Days'}</p>
                <p><span class="label">Number of Guests:</span> ${guests}</p>
                <p><span class="label">Location:</span> ${location}</p>
              </div>
              
              ${addOns && addOns.length > 0 ? `
              <div class="section">
                <h2>Add-Ons Requested</h2>
                <ul>
                  ${addOns.map((addOn: string) => `<li>${addOn}</li>`).join('')}
                </ul>
              </div>
              ` : ''}
              
              ${message ? `
              <div class="section">
                <h2>Special Requests</h2>
                <p>${message}</p>
              </div>
              ` : ''}
            </div>
            
            <div class="footer">
              <p>This booking request was submitted through banyahouse.com/book</p>
              <p>Reply directly to this email to contact ${name}</p>
            </div>
          </div>
        </body>
        </html>
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

export async function GET() {
  return NextResponse.json({ 
    status: 'API route is working',
    apiKeyConfigured: !!process.env.RESEND_API_KEY,
    timestamp: new Date().toISOString()
  });
}