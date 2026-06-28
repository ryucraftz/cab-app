import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Initialize Resend with the API key from environment variables
// On Vercel, this is stored securely and not exposed to the frontend
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { 
      customer_name, 
      customer_phone, 
      pickup_location, 
      dropoff_location, 
      pickup_time,
      passengers
    } = req.body;

    // Validate required fields
    if (!customer_name || !customer_phone || !pickup_location) {
      return res.status(400).json({ error: 'Missing required booking details' });
    }

    const formattedDate = new Date(pickup_time).toLocaleString();

    // Send the email
    const { data, error } = await resend.emails.send({
      from: 'Yogesh Cabs <onboarding@resend.dev>', // Resend gives you a free testing domain
      to: process.env.ADMIN_EMAIL || 'admin@yogeshcabs.in', // The email address you want to receive notifications at
      subject: `🚨 NEW RIDE ALERT: ${customer_name}`,
      html: `
        <h2>New Ride Booking Received!</h2>
        <p><strong>Customer:</strong> ${customer_name}</p>
        <p><strong>Phone:</strong> ${customer_phone}</p>
        <p><strong>Pickup:</strong> ${pickup_location}</p>
        <p><strong>Dropoff:</strong> ${dropoff_location}</p>
        <p><strong>Time:</strong> ${formattedDate}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        <br />
        <p>Check your <a href="https://yogeshcabs.in/admin">Admin Dashboard</a> to confirm this ride.</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
