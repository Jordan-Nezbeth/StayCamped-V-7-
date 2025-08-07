// ✅ This should be line 1 — DO NOT move it down
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// ✅ Your Supabase credentials
const supabaseUrl = 'https://vqoirfycaqbaknfetdxj.supabase.co'
const supabaseAnonKey = 'your_actual_anon_key_here'  // Replace this with your real anon key

// ✅ Create the Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ✅ Load camper listings
export async function loadListings() {
  const { data, error } = await supabase
    .from('Camper_Listing')
    .select('*')
    .eq('status', 'approved')

  if (error) {
    console.error('Error loading listings from Supabase:', error)
    return []
  }

  return data
}
