'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function sendEmail(data: z.infer<typeof schema>) {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new Error('Invalid form data');
  }

  // Add your email sending logic here
  // Example: using a service like SendGrid, AWS SES, or your own SMTP server

  // For now, we'll just simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
