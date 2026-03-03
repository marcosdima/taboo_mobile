import { Platform } from 'react-native';

const API_URL = Platform.select({
  android: 'http://10.0.2.2:5000',
  default: 'http://localhost:5000',
}) as string;

type AuthPayload = {
  alias: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: {
    id: number;
    alias: string;
  };
};

type ErrorResponse = {
  error?: string;
};

export type GameResponse = {
  id: number;
  creator: number;
  started_at: string | null;
  ended_at: string | null;
};

type HttpResponse = {
  ok: boolean;
  json: () => Promise<unknown>;
};

const parseResponse = async <T>(response: HttpResponse): Promise<T> => {
  const body = (await response.json()) as T & ErrorResponse;

  if (!response.ok) {
    throw new Error(body.error || 'Request failed');
  }

  return body;
};

export const login = async (payload: AuthPayload): Promise<LoginResponse> => {
  const response = await globalThis.fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return parseResponse<LoginResponse>(response);
};

export const signIn = async (payload: AuthPayload) => {
  const response = await globalThis.fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return parseResponse(response);
};

export const getGames = async (token: string): Promise<GameResponse[]> => {
  const response = await globalThis.fetch(`${API_URL}/games`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return parseResponse<GameResponse[]>(response);
};

