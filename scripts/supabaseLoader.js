// ✅ supabaseLoader.js

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://vqoirfycaqbaknfetdxj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxb2lyZnljYXFiYWtuZmV0ZHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzA5NDgsImV4cCI6MjA2Nzc0Njk0OH0.PJaoaaMQkQmBIdRQLPs7rYWzxivhQloOm2Gd6UTc204' // replace this line

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
