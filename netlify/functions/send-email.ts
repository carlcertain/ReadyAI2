import { Handler } from '@netlify/functions';
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  logger: true, // logs to console
  debug: true,  // detailed protocol logs
});

export const handler: Handler = async (event) => {
  console.log('📨 Incoming request to send-email function');

  if (event.httpMethod !== 'POST') {
    console.warn('⚠️ Invalid HTTP method:', event.httpMethod);
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    console.log('🧾 Raw body:', event.body);

    const parsedBody = JSON.parse(event.body || '{}');
    const { to, subject, formData } = parsedBody;

    if (!to || !subject || !formData || !formData.email) {
      console.error('❌ Missing required fields');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const emailContent = `
New Contact Form Submission

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    console.log('📧 Sending email to:', to);

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      text: emailContent,
    });

    console.log('✅ Email sent:', info);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, messageId: info.messageId }),
    };

  } catch (error) {
    console.error('❌ Error sending email:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : String(error),
      }),
    };
  }
};