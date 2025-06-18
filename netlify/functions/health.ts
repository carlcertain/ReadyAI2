import { Handler } from '@netlify/functions';
import { requireAuth } from '../../src/middleware/auth';

export const handler: Handler = async (event) => {
  // Convert Netlify event to Request for auth middleware
  const request = new Request(event.rawUrl, {
    method: event.httpMethod,
    headers: new Headers(event.headers as any),
    body: event.body ? event.body : null,
  });

  const authError = await requireAuth(request);
  if (authError) return {
    statusCode: authError.status,
    body: authError.body,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  };
};