// scripts/loadListings.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 🔧 Replace with your actual Supabase project URL and anon key
const supabaseUrl = 'https://vqoirfycaqbaknfetdxj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxb2lyZnljYXFiYWtuZmV0ZHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzA5NDgsImV4cCI6MjA2Nzc0Njk0OH0.PJaoaaMQkQmBIdRQLPs7rYWzxivhQloOm2Gd6UTc204'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Function to load listings from the Camper_Listing table
export async function loadListings() {
  try {
    const { data, error } = await supabase
      .from('Camper_Listing')
      .select('*')
      .eq('status', 'approved') // only approved listings show

    if (error) {
      console.error('Supabase error:', error)
      return []
    }

    return data || []
  } catch (err) {
    console.error('Unexpected error loading listings:', err)
    return []
  }
}
