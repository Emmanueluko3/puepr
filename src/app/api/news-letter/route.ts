import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // ✅ CPANEL EMAIL TRANSPORTER
    const transporter = nodemailer.createTransport({
      host: "mail.puepr.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ---- EMAIL TEMPLATE (Reusable) ----
    const getEmailTemplate = (isInternal: boolean) => `
<div style="margin:0; padding:0; background:#f4f4f4; width:100%; font-family:Arial, sans-serif;">
  <div style="max-width:700px; margin:0 auto; background:#ffffff;">

    <!-- Top Blue Header -->
    <div style="background:#0009a8; padding:20px;">
      <img src="https://www.puepr.com/logos/logo-light.png" alt="PUEPR Logo" style="height:40px;">
    </div>

    <!-- Image -->
    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470" 
         style="width:100%; height:auto; display:block;" />

    <!-- Content Wrapper -->
    <div style="padding:40px;">

      <h2 style="text-align:center; font-size:24px; font-weight:bold; margin-bottom:20px;">
        ${
          isInternal
            ? "New Newsletter Subscriber"
            : "Welcome to PUEPR Newsletter!"
        }
      </h2>

      <p>Dear ${isInternal ? "PUEPR Team" : "Subscriber"},</p>

      <p>
        ${
          isInternal
            ? `A new subscriber has joined your newsletter list.`
            : `Thank you for subscribing to the PUEPR Consulting newsletter! We're excited to have you on board.`
        }
      </p>

      ${
        isInternal
          ? `
      <h3 style="margin-top:30px; font-size:18px;">Subscriber Information:</h3>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
      `
          : `
      <h3 style="margin-top:30px; font-size:18px;">What to Expect:</h3>
      <p>You'll receive:</p>
      <p style="margin-left:20px;">
        • Industry insights and best practices<br />
        • Updates on PUEPR's latest projects and services<br />
        • Exclusive tips for business growth<br />
        • Special announcements and offers
      </p>

      <p style="margin-top:20px;">
        We respect your inbox and will only send you valuable, relevant content. Expect to hear from us once or twice per month.
      </p>

      <p style="margin-top:20px;">
        For questions or support, contact us:
      </p>
      <p><strong>Email:</strong> info@puepr.com</p>
      <p><strong>Phone:</strong> +381 63 7160315</p>
      `
      }

      <p style="margin-top:30px;">Best regards,<br />PUEPR Consulting Team</p>
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

    </div>

  </div>
</div>
`;

    // ---- SEND CONFIRMATION EMAIL TO SUBSCRIBER ----
    await transporter.sendMail({
      from: `"PUEPR Consulting" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to PUEPR Newsletter!",
      html: getEmailTemplate(false),
    });

    // ---- SEND INTERNAL NOTIFICATION EMAIL ----
    await transporter.sendMail({
      from: process.env.INTERNAL_EMAIL,
      to: process.env.INTERNAL_EMAIL,
      subject: "New Newsletter Subscriber",
      html: getEmailTemplate(true),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to subscribe",
      },
      { status: 500 }
    );
  }
}
