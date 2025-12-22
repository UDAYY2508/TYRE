/**
 * EmailJS Configuration
 * 
 * To set up EmailJS:
 * 1. Go to https://www.emailjs.com/ and create a free account
 * 2. Create an Email Service (Gmail, Outlook, etc.)
 * 3. Create an Email Template
 * 4. Get your Public Key from Account > API Keys
 * 5. Fill in the values below
 */

// Helper to safely access environment variables
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  const env = (import.meta as unknown as { env: Record<string, string | undefined> }).env;
  return env?.[key] || defaultValue;
};

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (found in Email Services)
  SERVICE_ID: getEnvVar('VITE_EMAILJS_SERVICE_ID', ''),

  // Your EmailJS Template ID (found in Email Templates)
  TEMPLATE_ID: getEnvVar('VITE_EMAILJS_TEMPLATE_ID', ''),

  // Your EmailJS Public Key (found in Account > API Keys)
  PUBLIC_KEY: getEnvVar('VITE_EMAILJS_PUBLIC_KEY', ''),

  // Email address where appointment requests will be sent
  RECEIVER_EMAIL: getEnvVar('VITE_RECEIVER_EMAIL', 'vabe2023@gmail.com'),
};

