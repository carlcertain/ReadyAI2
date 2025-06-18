import { z } from 'zod';

// Input validation schemas
export const emailSchema = z.string().email();
export const passwordSchema = z
  .string()
  .min(12)
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

export const rateLimiter = (() => {
  const attempts = new Map<string, { count: number; timestamp: number }>();
  const MAX_ATTEMPTS = 5;
  const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

  return {
    checkLimit: (key: string): boolean => {
      const now = Date.now();
      const record = attempts.get(key);

      if (!record) {
        attempts.set(key, { count: 1, timestamp: now });
        return true;
      }

      if (now - record.timestamp > WINDOW_MS) {
        attempts.set(key, { count: 1, timestamp: now });
        return true;
      }

      if (record.count >= MAX_ATTEMPTS) {
        return false;
      }

      record.count++;
      return true;
    },
    reset: (key: string): void => {
      attempts.delete(key);
    }
  };
})();

export const generateNonce = (): string => {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

export const hashData = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};