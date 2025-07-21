import { Handler } from '@netlify/functions';
import { createTransport } from 'nodemailer';

export const handler: Handler = async (event) => {
  
  console.log("SMTP CONFIG", {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
});

return {
  statusCode: 200,
  body: 'This is a serverless function for sending emails.',
}

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { to, subject, formData } = body;

    console.log("📨 Parsed body:", body);

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Test the connection
    await transporter.verify();
    console.log("✅ Transporter verified");

    const emailContent = `
      New Contact Form Submission
      
      Name: ${formData.name}
      Company: ${formData.company}
      Email: ${formData.email}
      Phone: ${formData.phone}
      
      Message:
      ${formData.message}
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      text: emailContent,
    });

    console.log("✅ Email sent successfully");

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error: any) {
    console.error("❌ Error occurred:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Unknown error" }),
    };
  }
};
