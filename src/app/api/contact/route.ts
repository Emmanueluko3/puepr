import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, services, message } = body;

    // ✅ FIXED TRANSPORTER FOR CPANEL
    const transporter = nodemailer.createTransport({
      host: "mail.puepr.com", // IMPORTANT
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // info@puepr.com
        pass: process.env.EMAIL_PASS, // your real cpanel email password
      },
    });

    // ---- EMAIL TEMPLATE ----
    const htmlTemplate = `
<div style="margin:0; padding:0; background:#f4f4f4; width:100%; font-family:Arial, sans-serif;">
  <div style="max-width:700px; margin:0 auto; background:#ffffff;">

    <!-- Top Blue Header -->
    <div style="background:#0009a8; padding:20px;">
      <img src="https://www.puepr.com/logos/logo-light.png" alt="PUEPR Logo" style="height:40px;">
    </div>

    <!-- Image -->
    <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470" 
         style="width:100%; height:auto; display:block;" />

    <!-- Content Wrapper -->
    <div style="padding:40px;">

      <h2 style="text-align:center; font-size:24px; font-weight:bold; margin-bottom:20px;">
        Thank you for contacting PUEPR!
      </h2>

      <p>Dear ${firstName} ${lastName},</p>

      <p>
        Thank you for reaching out to PUEPR Consulting regarding 
        <strong>${services}</strong>.  
        We have successfully received your inquiry and appreciate your interest in our services.
      </p>

      <h3 style="margin-top:30px; font-size:18px;">Your Inquiry Details:</h3>

      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${services}</p>
      <p><strong>Message:</strong> ${message}</p>

      <h3 style="margin-top:30px; font-size:18px;">What happens next?</h3>

      <p>
        Our team will review your inquiry and respond within 24–48 business hours.  
        A member of our consulting team will contact you directly to discuss your 
        specific needs and how we can best assist you.
      </p>

      <p>If you have urgent questions, feel free to contact us:</p>

      <p><strong>Email:</strong> info@puepr.com</p>
      <p><strong>Phone:</strong> +381 63 7160315</p>

      <p style="margin-top:20px;">
        We look forward to working with you and helping your business grow.
      </p>

      <p>Best regards,<br />PUEPR Consulting Team</p>
    </div>

    <!-- Social Footer -->
    <div style="text-align:center; padding-bottom:20px;">
      <a href="https://facebook.com/pueprconsulting" style="margin:0 6px;">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="24">
      </a>
      <a href="https://x.com/pueprconsulting" style="margin:0 6px;">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" width="24">
      </a>
      <a href="https://linkedin.com/company/puepr" style="margin:0 6px;">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="24">
      </a>
      <a href="https://instagram.com/pueprconsulting" style="margin:0 6px;">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="24">
      </a>

      <p style="font-size:13px; color:#777; margin-top:15px;">
        PUEPR Consulting • Headquarters, Belgrade, Serbia
      </p>

      <p style="font-size:12px; color:#999;">
        No longer want to receive these emails? 
        <a href="#" style="color:#0009a8;">Unsubscribe</a>
      </p>
    </div>

  </div>
</div>
`;

    // ---- SEND EMAIL ----
    await transporter.sendMail({
      from: `"PUEPR Consulting" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting PUEPR!",
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
