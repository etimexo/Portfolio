import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a mock client that returns empty results when Supabase is not configured
const createMockClient = () => ({
  from: () => ({
    select: () => ({
      order: () => Promise.resolve({ data: [], error: null }),
    }),
  }),
});

export const supabase: SupabaseClient | ReturnType<typeof createMockClient> = 
  supabaseUrl && supabaseAnonKey 
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createMockClient();

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
