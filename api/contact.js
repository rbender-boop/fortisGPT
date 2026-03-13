export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { first, last, email, phone, exp, msg } = req.body;

  if (!first || !last || !email || !phone || !exp) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const html = `
    <div style="font-family:sans-serif; max-width:600px; margin:0 auto; background:#1A1D38; color:#ffffff; padding:32px; border-radius:12px;">
      <div style="font-size:11px; letter-spacing:3px; color:#C9A55A; text-transform:uppercase; margin-bottom:8px;">FortisGPT.com</div>
      <h2 style="margin:0 0 24px; color:#ffffff;">New Recruiting Inquiry</h2>
      <table style="width:100%; border-collapse:collapse;">
        <tr><td style="padding:10px 0; color:#7481A6; font-size:12px; text-transform:uppercase; letter-spacing:1px; width:140px;">Name</td><td style="padding:10px 0; color:#ffffff;">${first} ${last}</td></tr>
        <tr><td style="padding:10px 0; color:#7481A6; font-size:12px; text-transform:uppercase; letter-spacing:1px;">Email</td><td style="padding:10px 0; color:#ffffff;"><a href="mailto:${email}" style="color:#C9A55A;">${email}</a></td></tr>
        <tr><td style="padding:10px 0; color:#7481A6; font-size:12px; text-transform:uppercase; letter-spacing:1px;">Phone</td><td style="padding:10px 0; color:#ffffff;">${phone}</td></tr>
        <tr><td style="padding:10px 0; color:#7481A6; font-size:12px; text-transform:uppercase; letter-spacing:1px;">Experience</td><td style="padding:10px 0; color:#ffffff;">${exp}</td></tr>
        ${msg ? `<tr><td style="padding:10px 0; color:#7481A6; font-size:12px; text-transform:uppercase; letter-spacing:1px; vertical-align:top;">Message</td><td style="padding:10px 0; color:#ffffff;">${msg}</td></tr>` : ''}
      </table>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'FortisGPT Inquiries <inquiries@fortisgpt.com>',
        to: ['rob@fortiscsg.com', 'doug@fortiscsg.com', 'steve@fortiscsg.com'],
        reply_to: email,
        subject: `FCS Recruiting Inquiry — ${first} ${last}`,
        html,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
