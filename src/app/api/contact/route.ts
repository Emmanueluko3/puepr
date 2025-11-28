import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, services, message } = body;

    // ✅ FIXED TRANSPORTER FOR CPANEL
    const transporter = nodemailer.createTransport({
      host: "mail.puepr.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ---- EMAIL TEMPLATE (UPDATED BANNER IMAGE) ----
    const getEmailTemplate = (isInternal: boolean) => `
<div style="margin:0; padding:0; background:#f4f4f4; width:100%; font-family:Arial, sans-serif;">
  <div style="max-width:700px; margin:0 auto; background:#ffffff;">

    <!-- Top Blue Header -->
    <div style="background:#0009a8; padding:20px;">
      <img src="https://www.puepr.com/logos/logo-light.png" alt="PUEPR Logo" style="height:40px; display:block;">
    </div>

    <!-- FIXED RESPONSIVE IMAGE FOR iPHONE MAIL -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470"
            alt="Contact Header"
            width="700"
            style="display:block; width:100%; height:auto; border:0; outline:none; text-decoration:none;"
          />
        </td>
      </tr>
    </table>

    <!-- Content Wrapper -->
    <div style="padding:40px; box-sizing:border-box;">

      <h2 style="text-align:center; font-size:24px; font-weight:bold; margin-bottom:20px;">
        ${
          isInternal
            ? "New Contact Form Submission"
            : "Thank you for contacting PUEPR!"
        }
      </h2>

      <p>Dear ${isInternal ? "PUEPR Team" : firstName + " " + lastName},</p>

      <p>
        ${
          isInternal
            ? "A new contact form submission has been received on your website."
            : `Thank you for reaching out to PUEPR regarding 
            <strong>${services}</strong>. We have successfully received your inquiry and appreciate your interest in our services.`
        }
      </p>

      <h3 style="margin-top:30px; font-size:18px;">Inquiry Details:</h3>

      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${services}</p>
      <p><strong>Message:</strong> ${message}</p>

      <h3 style="margin-top:30px; font-size:18px;">
        ${isInternal ? "Action Required:" : "What happens next?"}
      </h3>

      <p>
        ${
          isInternal
            ? "Please review this inquiry and respond to the client within 24–48 business hours."
            : "Our team will review your inquiry and respond within 24–48 business hours. A member of our consulting team will contact you directly to discuss your specific needs and how we can best assist you."
        }
      </p>

      ${
        !isInternal
          ? `
      <p>If you have urgent questions, feel free to contact us:</p>

      <p><strong>Email:</strong> info@puepr.com</p>
      <p><strong>Phone:</strong> +381 63 7160315</p>

      <p style="margin-top:20px;">
        We look forward to working with you and helping your business grow.
      </p>
      `
          : ""
      }

      <p>Best regards,<br />PUEPR Team</p>
    </div>

    <!-- Social Footer -->
    <div style="text-align:center; padding-bottom:20px;">
      <a href="https://facebook.com/pueprconsulting" style="margin:0 6px;">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="24" alt="Facebook">
      </a>
      <a href="https://x.com/pueprconsulting" style="margin:0 6px;">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" width="24" alt="X">
      </a>
      <a href="https://linkedin.com/company/puepr" style="margin:0 6px;">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="24" alt="LinkedIn">
      </a>
      <a href="https://instagram.com/pueprconsulting" style="margin:0 6px;">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="24" alt="Instagram">
      </a>

      <p style="font-size:13px; color:#777; margin-top:15px;">
        PUEPR • Headquarters, Belgrade, Serbia
      </p>

    </div>

  </div>
</div>
`;

    // ---- SEND CLIENT EMAIL ----
    await transporter.sendMail({
      from: `"PUEPR" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting PUEPR!",
      html: getEmailTemplate(false),
    });

    // ---- SEND INTERNAL EMAIL ----
    await transporter.sendMail({
      from: `"PUEPR" <${process.env.EMAIL_USER}>`,
      to: `${process.env.EMAIL_USER},${process.env.INTERNAL_EMAIL}`,
      subject: "New Contact Form Submission",
      html: getEmailTemplate(true),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 }
    );
  }
}
