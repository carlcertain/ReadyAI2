import { z } from 'zod';

export const UserRoleSchema = z.enum(['admin', 'editor', 'viewer']);
export type UserRole = z.infer<typeof UserRoleSchema>;

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: UserRoleSchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});
export type User = z.infer<typeof UserSchema>;

export const ContentVersionSchema = z.object({
  id: z.string().uuid(),
  content_id: z.string().uuid(),
  version: z.number(),
  data: z.record(z.unknown()),
  created_at: z.string().datetime(),
  created_by: z.string().uuid(),
  is_published: z.boolean(),
});
export type ContentVersion = z.infer<typeof ContentVersionSchema>;

export const ContentSchema = z.object({
  id: z.string().uuid(),
  type: z.enum(['page', 'section', 'component']),
  slug: z.string(),
  title: z.string(),
  current_version: z.number(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});
export type Content = z.infer<typeof ContentSchema>;