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
});



export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { to, subject, formData } = JSON.parse(event.body || '{}');

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

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error sending email:', JSON.stringify(error, null, 2));
console.log(`SMTP configuration:
  Host: ${process.env.SMTP_HOST}
  Port: ${process.env.SMTP_PORT}
  Secure: ${process.env.SMTP_SECURE}
  User: ${process.env.SMTP_USER}
  Pass: ${process.env.SMTP_PASS}`);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};