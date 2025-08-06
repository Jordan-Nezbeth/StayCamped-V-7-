// loadListings.js

// Import Supabase client from CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// === Supabase Project Info ===
// Replace the key below with YOUR actual anon key from Supabase
const supabaseUrl = 'https://vqoirfycaqbaknfetdxj.supabase.co'
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxb2lyZnljYXFiYWtuZmV0ZHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzA5NDgsImV4cCI6MjA2Nzc0Njk0OH0.PJaoaaMQkQmBIdRQLPs7rYWzxivhQloOm2Gd6UTc204

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Function to load camper listings
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
