import { Resend } from "resend";

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await Promise.all([
      // Notifikasi ke owner
      resend.emails.send({
        from: "info@phirk-itsolution.my.id",
        to: "lokimonkmonk.219@gmail.com",
        replyTo: email,
        subject: `[Phirk] New inquiry from ${name} — ${service || "General"}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f1a;color:#e2e8f0;padding:32px;border-radius:16px;">
            <p style="font-size:11px;letter-spacing:0.3em;color:#67e8f9;text-transform:uppercase;margin:0 0 16px;">New Inquiry · Phirk IT Solution</p>
            <h2 style="margin:0 0 24px;font-size:22px;color:#ffffff;">${name} wants to work with you</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:12px 16px;background:#111827;border-radius:8px 8px 0 0;border-bottom:1px solid #1f2937;">
                <p style="margin:0;font-size:11px;color:#94a3b8;letter-spacing:0.2em;text-transform:uppercase;">Name</p>
                <p style="margin:4px 0 0;font-size:15px;color:#f1f5f9;">${name}</p>
              </td></tr>
              <tr><td style="padding:12px 16px;background:#111827;border-bottom:1px solid #1f2937;">
                <p style="margin:0;font-size:11px;color:#94a3b8;letter-spacing:0.2em;text-transform:uppercase;">Email</p>
                <p style="margin:4px 0 0;font-size:15px;color:#67e8f9;">${email}</p>
              </td></tr>
              <tr><td style="padding:12px 16px;background:#111827;border-bottom:1px solid #1f2937;">
                <p style="margin:0;font-size:11px;color:#94a3b8;letter-spacing:0.2em;text-transform:uppercase;">Service</p>
                <p style="margin:4px 0 0;font-size:15px;color:#f1f5f9;">${service || "Not specified"}</p>
              </td></tr>
              <tr><td style="padding:12px 16px;background:#111827;border-radius:0 0 8px 8px;">
                <p style="margin:0;font-size:11px;color:#94a3b8;letter-spacing:0.2em;text-transform:uppercase;">Message</p>
                <p style="margin:8px 0 0;font-size:15px;color:#f1f5f9;line-height:1.7;white-space:pre-wrap;">${message}</p>
              </td></tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#0e7490;border-radius:10px;">
              <p style="margin:0;font-size:13px;color:#e0f2fe;">Reply directly to this email to respond to ${name}.</p>
            </div>
            <p style="margin:24px 0 0;font-size:11px;color:#475569;text-align:center;">Phirk IT Solution · phirk-itsolution.my.id</p>
          </div>
        `,
      }),

      // Auto-reply ke klien
      resend.emails.send({
        from: "info@phirk-itsolution.my.id",
        to: email,
        subject: `We received your message — Phirk IT Solution`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f1a;color:#e2e8f0;padding:32px;border-radius:16px;">
            <p style="font-size:11px;letter-spacing:0.3em;color:#67e8f9;text-transform:uppercase;margin:0 0 16px;">Phirk IT Solution</p>
            <h2 style="margin:0 0 16px;font-size:22px;color:#ffffff;">Hi ${name}, we got your message.</h2>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.8;color:#94a3b8;">
              Thanks for reaching out. I'll review your inquiry and get back to you within 24 hours.
            </p>
            <div style="padding:20px;background:#111827;border-radius:12px;border-left:3px solid #67e8f9;">
              <p style="margin:0;font-size:13px;color:#94a3b8;">Your message:</p>
              <p style="margin:8px 0 0;font-size:14px;color:#e2e8f0;line-height:1.7;white-space:pre-wrap;">${message}</p>
            </div>
            <p style="margin:24px 0 0;font-size:14px;color:#94a3b8;">
              In the meantime, you can also reach me directly on
              <a href="https://wa.me/6289693727848" style="color:#67e8f9;">WhatsApp</a>.
            </p>
            <p style="margin:24px 0 0;font-size:11px;color:#475569;text-align:center;">Phirk IT Solution · phirk-itsolution.my.id</p>
          </div>
        `,
      }),
    ]);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
