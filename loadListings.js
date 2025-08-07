// ✅ CORRECTED loadListings.js

// 1. Import Supabase client from CDN (this must come first)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 2. Initialize Supabase client AFTER importing
const supabaseUrl = 'https://vqoirfycaqbaknfetdxj.supabase.co'
const supabaseAnonKey = 'your_actual_anon_key_here'  // Replace this line with your real anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 3. Export the function AFTER supabase is created
export async function loadListings() {
  const { data, error } = await supabase
    .from('Camper_Listing')
    .select('*')
    .eq('status', 'approved')

  if (error) {
    console.error('Error loading listings:', error)
    return []
  }

  return data
}
