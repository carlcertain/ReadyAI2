import { Handler } from '@netlify/functions';
import { requireAuth } from '../../src/middleware/auth';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  // Convert Netlify event to Request for auth middleware
  const request = new Request(event.rawUrl, {
    method: event.httpMethod,
    headers: new Headers(event.headers as any),
    body: event.body,
  });

  const authError = await requireAuth(request);
  if (authError) return {
    statusCode: authError.status,
    body: authError.body,
  };

  try {
    const metric = JSON.parse(event.body || '{}');

    // Here you would typically send the metric to your analytics service
    // For now, we'll just log it
    console.log('Performance metric:', metric);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process performance metric' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};