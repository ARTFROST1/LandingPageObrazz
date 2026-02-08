// API client for communicating with the Node.js backend (obrazz-api)
// Used for operations that go through the API (payments, AI generations)
// Dashboard reads use Supabase directly via server components

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface ApiOptions {
  method?: string;
  body?: unknown;
  token?: string;
  headers?: Record<string, string>;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
    details?: unknown;
  };
  meta?: Record<string, unknown>;
}

/**
 * Make an API call to the obrazz-api backend
 * @param path - API path (e.g. '/api/v1/tokens/balance')
 * @param options - Request options including auth token
 */
export async function apiCall<T = unknown>(
  path: string,
  options: ApiOptions = {},
): Promise<ApiResponse<T>> {
  const { method = 'GET', body, token, headers = {} } = options;

  const fetchHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (token) {
    fetchHeaders['Authorization'] = `Bearer ${token}`;
  }

  const url = path.startsWith('http') ? path : `${API_BASE}${path}`;

  const response = await fetch(url, {
    method,
    headers: fetchHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();
  return data as ApiResponse<T>;
}
