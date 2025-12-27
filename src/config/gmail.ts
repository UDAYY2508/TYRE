/**
 * Gmail API Configuration
 */

// Helper to get API base URL
export const getApiBaseUrl = (): string => {
  // In production (Vercel), use absolute URL
  if (typeof window !== 'undefined') {
    // Client-side: use current origin
    return window.location.origin;
  }
  // Server-side: use environment variable or default
  return process.env.BASE_URL || 'http://localhost:3000';
};

export const GMAIL_API = {
  // OAuth authorization URL
  AUTH_URL: '/api/gmail/auth',
  
  // Send email endpoint
  SEND_URL: '/api/gmail/send',
  
  // Check connection status
  STATUS_URL: '/api/gmail/status',
  
  // Disconnect Gmail
  DISCONNECT_URL: '/api/gmail/disconnect',
};

