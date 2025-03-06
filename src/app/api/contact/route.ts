import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, postcode, subject, subService, message } = await req.json();

    // Define icons for different services
    const serviceIcons: Record<string, string> = {
      Electrical: "⚡",
      Security: "🔒",
      "Cooling Systems": "❄️",
    };

    // Choose an icon or fallback
    const serviceIcon = serviceIcons[subject] || "📌";

    // Email Template
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; background: #f8f9fa;">
        <!-- Header with Logo -->
        <div style="background: #007bff; padding: 20px; text-align: center;">
          <img src="https://madaaircon-nextjs.vercel.app/assets/logo/logo-full.png" alt="Madaaircon Logo" style="max-width: 150px; margin-bottom: 10px;" />
          <h2 style="color: white;">🔧 ${serviceIcon} ${subject} Service Request</h2>
        </div>

        <div style="padding: 20px;">
          <p style="font-size: 16px; font-weight: bold; color: #333;">📌 Request Details:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; font-weight: bold;">👤 Full Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">📧 Email:</td><td>${email}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">📞 Phone:</td><td>${phone}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">🏡 Postcode:</td><td>${postcode}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">📂 Sub-Service:</td><td>${subService}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">💬 Message:</td><td>${message}</td></tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background: #e3e3e3; border-radius: 5px;">
            <p style="font-size: 14px; color: #333;">
              📩 This request was submitted through the Madaaircon website. Please follow up as soon as possible.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #007bff; color: white; padding: 10px; text-align: center;">
          <p style="font-size: 14px;">🔧 Madaaircon - Your Reliable Air Conditioning & Electrical Partner.</p>
        </div>
      </div>
    `;

    // Email Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `🔧 ${serviceIcon} New Service Request - ${subject}`,
      html: emailHTML,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email Sent Successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Email Sending Failed" }, { status: 500 });
  }
}
