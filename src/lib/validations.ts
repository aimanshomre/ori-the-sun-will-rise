import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'נא להזין שם מלא'),
  email: z.string().email('נא להזין כתובת אימייל תקינה'),
  phone: z.string().regex(/^0[0-9]{8,9}$/, 'נא להזין מספר טלפון תקין'),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
