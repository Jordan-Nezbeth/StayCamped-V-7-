// ✅ loadListings.js (clean and fixed)

// ✅ 1. Import Supabase client from CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// ✅ 2. Initialize Supabase client
const supabaseUrl = 'https://vqoirfycaqbaknfetdxj.supabase.co'
const supabaseAnonKey = 'YOUR_REAL_ANON_KEY_HERE' // 👈 Replace this
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ✅ 3. Export function that loads camper listings
export async function loadListings() {
  const { data, error } = await supabase
    .from('Camper_Listing')
    .select('*')
    .eq('status', 'approved')

  if (error) {
    console.error('Supabase Error:', error)
    return []
  }

  return data
}

