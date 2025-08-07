// ✅ loadListings-fixed.js

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://vqoirfycaqbaknfetdxj.supabase.co'
const supabaseAnonKey = 'YOUR_REAL_ANON_KEY_HERE' // replace with your real key

const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
